"use client";

import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#E9F1FA] animate-fadeIn">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-500 to-[#00ABE4] overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Secure Your Academic Achievements
              <br />
              <span className="text-[#E9F1FA]">on the Certify-chain</span>
            </h1>
            <p className="text-xl text-[#E9F1FA] max-w-2xl mx-auto mb-8">
              Issue, verify, and manage academic certificates with blockchain technology.
              Ensure authenticity and eliminate fraud.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-[#00ABE4] hover:bg-[#E9F1FA] transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-white/25 font-semibold px-8 py-3 rounded-lg group">
                Get Started
                <span className="ml-2 inline-block transform group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Button>
              <Button variant="outline" className="bg-transparent text-white border-2 border-white hover:border-[#E9F1FA] hover:bg-white/10 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm font-semibold px-8 py-3 rounded-lg group">
                Learn More
                <span className="ml-2 inline-block transform scale-0 group-hover:scale-100 transition-transform duration-300">→</span>
              </Button>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute -bottom-1/2 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] opacity-20">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 blur-3xl"></div>
        </div>
      </div>

      {/* Key Features */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Platform?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the future of academic credentials with our blockchain-powered platform
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: 'feature-1',
                title: "Blockchain Security",
                description: "Immutable and tamper-proof certificates secured by blockchain technology",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                id: 'feature-2',
                title: "Instant Verification",
                description: "Verify certificates instantly with just a few clicks",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                id: 'feature-3',
                title: "Global Recognition",
                description: "Certificates recognized and verifiable worldwide",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            ].map((feature) => (
              <div
                key={feature.id}
                className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-16 w-16 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple steps to get started with our platform
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                id: 'step-1',
                step: "1",
                title: "Create Account",
                description: "Sign up as a student or institution"
              },
              {
                id: 'step-2',
                step: "2",
                title: "Connect Wallet",
                description: "Link your blockchain wallet"
              },
              {
                id: 'step-3',
                step: "3",
                title: "Issue/Receive",
                description: "Issue or receive certificates"
              },
              {
                id: 'step-4',
                step: "4",
                title: "Verify",
                description: "Instantly verify certificates"
              }
            ].map((step, index) => (
              <div key={step.id} className="relative">
                <div className="bg-white rounded-xl p-8 text-center relative z-10">
                  <div className="h-12 w-12 rounded-full bg-blue-600 text-white text-xl font-bold flex items-center justify-center mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by leading institutions and students worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: 'testimonial-1',
                quote: "The blockchain verification system has revolutionized how we issue certificates. It's secure and efficient.",
                author: "Dr. Sarah Johnson",
                role: "Dean, MIT"
              },
              {
                id: 'testimonial-2',
                quote: "As a student, having my certificates on the blockchain gives me confidence in their authenticity and global recognition.",
                author: "Michael Chen",
                role: "Computer Science Student"
              },
              {
                id: 'testimonial-3',
                quote: "The verification process is incredibly fast and reliable. It has streamlined our recruitment process significantly.",
                author: "Emily Brown",
                role: "HR Director, Tech Corp"
              }
            ].map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <svg className="h-8 w-8 text-blue-600 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-600 mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#00ABE4] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-[#E9F1FA] max-w-2xl mx-auto mb-8">
              Join thousands of institutions and students already using our platform
            </p>
            <Button className="bg-[#00ABE4] text-white hover:bg-[#0098cb] transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-[#00ABE4]/25 font-semibold px-8 py-3 rounded-lg group">
              Create Free Account
              <span className="ml-2 inline-block transform group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
}
