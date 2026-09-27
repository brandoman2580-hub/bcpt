'use client';

import { MessageCircle, Users as UsersIcon, Mic, Handshake, Recycle, GraduationCap } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="bg-orange-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-8 py-16 max-w-5xl">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl text-gray-800">My Services</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive speech and language therapy tailored to your child&apos;s unique needs
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 sm:p-12 text-center space-y-6">
            <h2 className="text-3xl text-gray-800">My Philosophy</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
                {/* Foundational Connection */}
                <div className="flex flex-col items-center bg-white/70 rounded-2xl p-6">
                  <Handshake className="mb-3 text-purple-500" size={38} />
                  <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">Foundational Connection</h3>
                  <ul className="space-y-4 text-sm">
                    <li className="flex flex-col items-center gap-1">
                      <span className="font-medium">Developmental Approach</span>
                      <span className="text-gray-600">Interventions align with each client&apos;s unique profile.</span>
                    </li>
                    <li className="flex flex-col items-center gap-1">
                      <span className="font-medium">Relationship First</span>
                      <span className="text-gray-600">Trust and emotional safety drive meaningful engagement.</span>
                    </li>
                    <li className="flex flex-col items-center gap-1">
                      <span className="font-medium">{'Family-Centered'}</span>
                      <span className="text-gray-600">
                        Goals integrate client and caregiver perspectives directly.
                      </span>
                    </li>
                  </ul>
                </div>
                {/* Sustainable Progress */}
                <div className="flex flex-col items-center bg-white/70 rounded-2xl p-6">
                  <Recycle className="mb-3 text-orange-500" size={38} />
                  <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">Sustainable Progress</h3>
                  <ul className="space-y-4 text-sm">
                    <li className="flex flex-col items-center gap-1">
                      <span className="font-medium">Thoughtful Scaffolding</span>
                      <span className="text-gray-600">Skill development uses strategic, supportive pacing.</span>
                    </li>
                    <li className="flex flex-col items-center gap-1">
                      <span className="font-medium">Long-Term Growth</span>
                      <span className="text-gray-600">Strong core capacities enable lasting communication success.</span>
                    </li>
                    <li className="flex flex-col items-center gap-1">
                      <span className="font-medium">Natural Carryover</span>
                      <span className="text-gray-600">Techniques transition smoothly into home and school.</span>
                    </li>
                  </ul>
                </div>
                {/* Accessible Communication */}
                <div className="flex flex-col items-center bg-white/70 rounded-2xl p-6">
                  <MessageCircle className="mb-3 text-pink-500" size={38} />
                  <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">Accessible Communication</h3>
                  <ul className="space-y-4 text-sm">
                    <li className="flex flex-col items-center gap-1">
                      <span className="font-medium">Tailored Tools</span>
                      <span className="text-gray-600">Speech options adapt to specific family needs.</span>
                    </li>
                    <li className="flex flex-col items-center gap-1">
                      <span className="font-medium">Active Trialing</span>
                      <span className="text-gray-600">Therapy introduces diverse communication methods dynamically.</span>
                    </li>
                    <li className="flex flex-col items-center gap-1">
                      <span className="font-medium">Shared Commitment</span>
                      <span className="text-gray-600">Caregiver partnership overcomes barriers to everyday growth.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Early Language Development */}
            <div className="bg-white rounded-3xl p-8 ">
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
                  <p className="text-gray-700">Developing purposeful communication</p>
                </div>
              </div>
            </div>

            {/* Autism & Social Communication */}
            <div className="bg-white rounded-3xl p-8 ">
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

            {/* Augmentative & Alternative Communication (AAC) */}
            <div className="bg-white rounded-3xl p-8 ">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-300 to-blue-300 rounded-2xl flex items-center justify-center mb-6">
                <Mic className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-medium text-gray-800 mb-4">Augmentative & Alternative Communication (AAC)</h3>
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
                  <p className="text-gray-700">High-tech Augmentative & Alternative Communication devices</p>
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
            <div className="bg-white rounded-3xl p-8 ">
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
          <div className="bg-white rounded-3xl p-8 sm:p-12 ">
            <h2 className="text-3xl text-gray-800 mb-8 text-center">What to Expect</h2>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-semibold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Comprehensive Evaluation</h3>
                  <p className="text-gray-600">
                    Detailed evaluation of child&apos;s present skills, previous history, family perspective, and initial recommendations.
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
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Naturalistic Intervention</h3>
                  <p className="text-gray-600">
                    A home program that includes functional communication at home with multiple caregivers and communication partners.
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
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Evidence-Based Family Coaching</h3>
                  <p className="text-gray-600">
                    Training of techniques and education supported by research and provide families a purpose that leads to the intended outcome.
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
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Child-Led, Goal-Directed Therapy</h3>
                  <p className="text-gray-600">
                    Therapy sessions with activities that are goal-centered and influenced by the child’s interests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
