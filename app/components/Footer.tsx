import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import bcptIcon from '@/public/bcpt-icon.svg';
import linkedinIcon from '@/public/icons/linkedin.svg';
import facebookIcon from '@/public/icons/facebook.svg';
import instagramIcon from '@/public/icons/instagram.svg';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-teal-500 to-blue-500 text-white">
      <div className="container mx-auto px-4 sm:px-8 max-w-6xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="col-span-1">
            <div className="flex flex-row items-center gap-4 pb-4">
              <Image
                src={bcptIcon}
                alt="Blossoming Connections"
                width={80}
                height={80}
                className="h-20 w-auto bg-white p-2 rounded-lg"
              />
              <p className="text-md opacity-90">
                Creating language development through early intervention
              </p>
            </div>
            <p className="text-sm opacity-90">
              Non discrimination statement:  I do not discriminate on the basis of race, color, religion, gender, gender expression, age, national origin, disability, marital status, sexual orientation, or military status.  All peoples will be treated with the same respect and manners.
            </p>
          </div>

          <div className="col-span-2 flex flex-col md:flex-row justify-end items-start gap-8">
            {/* Quick Links */}
            <div className="w-full md:w-auto md:text-right">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="hover:text-orange-200 transition-colors">Home</Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-orange-200 transition-colors">About Me</Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-orange-200 transition-colors">Services</Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:text-orange-200 transition-colors">Resources</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-orange-200 transition-colors">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="w-full md:w-auto md:text-right">
              <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 md:justify-end">
                  <Phone size={16} />
                  <span>(509) 499-6047</span>
                </li>
                <li className="flex items-center gap-2 md:justify-end">
                  <Mail size={16} />
                  <span>bcptspeechservices@outlook.com</span>
                </li>
                <li className="flex items-start gap-2 md:justify-end">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <span>
                    1400 S 45th Ave<br />West Richland, WA 99353
                  </span>
                </li>
              </ul>

              {/* Social Media */}
              <div className="flex gap-4 mt-4 md:justify-end">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-200 transition-colors" aria-label="Facebook">
                  <Image src={facebookIcon} alt="Facebook" width={20} height={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-200 transition-colors" aria-label="Instagram">
                  <Image src={instagramIcon} alt="Instagram" width={20} height={20} />
                </a>
                <a href="https://www.linkedin.com/in/michelle-armenta-57901b439/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-200 transition-colors" aria-label="LinkedIn">
                  <Image src={linkedinIcon} alt="LinkedIn" width={20} height={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 text-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} Blossoming Connections Pediatric Therapy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
