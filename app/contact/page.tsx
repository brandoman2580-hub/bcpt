import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { ContactForm } from './contact-form';

export default function ContactPage() {
  return (
    <div className="bg-orange-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-8 py-16 max-w-5xl">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl text-gray-800">Get in Touch</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            I&apos;d love to hear from you! Reach out to get more information or to ask questions
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 ">
              <h2 className="text-2xl text-gray-800 mb-6">Send Me a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 ">
                <h2 className="text-2xl text-gray-800 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-1">Phone</h3>
                      <a href="tel:5551234567" className="text-gray-600 hover:text-teal-600 transition-colors">
                        (509) 499-6047
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-medium text-gray-800 mb-1">Email</h3>
                      <a
                        href="mailto:bcptspeechservices@outlook.com"
                        className="text-gray-600 hover:text-teal-600 transition-colors break-words"
                      >
                        bcptspeechservices@<wbr />outlook.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-1">Location</h3>
                      <p className="text-gray-600">
                        1400 S 45th Ave<br />
                        West Richland, WA 99353
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-lime-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-1">Hours</h3>
                      <p className="text-gray-600">
                        Thursday & Friday: 9:00 AM - 4:30 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder - Will be added later */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
          <div className="bg-white rounded-3xl overflow-hidden ">
            <div className="bg-gradient-to-r from-teal-200 to-blue-200 h-96 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin size={48} className="mx-auto mb-4 text-teal-600" />
                <p className="text-lg font-medium">Map Location</p>
                <p className="text-sm">123 Therapy Lane, Suite 100, Cityville, ST 12345</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
