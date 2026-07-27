'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Label } from '@/app/components/ui/label';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childAge: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      childAge: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-orange-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-8 py-16 max-w-5xl">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl text-gray-800">Get in Touch</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you! Reach out with any questions or to schedule a consultation
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg">
              <h2 className="text-2xl text-gray-800 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700 mb-2 block">
                    Your Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700 mb-2 block">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-700 mb-2 block">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <Label htmlFor="childAge" className="text-gray-700 mb-2 block">
                    Child's Age
                  </Label>
                  <Input
                    id="childAge"
                    name="childAge"
                    type="text"
                    value={formData.childAge}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-colors"
                    placeholder="e.g., 2 years old"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-700 mb-2 block">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-colors resize-none"
                    placeholder="Tell us about your concerns or what you'd like to discuss..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-full text-lg transition-colors flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={18} />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="text-2xl text-gray-800 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-1">Phone</h3>
                      <a href="tel:5551234567" className="text-gray-600 hover:text-teal-600 transition-colors">
                        (555) 123-4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-1">Email</h3>
                      <a href="mailto:hello@blossomingconnections.com" className="text-gray-600 hover:text-teal-600 transition-colors break-all">
                        hello@blossomingconnections.com
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
                        123 Therapy Lane<br />
                        Suite 100<br />
                        Cityville, ST 12345
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
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Saturday: By appointment<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8">
                <h3 className="text-xl font-medium text-gray-800 mb-4">What to Expect</h3>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">✓</span>
                    <span>We typically respond within 24 hours</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">✓</span>
                    <span>Free initial phone consultation</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">✓</span>
                    <span>Flexible scheduling options available</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">✓</span>
                    <span>Warm, welcoming environment</span>
                  </p>
                </div>
              </div>

              {/* FAQ Link */}
              <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-3">Have Questions?</h3>
                <p className="text-gray-600 mb-4">
                  Check out our Resources page for helpful information and frequently asked questions
                </p>
                <a
                  href="/resources"
                  className="inline-block text-teal-600 hover:text-teal-700 font-medium"
                >
                  View Resources →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
            <div className="bg-gradient-to-r from-teal-200 to-blue-200 h-96 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin size={48} className="mx-auto mb-4 text-teal-600" />
                <p className="text-lg font-medium">Map Location</p>
                <p className="text-sm">123 Therapy Lane, Suite 100, Cityville, ST 12345</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
