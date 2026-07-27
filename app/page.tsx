import Link from 'next/link';
import { ArrowRight, Baby, FileText, GraduationCap, MessageCircle, Mic, UserRound, UsersIcon } from 'lucide-react';
import heroImage from '@/public/bcpt_hero_example.svg';

export default function HomePage() {
  return (
    <div className="bg-orange-50">
      {/* Hero Section */}
      <section className="flex justify-center items-center py-16 max-w-5xl bg-white max-w-none" style={{ backgroundImage: `url(${heroImage.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
        <div className="text-center space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-200 max-w-3xl mx-auto leading-snug">
            Every sound, word, and smile is a step forward—and we&apos;re here to celebrate each one with you
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Link 
              href="/contact"
              className="bg-teal-500 text-white px-10 py-4 rounded-full text-lg hover:bg-teal-600 transition-colors inline-flex items-center gap-2"
            >
              Get Started
              <ArrowRight size={20} />
            </Link>
            <Link 
              href="/services"
              className="bg-white text-teal-600 border-2 border-teal-500 px-10 py-4 rounded-full text-lg hover:bg-teal-50 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
          <h2 className="text-3xl text-gray-800 text-center mb-12">Who We Help</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 text-center space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full mx-auto flex items-center justify-center">
                <Baby className="text-white" width={48} height={48} />
              </div>
              <h3 className="text-lg font-medium text-gray-800">Children ages 0–5</h3>
              <p className="text-gray-600 text-sm">Supporting your child&apos;s early communication journey</p>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-300 to-teal-300 rounded-full mx-auto flex items-center justify-center">
                <UserRound className="text-white" width={48} height={48} />
              </div>
              <h3 className="text-lg font-medium text-gray-800">Parents & Caregivers</h3>
              <p className="text-gray-600 text-sm">Empowering families with tools and guidance</p>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center space-y-4 hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1 sm:mx-auto lg:mx-0">
              <div className="w-20 h-20 bg-gradient-to-br from-green-300 to-lime-300 rounded-full mx-auto flex items-center justify-center">
                <FileText className="text-white" width={48} height={48} />
              </div>
              <h3 className="text-lg font-medium text-gray-800">Pediatric Referrals</h3>
              <p className="text-gray-600 text-sm">Collaborating with healthcare providers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
          <h2 className="text-3xl text-gray-800 text-center mb-4">Our Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Specialized support for your child&apos;s unique communication needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 flex items-center gap-4 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-orange-300 rounded-xl flex-shrink-0 flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-gray-800 font-medium">Early Language Development</h3>
                <p className="text-sm text-gray-600">Building foundational communication skills</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 flex items-center gap-4 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-purple-300 rounded-xl flex-shrink-0 flex items-center justify-center">
                <UsersIcon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-gray-800 font-medium">Autism & Social Communication</h3>
                <p className="text-sm text-gray-600">Supporting social interaction and connection</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 flex items-center gap-4 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-teal-300 rounded-xl flex-shrink-0 flex items-center justify-center">
                <Mic className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-gray-800 font-medium">AAC & Alternative Communication</h3>
                <p className="text-sm text-gray-600">Exploring all ways to communicate</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 flex items-center gap-4 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-green-300 rounded-xl flex-shrink-0 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-gray-800 font-medium">Family Coaching</h3>
                <p className="text-sm text-gray-600">Empowering families with practical strategies</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link 
              href="/services"
              className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium"
            >
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Therapy Approach */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
          <div className="bg-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-lg">
            <h2 className="text-3xl text-gray-800">Our Approach</h2>
            <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
              <span className="bg-orange-100 text-orange-700 px-6 py-3 rounded-full text-sm sm:text-base">Child-Led</span>
              <span className="bg-purple-100 text-purple-700 px-6 py-3 rounded-full text-sm sm:text-base">Play-Based</span>
              <span className="bg-teal-100 text-teal-700 px-6 py-3 rounded-full text-sm sm:text-base">Family-Centered</span>
            </div>
            <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
              We follow your child&apos;s lead through play, building safety, connection, and communication skills that fit naturally into your family&apos;s everyday routines.
            </p>
            <Link 
              href="/about"
              className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium"
            >
              Learn About Our Philosophy
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
          <div className="bg-gradient-to-r from-teal-400 to-blue-400 rounded-3xl p-8 sm:p-10 text-center text-white space-y-3 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold">Experienced & Qualified</h3>
            <p className="text-base sm:text-lg">ASHA-Certified Speech-Language Pathologist</p>
            <p className="text-base sm:text-lg">12 Years Experience in Hospital + School Settings</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-8 max-w-4xl text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl text-gray-800">Let&apos;s start this journey together</h2>
          <p className="text-gray-600 text-lg">We&apos;re here when you&apos;re ready</p>
          <Link 
            href="/contact"
            className="inline-block bg-teal-500 text-white px-10 py-4 rounded-full text-lg hover:bg-teal-600 transition-colors"
          >
            Request an Evaluation
          </Link>
        </div>
      </section>
    </div>
  );
}
