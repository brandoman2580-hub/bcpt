'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/components/ui/accordion';
import { RecommendedResources } from '@/app/components/recommended-resources';
import { Book, Lightbulb, Download, ExternalLink } from 'lucide-react';

export default function ResourcesPage() {
  return (
    <div className="bg-orange-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-8 py-16 max-w-5xl">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl text-gray-800">Resources for Families</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Helpful tips, guides, and information to support your child&apos;s communication development at home
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
          <h2 className="text-3xl text-gray-800 mb-8">Tips & Strategies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-8 ">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-300 to-red-300 rounded-xl flex items-center justify-center mb-4">
                <Lightbulb className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Encouraging Early Language</h3>
              <Accordion type="single" collapsible className="space-y-3 text-gray-600">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Talk about what you&apos;re doing during daily routines
                  </AccordionTrigger>
                  <AccordionContent>
                    Talk about your activities as you do them—this helps your child hear and learn new words in real situations.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Follow your child&apos;s lead and talk about what they&apos;re interested in
                  </AccordionTrigger>
                  <AccordionContent>
                    Notice what your child pays attention to and use those opportunities to talk and expand on their interests.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Use simple, clear language that matches your child&apos;s level
                  </AccordionTrigger>
                  <AccordionContent>
                    Use short and easy-to-understand phrases to help your child process and learn language more easily.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Give your child time to respond before moving on
                  </AccordionTrigger>
                  <AccordionContent>
                    Pause and wait after you speak, giving your child plenty of time to respond in their own way.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="bg-white rounded-3xl p-8 ">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-300 to-pink-300 rounded-xl flex items-center justify-center mb-4">
                <Lightbulb className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Building Play Skills</h3>
              <Accordion type="single" collapsible className="space-y-3 text-gray-600">
                <AccordionItem value="play-1">
                  <AccordionTrigger>
                    Get down on your child&apos;s level during play
                  </AccordionTrigger>
                  <AccordionContent>
                    Sitting face-to-face helps your child see your expressions, stay engaged, and feel connected during play.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="play-2">
                  <AccordionTrigger>
                    Narrate what your child is doing with toys
                  </AccordionTrigger>
                  <AccordionContent>
                    Describe their actions in the moment—this builds vocabulary and shows them that their play has meaning.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="play-3">
                  <AccordionTrigger>
                    Model different ways to play with toys
                  </AccordionTrigger>
                  <AccordionContent>
                    Demonstrate new actions or ideas with toys, then pause so your child can try them in their own way.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="play-4">
                  <AccordionTrigger>
                    Take turns and wait for your child to initiate
                  </AccordionTrigger>
                  <AccordionContent>
                    Leave space for your child to start the next action—waiting builds turn-taking and confidence.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="bg-white rounded-3xl p-8 ">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-300 to-blue-300 rounded-xl flex items-center justify-center mb-4">
                <Lightbulb className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Supporting Social Communication</h3>
              <Accordion type="single" collapsible className="space-y-3 text-gray-600">
                <AccordionItem value="social-1">
                  <AccordionTrigger>
                    Create opportunities for turn-taking games
                  </AccordionTrigger>
                  <AccordionContent>
                    Simple back-and-forth games teach waiting, sharing attention, and the rhythm of conversation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="social-2">
                  <AccordionTrigger>
                    Practice greetings and goodbyes with family
                  </AccordionTrigger>
                  <AccordionContent>
                    Everyday hellos and goodbyes give your child predictable chances to practice social language.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="social-3">
                  <AccordionTrigger>
                    Use facial expressions and gestures to support understanding
                  </AccordionTrigger>
                  <AccordionContent>
                    Pairing words with expressions and gestures helps your child connect meaning to communication.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="social-4">
                  <AccordionTrigger>
                    Celebrate all communication attempts, not just words
                  </AccordionTrigger>
                  <AccordionContent>
                    Respond warmly to sounds, gestures, and looks—every attempt builds confidence to communicate more.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="bg-white rounded-3xl p-8 ">
              <div className="w-12 h-12 bg-gradient-to-br from-green-300 to-lime-300 rounded-xl flex items-center justify-center mb-4">
                <Lightbulb className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Reading Together</h3>
              <Accordion type="single" collapsible className="space-y-3 text-gray-600">
                <AccordionItem value="reading-1">
                  <AccordionTrigger>
                    Choose books that match your child&apos;s interests
                  </AccordionTrigger>
                  <AccordionContent>
                    Interest-driven books keep attention longer and make shared reading more enjoyable and meaningful.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="reading-2">
                  <AccordionTrigger>
                    Point to pictures and name things together
                  </AccordionTrigger>
                  <AccordionContent>
                    Labeling pictures builds word-object connections and invites your child to join in naming.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="reading-3">
                  <AccordionTrigger>
                    Ask simple questions about the story
                  </AccordionTrigger>
                  <AccordionContent>
                    Easy questions encourage thinking, predicting, and talking about what happens next.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="reading-4">
                  <AccordionTrigger>
                    Read the same books multiple times for repetition
                  </AccordionTrigger>
                  <AccordionContent>
                    Familiar books help your child anticipate language, join in, and deepen understanding over time.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
          <div className="bg-white rounded-3xl p-8 sm:p-12 ">
            <h2 className="text-3xl text-gray-800 mb-8 text-center">ASHA&apos;s Communication Milestones</h2>
            <p className="text-center text-gray-600 mb-8">
              Here are the ASHA guidelines for what to expect at different ages. Remember, every child develops at their own pace!
            </p>
            <div className="space-y-6 flex flex-col items-center justify-center">
              <a href="https://www.asha.org/public/developmental-milestones/communication-milestones/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 flex items-center gap-2">
                ASHA&apos;s Communication Milestones
                <ExternalLink size={14} />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Recommended Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
          <h2 className="text-3xl text-gray-800 mb-8">Recommended Resources</h2>
          <RecommendedResources
            cards={[
              {
                title: "Books for Parents",
                icon: Book,
                iconClassName: "bg-gradient-to-br from-teal-400 to-blue-400",
                thumbnailClassName:
                  "size-24 rounded-lg bg-orange-50 object-contain ring-1 ring-black/10",
                items: [
                  {
                    label: "Elaine Weitzman",
                    detail: "It Takes Two to Talk Guidebook, Fifth Edition",
                    imageSrc: "/book_cover_art/parent_books/ItTakesTwoToTalk_5thEd.jpg",
                  },
                  {
                    label: "James D. MacDonald",
                    detail: "Communicating Partners",
                    imageSrc: "/book_cover_art/parent_books/Communicating_Partners.jpg",
                  },
                ],
              },
              {
                title: "Helpful Websites",
                icon: ExternalLink,
                iconClassName: "bg-gradient-to-br from-purple-400 to-pink-400",
                items: [
                  {
                    label: "Parent education (SEL)",
                    href: "https://csefel.vanderbilt.edu/resources/family.html",
                  },
                  {
                    label: "Music ideas (bilingual)",
                    href: "https://bilinguistics.com/music-for-speech-therapy/",
                  },
                  {
                    label: "Craft ideas",
                    href: "https://www.dltk-kids.com/",
                  },
                  {
                    label: "Milestones and Communication tips (ASHA)",
                    href: "https://www.asha.org/public/developmental-milestones/communication-milestones/",
                  },
                ],
              },
              {
                title: "Activity Ideas",
                icon: Download,
                iconClassName: "bg-gradient-to-br from-green-400 to-lime-400",
                items: [
                  { label: "Everyday routines as language opportunities" },
                  { label: "Simple songs and rhymes for language learning" },
                  { label: "Play-based activities to build communication" },
                ],
              },
              {
                title: "Children's Book Recommendations",
                icon: Book,
                iconClassName: "bg-gradient-to-br from-orange-400 to-red-400",
                thumbnailClassName:
                  "size-24 rounded-lg bg-orange-50 object-contain ring-1 ring-black/10",
                items: [
                  {
                    label: "Eric Carle",
                    detail:
                      "The Very Hungry Caterpillar, The Very Busy Spider, Brown Bear, Brown Bear, What Do You See?, Polar Bear, Polar Bear, What Do You Hear?, and The Grouchy Ladybug",
                    imageSrc: "/book_cover_art/childrens_books/TheVeryHungryCaterpillar.jpg",
                  },
                  {
                    label: "Alice Schertle",
                    detail: "The Little Blue Truck series",
                    imageSrc: "/book_cover_art/childrens_books/TheLittleBlueTruck.jpg",
                  },
                  {
                    label: "Jan Brett",
                    detail: "The Hat, The Mitten, The Gingerbread Baby",
                    imageSrc: "/book_cover_art/childrens_books/TheHat.jpg",
                  },
                  {
                    label: "Karma Wilson and Jane Chapman",
                    detail: "The Bear Book series (Bear Snores On, Bear Feels Scared, and others)",
                    imageSrc: "/book_cover_art/childrens_books/BearSnoresOn.jpg",
                  },
                  {
                    label: "Spike Lee and Tonya Lewis Lee",
                    detail: "Please, Baby, Please",
                    imageSrc: "/book_cover_art/childrens_books/PleaseBabyPlease.jpg",
                  },
                  {
                    label: "Marcus Pfister",
                    detail: "The Rainbow Fish",
                    imageSrc: "/book_cover_art/childrens_books/TheRainbowFish.jpg",
                  },
                  {
                    label: "Julia Donaldson",
                    detail: "Room on the Broom",
                    imageSrc: "/book_cover_art/childrens_books/RoomOnTheBroom.jpg",
                  },
                  {
                    label: "Sue Williams",
                    detail: "I Went Walking",
                    imageSrc: "/book_cover_art/childrens_books/IWentWalking.jpg",
                  },
                  {
                    label: "Margaret Wise Brown",
                    detail: "Big Red Barn",
                    imageSrc: "/book_cover_art/childrens_books/BigRedBarn.jpg",
                  },
                  {
                    label: "Dr. Seuss",
                    detail: "Hop on Pop, Put Me in the Zoo",
                    imageSrc: "/book_cover_art/childrens_books/HopOnPop.png",
                  },
                  {
                    label: "Sandra Boynton",
                    detail: "The Going to Bed Book",
                    imageSrc: "/book_cover_art/childrens_books/TheGoingToBedBook.jpg",
                  },
                  {
                    label: "Melanie Gerth",
                    detail: "Ten Little Ladybugs",
                    imageSrc: "/book_cover_art/childrens_books/TenLittleLadybugs.jpg",
                  },
                ],
              },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
