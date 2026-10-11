import { Heart, Users, Target, Award } from 'lucide-react';
import Image from 'next/image';
import ashaIcon from '@/public/asha-ccc-slp-color.jpg';
import michellePhoto from '@/public/Michelle_BCPT_Website_Photo_20261005.png';

export default function AboutPage() {
  const yearStart = 2014;
  const yearsOfExp = new Date().getFullYear() - yearStart;
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
        <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
          <div className="bg-white rounded-3xl p-8 sm:p-12">
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-10">
              <Image
                src={michellePhoto}
                alt="Michelle Armenta, pediatric speech-language pathologist"
                sizes="224px"
                className="h-auto w-56 shrink-0 rounded-2xl"
              />
              <div className="min-w-0 w-full">
                <h2 className="text-3xl text-gray-800 mb-6">My Story</h2>
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>Michelle Armenta has been delivering speech therapy services in the Tri-Cities area for over <span>{yearsOfExp}</span> years. She earned her bachelor’s degree in Communication Disorders at Eastern Washington University and went on to finish her Master’s Degree in Speech and Hearing Sciences at WSU Spokane in 2013.  Her interest in the field developed when her daughter (a super preemie) spent more than 100 days in the Neonatal Intensive Care Unit (NICU) followed by intense outpatient therapy for feeding, speech, physical, and occupational therapy. Witnessing language development in the children who attended the birth to three program, and being involved with her own child’s communication development led to her new career path.</p>
              <p>Michelle has encountered positive and negative experiences with staff that had treated her daughter in the past. There were positive experiences with staff who encouraged parent participation in therapy.  The environment of most of the therapy spaces were a safe place for parents to meet and work together. There were great transitional supports for children from birth to three programs to Kindergarten. This helped her daughter’s development and improved family and caregiver engagement.  But there were unfortunately challenging experiences with professionals who were inconsiderate and destroyed the confidence of the family and caregivers. </p>
              <p>From those experiences, Michelle’s mission is to understand the family’s needs, recommend resources, provide a home therapy program, introduce meaningful moments in the community, and find an evolving communication system that is suitable for the family.and the child.</p>
              <p>Each child has an autonomous communication style. </p>
              <p>She practices using a variety of therapy strategies and core theories of communication development like Greenspan Floortime, Pivotal Response Training, Piaget Core Development concepts, Vygotsky’s Sociocultural of Cognitive Development, and Hanen Fundamentals.  </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
          <h2 className="text-3xl text-gray-800 text-center mb-12">My Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 ">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full flex items-center justify-center mb-4">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Compassion First</h3>
              <p className="text-gray-600">
                I approach every child and family with empathy, patience, and genuine care. Your child&apos;s comfort and confidence are my top priorities.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 ">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-300 to-teal-300 rounded-full flex items-center justify-center mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Family Partnership</h3>
              <p className="text-gray-600">
                I believe parents are the experts on their children. I work alongside families, providing support and strategies that fit naturally into your daily routines.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 ">
              <div className="w-16 h-16 bg-gradient-to-br from-green-300 to-lime-300 rounded-full flex items-center justify-center mb-4">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Child-Led Learning</h3>
              <p className="text-gray-600">
                I follow your child&apos;s interests and natural curiosity, making therapy fun and engaging while building essential communication skills.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 ">
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
          <div className="bg-white rounded-3xl p-8 sm:p-12 ">
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
                  <p className="text-gray-800 font-medium">{yearsOfExp}+ Years of Experience</p>
                  <p className="text-gray-600 text-sm">Hospital and school-based settings with pediatric populations</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-800 font-medium">Specialized Training in Early Intervention</p>
                  <p className="text-gray-600 text-sm">Focus on children ages 0-6</p>
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
                  <p className="text-gray-800 font-medium">Augmentative & Alternative Communication (AAC) Skilled Clinician</p>
                  <p className="text-gray-600 text-sm">Augmentative and alternative communication technologies</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Image src={ashaIcon} alt="ASHA-CCC-SLP" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
