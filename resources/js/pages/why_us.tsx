import React from 'react';

interface NavItem {
  label: string;
  href: string;
}

interface WhyUsPageProps {
  navItems?: NavItem[];
}

const WhyUsPage: React.FC<WhyUsPageProps> = ({
  navItems = [
    { label: 'Services', href: '/services' },
    { label: 'ICT Supplies', href: '/ict-supplies' },
    { label: 'Why Us', href: '/why-us' },
    { label: 'Success Stories', href: '/success-stories' },
    { label: 'About', href: '/about' }
  ]
}) => {
      const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-6">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/">
                <h1 className="text-2xl font-bold">
                <span className="text-gray-900">Signal</span>
                <span className="text-red-600">Sphere</span>
              </h1>
              </a>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/contact"
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium"
              >
                Contact Us
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-red-600 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium px-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="/contact"
                  className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium mx-4 text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Signal Sphere?
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're not just a technology provider – we're your strategic partner in digital transformation.
              Here's what sets us apart.
            </p>
          </div>

          {/* Key Differentiators */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Differentiator 1 */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation-Driven</h3>
                <p className="text-gray-600 leading-relaxed">
                  We leverage cutting-edge technologies including AI, machine learning, and modern development frameworks to create solutions that give you a competitive edge.
                </p>
              </div>

              {/* Differentiator 2 */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Track Record</h3>
                <p className="text-gray-600 leading-relaxed">
                  With 30+ organizations empowered and 98% client satisfaction rate, our results speak for themselves. We deliver on our promises.
                </p>
              </div>

              {/* Differentiator 3 */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Team</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our team of seasoned professionals brings together expertise in web development, AI, data science, and business strategy.
                </p>
              </div>

              {/* Differentiator 4 */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Client-Centric Approach</h3>
                <p className="text-gray-600 leading-relaxed">
                  We don't just deliver projects – we build partnerships. Your success is our success, and we're committed to your long-term growth.
                </p>
              </div>

              {/* Differentiator 5 */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Rapid Delivery</h3>
                <p className="text-gray-600 leading-relaxed">
                  We understand that time is money. Our agile methodology ensures fast turnaround without compromising on quality.
                </p>
              </div>

              {/* Differentiator 6 */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Rigorous testing and quality control processes ensure that every solution we deliver meets the highest standards of excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Our Process */}
          <div className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Proven Process
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A structured, transparent approach that ensures your project success from start to finish.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery</h3>
                <p className="text-gray-600">
                  We dive deep into understanding your business, challenges, and goals.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Strategy</h3>
                <p className="text-gray-600">
                  We create a customized roadmap with clear milestones and deliverables.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Execution</h3>
                <p className="text-gray-600">
                  Our team builds, tests, and refines your solution with precision.
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Support</h3>
                <p className="text-gray-600">
                  Ongoing maintenance and optimization to ensure continued success.
                </p>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Results That Matter
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our commitment to excellence is reflected in the measurable impact we deliver.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-red-50 rounded-xl p-8">
                <div className="text-5xl font-bold text-red-600 mb-2">30+</div>
                <div className="text-gray-700 font-medium">Organizations Empowered</div>
              </div>

              <div className="text-center bg-red-50 rounded-xl p-8">
                <div className="text-5xl font-bold text-red-600 mb-2">100k+</div>
                <div className="text-gray-700 font-medium">Daily Transactions</div>
              </div>

              <div className="text-center bg-red-50 rounded-xl p-8">
                <div className="text-5xl font-bold text-red-600 mb-2">98%</div>
                <div className="text-gray-700 font-medium">Client Satisfaction</div>
              </div>

              <div className="text-center bg-red-50 rounded-xl p-8">
                <div className="text-5xl font-bold text-red-600 mb-2">40%</div>
                <div className="text-gray-700 font-medium">Avg. Efficiency Gain</div>
              </div>
            </div>
          </div>

          {/* Technology Excellence */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Technology Excellence
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We work with the latest and most reliable technologies in the industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Web & Mobile Development</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">React, Next.js, Vue.js</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">React Native, Flutter</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Node.js, Python, .NET</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Cloud Infrastructure (AWS, Azure)</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">AI & Data Science</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">TensorFlow, PyTorch</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Machine Learning Pipelines</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Business Intelligence Tools</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Data Visualization & Analytics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it – hear from the businesses we've transformed.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "SignalSphere transformed our operations with their custom web solution. The team's expertise and dedication to our success were exceptional. We've seen a 45% increase in efficiency."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <div className="font-bold text-gray-900">Management Team</div>
                    <div className="text-gray-600 text-sm">Life Shop</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "The AI-powered analytics dashboard has given us insights we never had before. Signal Sphere's team is responsive, professional, and truly understands business needs."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <div className="font-bold text-gray-900">Leadership Team</div>
                    <div className="text-gray-600 text-sm">Wairegi Advocates</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-red-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Experience the Signal Sphere Difference?
            </h2>
            <p className="text-lg text-red-100 mb-8 max-w-2xl mx-auto">
              Let's start a conversation about how we can help transform your business with innovative technology solutions.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium text-lg group"
            >
              Get Started Today
              <svg
                className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold">
                  <span className="text-gray-900">Signal</span>
                  <span className="text-red-600">Sphere</span>
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Fueling Growth with Digital Innovation.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">QUICK LINKS</h4>
              <ul className="space-y-3">
                <li>
                  <a href="/services" className="text-gray-600 hover:text-red-600 transition-colors duration-200">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/ict-supplies" className="text-gray-600 hover:text-red-600 transition-colors duration-200">
                    ICT Supplies
                  </a>
                </li>
                <li>
                  <a href="/why-us" className="text-red-600 font-medium">
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-600 hover:text-red-600 transition-colors duration-200">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">CORE SERVICES</h4>
              <ul className="space-y-3">
                <li>
                  <a href="/services/web-development" className="text-gray-600 hover:text-red-600 transition-colors duration-200">
                    Web & App Development
                  </a>
                </li>
                <li>
                  <a href="/services/custom-development" className="text-gray-600 hover:text-red-600 transition-colors duration-200">
                    Custom Development
                  </a>
                </li>
                <li>
                  <a href="/services/ai-intelligence" className="text-gray-600 hover:text-red-600 transition-colors duration-200">
                    AI & Business Intelligence
                  </a>
                </li>
                <li>
                  <a href="/services/data-science" className="text-gray-600 hover:text-red-600 transition-colors duration-200">
                    Data Science & Analytics
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">CONTACT US</h4>
              <div className="space-y-3 text-gray-600">
                <div>
                  <p>PL4 8ND</p>
                  <p>Nelson Street, Plymouth, UK</p>
                </div>
                <div>
                  <p><span className="font-medium">Phone:</span> +44 739 4132 747</p>
                </div>
                <div>
                  <p><span className="font-medium">Email:</span> info@signalsphere.co.ke</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="text-gray-600">
              © 2025 Signal Sphere. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WhyUsPage;
