import { Book, Lightbulb, Download, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <div className="bg-orange-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-8 py-16 max-w-5xl">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl text-gray-800">Resources for Families</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Helpful tips, guides, and information to support your child's communication development at home
          </p>
        </div>
      </section>

      {/* Tips & Strategies */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
          <h2 className="text-3xl text-gray-800 mb-8">Tips & Strategies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-300 to-red-300 rounded-xl flex items-center justify-center mb-4">
                <Lightbulb className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Encouraging Early Language</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span>Talk about what you're doing during daily routines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span>Follow your child's lead and talk about what they're interested in</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span>Use simple, clear language that matches your child's level</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span>Give your child time to respond before moving on</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-300 to-pink-300 rounded-xl flex items-center justify-center mb-4">
                <Lightbulb className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Building Play Skills</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span>Get down on your child's level during play</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span>Narrate what your child is doing with toys</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span>Model different ways to play with toys</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span>Take turns and wait for your child to initiate</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-300 to-blue-300 rounded-xl flex items-center justify-center mb-4">
                <Lightbulb className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Supporting Social Communication</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span>Create opportunities for turn-taking games</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span>Practice greetings and goodbyes with family</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span>Use facial expressions and gestures to support understanding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span>Celebrate all communication attempts, not just words</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-green-300 to-lime-300 rounded-xl flex items-center justify-center mb-4">
                <Lightbulb className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Reading Together</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span>Choose books that match your child's interests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span>Point to pictures and name things together</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span>Ask simple questions about the story</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span>Read the same books multiple times for repetition</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg">
            <h2 className="text-3xl text-gray-800 mb-8 text-center">Communication Milestones</h2>
            <p className="text-center text-gray-600 mb-8">
              Here are some general guidelines for what to expect at different ages. Remember, every child develops at their own pace!
            </p>
            <div className="space-y-6">
              <div className="border-l-4 border-teal-500 pl-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">12-18 Months</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Uses 10-20 words</li>
                  <li>• Points to show interest</li>
                  <li>• Follows simple directions</li>
                  <li>• Brings you things to show you</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">18-24 Months</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Uses 50+ words</li>
                  <li>• Combines two words together</li>
                  <li>• Imitates words and actions</li>
                  <li>• Shows interest in other children</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">2-3 Years</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Uses 3-4 word sentences</li>
                  <li>• Asks simple questions</li>
                  <li>• Understands simple stories</li>
                  <li>• Engages in pretend play</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">3-4 Years</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Uses sentences of 4+ words</li>
                  <li>• Tells simple stories</li>
                  <li>• Most speech is understandable</li>
                  <li>• Plays cooperatively with peers</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">4-5 Years</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Uses complete sentences</li>
                  <li>• Tells detailed stories</li>
                  <li>• Speech is clear to strangers</li>
                  <li>• Engages in complex pretend play</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-orange-50 rounded-2xl">
              <p className="text-gray-700 text-center">
                <strong>Concerned about your child's development?</strong><br />
                Trust your instincts. Early intervention can make a significant difference. <Link href="/contact" className="text-teal-600 hover:text-teal-700 font-medium">Contact us</Link> for a consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
          <h2 className="text-3xl text-gray-800 mb-8">Recommended Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-400 rounded-xl flex items-center justify-center mb-4">
                <Book className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Books for Parents</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span>"It Takes Two to Talk" by Ayala Manolson</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span>"The Late Talker" by Marilyn C. Agin</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span>"More Than Words" by Fern Sussman</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center mb-4">
                <ExternalLink className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Helpful Websites</h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://www.asha.org" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 flex items-center gap-2">
                    ASHA (American Speech-Language-Hearing Association)
                    <ExternalLink size={14} />
                  </a>
                </li>
                <li>
                  <a href="https://www.talkingpoint.org.uk" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 flex items-center gap-2">
                    Talking Point - Speech and Language Advice
                    <ExternalLink size={14} />
                  </a>
                </li>
                <li>
                  <a href="https://www.zerotothree.org" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 flex items-center gap-2">
                    Zero to Three - Early Development Resources
                    <ExternalLink size={14} />
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-lime-400 rounded-xl flex items-center justify-center mb-4">
                <Download className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Activity Ideas</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span>Everyday routines as language opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span>Simple songs and rhymes for language learning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span>Play-based activities to build communication</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-xl flex items-center justify-center mb-4">
                <Book className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Children's Book Recommendations</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span>Board books with repetitive text</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span>Interactive books with flaps and textures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span>Books about emotions and social situations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-8 max-w-4xl text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl text-gray-800">Need personalized guidance?</h2>
          <p className="text-gray-600 text-lg">We're here to answer your questions and create a plan tailored to your child's needs</p>
          <Link 
            href="/contact"
            className="inline-block bg-teal-500 text-white px-10 py-4 rounded-full text-lg hover:bg-teal-600 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
