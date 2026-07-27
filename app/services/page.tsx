'use client';

import Link from 'next/link';
import { MessageCircle, Users as UsersIcon, Mic, GraduationCap } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="bg-orange-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-8 py-16 max-w-5xl">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl text-gray-800">Our Services</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive speech and language therapy tailored to your child's unique needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Early Language Development */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-300 to-red-300 rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-medium text-gray-800 mb-4">Early Language Development</h3>
              <p className="text-gray-600 mb-6">
                Supporting children in building foundational communication skills during the critical early years.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Receptive language (understanding)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Expressive language (speaking)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Vocabulary development</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Early literacy skills</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Sound development & articulation</p>
                </div>
              </div>
            </div>

            {/* Autism & Social Communication */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-300 to-pink-300 rounded-2xl flex items-center justify-center mb-6">
                <UsersIcon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-medium text-gray-800 mb-4">Autism & Social Communication</h3>
              <p className="text-gray-600 mb-6">
                Specialized support for children with autism spectrum disorder or social communication challenges.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Social interaction skills</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Joint attention & engagement</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Play skills development</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Nonverbal communication</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Peer interaction support</p>
                </div>
              </div>
            </div>

            {/* AAC & Alternative Communication */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-300 to-blue-300 rounded-2xl flex items-center justify-center mb-6">
                <Mic className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-medium text-gray-800 mb-4">AAC & Alternative Communication</h3>
              <p className="text-gray-600 mb-6">
                Exploring all forms of communication to help your child connect and express themselves.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Sign language & gestures</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Picture communication systems</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">High-tech AAC devices</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Communication apps & tablets</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Total communication approach</p>
                </div>
              </div>
            </div>

            {/* Family Coaching */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-green-300 to-lime-300 rounded-2xl flex items-center justify-center mb-6">
                <GraduationCap className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-medium text-gray-800 mb-4">Family Coaching</h3>
              <p className="text-gray-600 mb-6">
                Empowering parents and caregivers with strategies to support communication at home and in everyday activities.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Parent education & training</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Home activity ideas</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Routine-based strategies</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Problem-solving support</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Progress monitoring guidance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg">
            <h2 className="text-3xl text-gray-800 mb-8 text-center">What to Expect</h2>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-semibold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Initial Consultation</h3>
                  <p className="text-gray-600">
                    We'll discuss your concerns, answer your questions, and learn about your child's unique needs and strengths.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-semibold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Comprehensive Evaluation</h3>
                  <p className="text-gray-600">
                    Through play-based assessment, we'll gain a complete picture of your child's communication abilities and create individualized goals.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-semibold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Therapy Sessions</h3>
                  <p className="text-gray-600">
                    Regular one-on-one sessions where we'll work on goals through fun, engaging activities that your child will love.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-semibold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Family Partnership</h3>
                  <p className="text-gray-600">
                    We'll provide strategies and support for you to use at home, ensuring progress continues beyond our sessions.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-semibold">
                    5
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Progress Monitoring</h3>
                  <p className="text-gray-600">
                    Regular check-ins and updates to track progress, adjust goals, and celebrate your child's achievements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
          <h2 className="text-3xl text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <Accordion.Root type="single" collapsible className="space-y-4">
              <Accordion.Item value="item-1" className="border-b border-gray-200">
                <Accordion.Header>
                  <Accordion.Trigger className="flex justify-between items-center w-full py-4 text-left text-gray-800 font-medium hover:text-teal-600 transition-colors group">
                    <span>How long are therapy sessions?</span>
                    <ChevronDown className="transition-transform group-data-[state=open]:rotate-180" size={20} />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="pb-4 text-gray-600">
                  Sessions typically last 45-60 minutes, depending on your child's age and attention span. We'll work together to find the right session length for your child.
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value="item-2" className="border-b border-gray-200">
                <Accordion.Header>
                  <Accordion.Trigger className="flex justify-between items-center w-full py-4 text-left text-gray-800 font-medium hover:text-teal-600 transition-colors group">
                    <span>Do you accept insurance?</span>
                    <ChevronDown className="transition-transform group-data-[state=open]:rotate-180" size={20} />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="pb-4 text-gray-600">
                  We are currently private pay, but we can provide you with a superbill to submit to your insurance for possible reimbursement. Please contact us to discuss payment options.
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value="item-3" className="border-b border-gray-200">
                <Accordion.Header>
                  <Accordion.Trigger className="flex justify-between items-center w-full py-4 text-left text-gray-800 font-medium hover:text-teal-600 transition-colors group">
                    <span>How often will we have therapy sessions?</span>
                    <ChevronDown className="transition-transform group-data-[state=open]:rotate-180" size={20} />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="pb-4 text-gray-600">
                  The frequency of sessions depends on your child's individual needs and goals. Most families start with 1-2 sessions per week. We'll discuss what's best for your situation during our initial consultation.
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value="item-4">
                <Accordion.Header>
                  <Accordion.Trigger className="flex justify-between items-center w-full py-4 text-left text-gray-800 font-medium hover:text-teal-600 transition-colors group">
                    <span>Can parents stay during therapy sessions?</span>
                    <ChevronDown className="transition-transform group-data-[state=open]:rotate-180" size={20} />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="pb-4 text-gray-600">
                  Absolutely! We encourage parent participation. Family involvement is a key part of our approach, and we'll work together to help your child generalize skills across different settings.
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-8 max-w-4xl text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl text-gray-800">Have questions about our services?</h2>
          <p className="text-gray-600 text-lg">We'd be happy to discuss which services would be best for your child</p>
          <Link 
            href="/contact"
            className="inline-block bg-teal-500 text-white px-10 py-4 rounded-full text-lg hover:bg-teal-600 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
