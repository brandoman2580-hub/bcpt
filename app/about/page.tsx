import { Heart, Users, Target, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-orange-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-8 py-16 max-w-5xl">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl text-gray-800">About The Therapist</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to helping children find their voice through compassionate, evidence-based therapy
          </p>
        </div>
      </section>

      {/* My Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg">
            <h2 className="text-3xl text-gray-800 mb-6">My Story</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Blossoming Connections Pediatric Therapy was founded with a simple belief: every child deserves to be heard, understood, and celebrated for who they are.
              </p>
              <p>
                With over 12 years of experience working in hospital and school settings, I recognized the need for a more personalized, family-centered approach to speech therapy. I created Blossoming Connections to provide exactly that—a warm, supportive environment where children can grow at their own pace, guided by their natural curiosity and play.
              </p>
              <p>
                Today, I&apos;m proud to serve families throughout the community, helping children ages 0-6 develop the communication skills they need to connect with the world around them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
          <h2 className="text-3xl text-gray-800 text-center mb-12">My Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full flex items-center justify-center mb-4">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Compassion First</h3>
              <p className="text-gray-600">
                I approach every child and family with empathy, patience, and genuine care. Your child&apos;s comfort and confidence are my top priorities.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-300 to-teal-300 rounded-full flex items-center justify-center mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Family Partnership</h3>
              <p className="text-gray-600">
                I believe parents are the experts on their children. I work alongside families, providing support and strategies that fit naturally into your daily routines.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-green-300 to-lime-300 rounded-full flex items-center justify-center mb-4">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Child-Led Learning</h3>
              <p className="text-gray-600">
                I follow your child&apos;s interests and natural curiosity, making therapy fun and engaging while building essential communication skills.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-300 to-red-300 rounded-full flex items-center justify-center mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Evidence-Based Excellence</h3>
              <p className="text-gray-600">
                My methods are grounded in the latest research and best practices in pediatric speech-language pathology and early intervention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg">
            <h2 className="text-3xl text-gray-800 mb-8 text-center">Qualifications & Experience</h2>
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-800 font-medium">ASHA-Certified Speech-Language Pathologist (CCC-SLP)</p>
                  <p className="text-gray-600 text-sm">American Speech-Language-Hearing Association</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-800 font-medium">State Licensed Speech-Language Pathologist</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-800 font-medium">12+ Years of Experience</p>
                  <p className="text-gray-600 text-sm">Hospital and school-based settings with pediatric populations</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-800 font-medium">Specialized Training in Early Intervention</p>
                  <p className="text-gray-600 text-sm">Focus on children ages 0-5</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-800 font-medium">Expertise in Autism Spectrum Disorder</p>
                  <p className="text-gray-600 text-sm">Supporting social communication and play skills</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-800 font-medium">Augmentative & Alternative Communication (AAC) Specialist</p>
                  <p className="text-gray-600 text-sm">Augmentative and alternative communication technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
