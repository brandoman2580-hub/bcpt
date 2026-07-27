import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';
import bcptIcon from '@/public/bcpt-icon.svg';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-teal-500 to-blue-500 text-white">
      <div className="container mx-auto px-4 sm:px-8 max-w-6xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="col-span-1">
            <Image 
              src={bcptIcon} 
              alt="Blossoming Connections" 
              width={80}
              height={80}
              className="h-20 w-auto mb-4 bg-white p-2 rounded-lg" 
            />
            <p className="text-sm opacity-90">
              Creating language development through early intervention
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-orange-200 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-orange-200 transition-colors">About Us</Link>
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

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Early Language Development</li>
              <li>Autism & Social Communication</li>
              <li>AAC & Alternative Communication</li>
              <li>Family Coaching</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>hello@blossomingconnections.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>123 Therapy Lane<br />Suite 100<br />Cityville, ST 12345</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-200 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-200 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
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
