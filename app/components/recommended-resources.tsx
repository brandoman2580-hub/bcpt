"use client";

import { useLayoutEffect, useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink, type LucideIcon } from "lucide-react";

import { cn } from "@/app/components/ui/utils";

export type ResourceListItem = {
  label: string;
  /** Supporting line under the label, such as a book or series list. */
  detail?: string;
  href?: string;
  /** Small thumbnail shown in place of the bullet. Height follows the image, then every card matches the tallest. */
  imageSrc?: string;
  imageAlt?: string;
};

export type RecommendedResourceCardData = {
  title: string;
  icon: LucideIcon;
  iconClassName: string;
  /** Overrides the default thumbnail size for this card. */
  thumbnailClassName?: string;
  items: ResourceListItem[];
};

type RecommendedResourcesProps = {
  cards: RecommendedResourceCardData[];
};

type CardMetrics = {
  heights: number[];
  gap: number;
  chrome: number;
};

function listStackHeight(heights: number[], gap: number) {
  if (heights.length === 0) return 0;

  return heights.reduce((sum, height) => sum + height, 0) + gap * (heights.length - 1);
}

/**
 * The card height budget is the tallest list that can be shown in full.
 * A uniquely taller list overflows into carousel pages that fit inside that budget.
 */
function heightBudgetFor(fullHeights: number[]) {
  if (fullHeights.length === 0) return 0;

  const maxHeight = Math.max(...fullHeights);
  const shorterHeights = fullHeights.filter((height) => height < maxHeight - 0.5);
  if (shorterHeights.length === 0) return maxHeight;

  return Math.max(...shorterHeights);
}

function packItemHeights(heights: number[], gap: number, maxHeight: number) {
  const pages: number[][] = [];
  let page: number[] = [];
  let used = 0;

  heights.forEach((height, index) => {
    const nextUsed = page.length === 0 ? height : used + gap + height;
    const overflow = page.length > 0 ? nextUsed - maxHeight : 0;
    // A row that only crosses the shared list height by the gap still belongs
    // on this page. A clearly taller row starts the next panel.
    if (page.length > 0 && overflow > gap + 0.5) {
      pages.push(page);
      page = [index];
      used = height;
      return;
    }

    page.push(index);
    used = nextUsed;
  });

  if (page.length > 0) pages.push(page);
  return pages;
}

function pagesForMetrics(metrics: CardMetrics[], controlsHeight: number) {
  const fullHeights = metrics.map(
    (metric) => metric.chrome + listStackHeight(metric.heights, metric.gap),
  );
  const budget = heightBudgetFor(fullHeights);

  return metrics.map((metric, metricIndex) => {
    if (fullHeights[metricIndex] <= budget + 0.5) {
      return [metric.heights.map((_, index) => index)];
    }

    // Controls sit under the list, so the page is packed to the shared list
    // height. The card then grows to include the control row.
    const listBudget = Math.max(0, budget - metric.chrome);
    const pages = packItemHeights(metric.heights, metric.gap, listBudget);
    return pages.length > 0 ? pages : [metric.heights.map((_, index) => index)];
  });
}

function shownCardHeight(metric: CardMetrics, pages: number[][], controlsHeight: number) {
  const tallestPage = Math.max(
    ...pages.map((indexes) =>
      listStackHeight(
        indexes.map((index) => metric.heights[index]),
        metric.gap,
      ),
    ),
    0,
  );
  const controls = pages.length > 1 ? controlsHeight : 0;

  return metric.chrome + tallestPage + controls;
}

function measureCard(card: HTMLElement): CardMetrics | null {
  const header = card.querySelector<HTMLElement>("[data-resource-card-header]");
  const list = card.querySelector<HTMLElement>("[data-measure-list]");
  if (!header || !list) return null;

  const items = [...list.querySelectorAll<HTMLElement>(":scope > li")];
  const heights = items.map((item) => item.getBoundingClientRect().height);
  let gap = 0;
  if (items.length > 1) {
    const first = items[0].getBoundingClientRect();
    const second = items[1].getBoundingClientRect();
    gap = Math.max(0, second.top - first.bottom);
  }

  const cardStyles = getComputedStyle(card);
  const headerStyles = getComputedStyle(header);
  const chrome =
    parseFloat(cardStyles.paddingTop) +
    parseFloat(cardStyles.paddingBottom) +
    parseFloat(cardStyles.borderTopWidth) +
    parseFloat(cardStyles.borderBottomWidth) +
    header.getBoundingClientRect().height +
    parseFloat(headerStyles.marginBottom);

  return { heights, gap, chrome };
}

/**
 * Equalizes cards to the tallest fully shown list, and pages any list that would grow past that height.
 */
function useResourceCardLayout(layoutKey: string, cards: RecommendedResourceCardData[]) {
  const gridRef = useRef<HTMLDivElement>(null);
  const signatureRef = useRef("");
  const [minHeight, setMinHeight] = useState<number>();
  const [pagesByCard, setPagesByCard] = useState<ResourceListItem[][][]>(() =>
    cards.map((card) => [card.items]),
  );

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    let cancelled = false;

    const measure = () => {
      if (cancelled) return;

      const cardNodes = [...grid.querySelectorAll<HTMLElement>("[data-resource-card]")];
      const metrics = cardNodes.map((card) => measureCard(card));
      if (metrics.some((metric) => metric === null)) return;

      const resolvedMetrics = metrics as CardMetrics[];
      const controls = grid.querySelector<HTMLElement>("[data-carousel-controls-measure]");
      const controlsHeight = controls?.getBoundingClientRect().height ?? 0;
      const pageIndexes = pagesForMetrics(resolvedMetrics, controlsHeight);
      const nextPages = pageIndexes.map((pages, cardIndex) =>
        pages.map((indexes) => indexes.map((index) => cards[cardIndex].items[index])),
      );
      const nextHeight = Math.ceil(
        Math.max(
          ...resolvedMetrics.map((metric, index) =>
            shownCardHeight(metric, pageIndexes[index], controlsHeight),
          ),
          0,
        ),
      );
      const signature = JSON.stringify({
        height: nextHeight,
        pages: pageIndexes,
      });
      if (signature === signatureRef.current) return;

      signatureRef.current = signature;
      setPagesByCard(nextPages);
      setMinHeight(nextHeight > 0 ? nextHeight : undefined);
    };

    measure();

    const lists = [...grid.querySelectorAll<HTMLElement>("[data-measure-list]")];
    const observer = new ResizeObserver(() => {
      measure();
    });
    lists.forEach((list) => observer.observe(list));
    void document.fonts?.ready.then(() => {
      measure();
    });

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [cards, layoutKey]);

  return { gridRef, minHeight, pagesByCard };
}

function ResourceThumbnail({
  item,
  className,
}: {
  item: ResourceListItem;
  className?: string;
}) {
  if (!item.imageSrc) return null;

  return (
    <Image
      src={item.imageSrc}
      alt={item.imageAlt ?? ""}
      width={192}
      height={192}
      sizes="96px"
      className={cn("size-14 shrink-0 rounded-xl object-cover", className)}
    />
  );
}

function ResourceItemText({ item }: { item: ResourceListItem }) {
  if (!item.detail) {
    return <span className="min-w-0 flex-1">{item.label}</span>;
  }

  return (
    <span className="min-w-0 flex-1">
      <span className="block text-sm font-medium text-gray-800">{item.label}</span>
      <span className="mt-0.5 block text-sm leading-5 text-gray-600">{item.detail}</span>
    </span>
  );
}

function ResourceListItemView({
  item,
  thumbnailClassName,
}: {
  item: ResourceListItem;
  thumbnailClassName?: string;
}) {
  if (item.href) {
    return (
      <li>
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-3 rounded-md text-teal-600 transition-colors duration-200 hover:text-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
        >
          <ResourceThumbnail item={item} className={thumbnailClassName} />
          <ResourceItemText item={item} />
          <ExternalLink className="mt-1 shrink-0" size={14} aria-hidden="true" />
        </a>
      </li>
    );
  }

  return (
    <li className="flex items-start gap-3 text-gray-600">
      {item.imageSrc ? (
        <ResourceThumbnail item={item} className={thumbnailClassName} />
      ) : (
        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden="true" />
      )}
      <ResourceItemText item={item} />
    </li>
  );
}

function ResourceCard({
  title,
  icon: Icon,
  iconClassName,
  thumbnailClassName,
  items,
  pages,
  minHeight,
}: RecommendedResourceCardData & { pages: ResourceListItem[][]; minHeight?: number }) {
  const hasCarousel = pages.length > 1;
  const [activeIndex, setActiveIndex] = useState(0);
  const safeIndex = Math.min(activeIndex, Math.max(pages.length - 1, 0));

  const showPanel = (index: number) => {
    setActiveIndex(Math.min(Math.max(index, 0), pages.length - 1));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!hasCarousel) return;
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;

    event.preventDefault();
    showPanel(event.key === "ArrowRight" ? safeIndex + 1 : safeIndex - 1);
  };

  return (
    <article
      data-resource-card
      className="flex h-full flex-col rounded-3xl bg-white p-8"
      style={minHeight ? { minHeight } : undefined}
      onKeyDown={handleKeyDown}
    >
      <div data-resource-card-body>
        <div data-resource-card-header className="mb-3">
          <div
            className={cn(
              "mb-4 flex size-12 items-center justify-center rounded-xl",
              iconClassName,
            )}
          >
            <Icon className="text-white" size={24} aria-hidden="true" />
          </div>
          <h3 className="text-xl font-medium text-gray-800">{title}</h3>
        </div>

        {pages.length > 0 ? (
          <div className="relative">
          <div
            className="grid overflow-hidden"
            {...(hasCarousel
              ? {
                  role: "region",
                  "aria-roledescription": "carousel",
                  "aria-label": title,
                }
              : {})}
          >
            {pages.map((page, pageIndex) => {
              const isActive = pageIndex === safeIndex;

              return (
                <ul
                  key={`${title}-panel-${pageIndex}`}
                  ref={(node) => {
                    if (!node) return;
                    // Set after mount so the boolean inert attribute does not mismatch during hydration.
                    if (hasCarousel && !isActive) node.setAttribute("inert", "");
                    else node.removeAttribute("inert");
                  }}
                  className={cn(
                    "col-start-1 row-start-1 w-full space-y-3 transition-transform duration-200 ease-out motion-reduce:transition-none",
                    !isActive && "pointer-events-none",
                  )}
                  style={{ transform: `translateX(${(pageIndex - safeIndex) * 100}%)` }}
                  aria-hidden={hasCarousel && !isActive ? true : undefined}
                >
                  {page.map((item) => (
                    <ResourceListItemView
                      key={item.href ?? item.label}
                      item={item}
                      thumbnailClassName={thumbnailClassName}
                    />
                  ))}
                </ul>
              );
            })}
          </div>
          <ul
            data-measure-list
            className="invisible absolute inset-x-0 top-0 -z-10 w-full space-y-3"
            aria-hidden="true"
          >
            {items.map((item) => (
              <ResourceListItemView
                key={`measure-${item.href ?? item.label}`}
                item={item}
                thumbnailClassName={thumbnailClassName}
              />
            ))}
          </ul>
          </div>
        ) : null}
      </div>

      {hasCarousel ? (
        <div
          data-resource-card-controls
          className="mt-auto flex min-w-0 items-center justify-between gap-3 pt-6"
        >
          <button
            type="button"
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-teal-100 bg-teal-50 text-teal-700 transition-colors duration-200 hover:bg-teal-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40"
            onClick={() => showPanel(safeIndex - 1)}
            disabled={safeIndex === 0}
            aria-label={`Show previous ${title} panel`}
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>

          {pages.length > 6 ? (
            <p className="min-w-0 flex-1 text-center text-sm font-medium tabular-nums text-gray-600">
              {safeIndex + 1} of {pages.length}
            </p>
          ) : (
            <div
              className="flex min-w-0 flex-1 items-center justify-center"
              role="tablist"
              aria-label={`${title} panels`}
            >
              {pages.map((_, pageIndex) => {
                const isActive = pageIndex === safeIndex;

                return (
                  <button
                    key={`${title}-dot-${pageIndex}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Panel ${pageIndex + 1} of ${pages.length}`}
                    className="inline-flex h-11 w-6 shrink-0 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
                    onClick={() => showPanel(pageIndex)}
                  >
                    <span
                      className={cn(
                        "block h-2 rounded-full transition-all duration-200",
                        isActive ? "w-6 bg-teal-600" : "w-2 bg-teal-400",
                      )}
                    />
                  </button>
                );
              })}
            </div>
          )}

          <button
            type="button"
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-teal-100 bg-teal-50 text-teal-700 transition-colors duration-200 hover:bg-teal-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40"
            onClick={() => showPanel(safeIndex + 1)}
            disabled={safeIndex === pages.length - 1}
            aria-label={`Show next ${title} panel`}
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>
      ) : null}

      {hasCarousel ? (
        <p className="sr-only" aria-live="polite">
          {`Panel ${safeIndex + 1} of ${pages.length}`}
        </p>
      ) : null}
    </article>
  );
}

export function RecommendedResources({ cards }: RecommendedResourcesProps) {
  const layoutKey = cards
    .map((card) => `${card.title}:${card.items.map((item) => `${item.label}:${item.detail ?? ""}:${item.imageSrc ?? ""}`).join(",")}`)
    .join("|");
  const { gridRef, minHeight, pagesByCard } = useResourceCardLayout(layoutKey, cards);

  return (
    <div ref={gridRef} className="relative grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
      <div
        data-carousel-controls-measure
        className="pointer-events-none invisible absolute top-0 left-0 pt-6"
        aria-hidden="true"
      >
        <div className="h-11" />
      </div>
      {cards.map((card, index) => (
        <ResourceCard
          key={card.title}
          {...card}
          pages={pagesByCard[index] ?? [card.items]}
          minHeight={minHeight}
        />
      ))}
    </div>
  );
}
