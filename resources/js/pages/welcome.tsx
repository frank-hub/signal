import React from 'react';

interface NavItem {
  label: string;
  href: string;
}

interface HomePageProps {
  navItems?: NavItem[];
}

const HomePage: React.FC<HomePageProps> = ({
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
    <div className="min-h-screen bg-gray-50">
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

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center py-16 md:py-24 lg:py-32">
          {/* Main Heading */}
          <div className="max-w-4xl mx-auto mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gray-900 block">Transform Your Business with</span>
              <span className="bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 bg-clip-text text-transparent block mt-2">
                Intelligent Technology
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Website & Mobile App Dev, AI-driven automation, custom
              software development, and compliance solutions tailored for Kenya businesses and
              beyond.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <a href='/contact' className="w-full sm:w-auto bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-medium text-sm flex items-center justify-center group">
              Consult Us
              <svg
                className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a href='/success-stories' className="w-full sm:w-auto bg-white text-gray-700 px-8 py-4 rounded-lg border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 font-medium text-sm">
              Explore Success Stories
            </a>
          </div>
        </div>

        {/* Trust Banner */}
        <div className="text-center pb-16 md:pb-24">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
              Trusted by Leading Kenyan Organizations
            </p>

            {/* Placeholder for client logos */}
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-xs text-gray-500 font-medium">Logo 1</span>
              </div>
              <div className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-xs text-gray-500 font-medium">Logo 2</span>
              </div>
              <div className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-xs text-gray-500 font-medium">Logo 3</span>
              </div>
              <div className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-xs text-gray-500 font-medium">Logo 4</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Statistics Section */}
      <section className="bg-gray-100 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">30+</div>
              <div className="text-gray-600 font-medium">Organizations Empowered</div>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">100k+</div>
              <div className="text-gray-600 font-medium">Daily Transactions Processed</div>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction Rate</div>
            </div>

            {/* Stat 4 */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">40%</div>
              <div className="text-gray-600 font-medium">Avg. Efficiency Gain Reported</div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 md:py-24 bg-white" id='services'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Expertise: Driving Your Growth
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We deliver end-to-end technology solutions designed to streamline operations, ensure
              compliance, and unlock your business potential.
            </p>
          </div>

          {/* Expertise Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: ERP & Business Automation */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Website & App Development
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We design and build modern, responsive websites and mobile apps tailored to your brand and business goals.
              </p>
            </div>

            {/* Card 2: Custom Development & Integration */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Custom Development & Integration
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Tailored software for unique needs, integrations, system analysis, API development
                and ETL integrations.
              </p>
            </div>

            {/* Card 3: AI & Data Intelligence */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  AI & Data Intelligence
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                AI-driven analytics, business intelligence dashboards, predictive insights, document data
                extraction, custom AI agents.
              </p>
            </div>

            {/* Card 4: Financial Systems & Compliance */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Data Science & Analytics
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Data analysis, predictive modeling, machine learning solutions, and
                data visualization dashboards.
              </p>
            </div>
          </div>
                    <div className="text-center mt-12">
            <a
              href="/services"
              className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-lg transition-colors duration-200"
            >
              View all Services
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Strategic Technology Partner Section */}
     <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Your Strategic Technology Partner
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We go beyond implementation. We partner with you for long-term success, blending deep
              technical skill with a genuine understanding of your business.
            </p>
          </div>

          {/* Partnership Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Feature 1 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-red-600 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  Expert team specializing in modern web development, AI integration,
                  data analytics, and cloud-native solutions.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-red-600 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Best Practices</h3>
                <p className="text-gray-600 leading-relaxed">
                  Proven methodologies and international standards combined with
                  deep understanding of local market requirements.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-red-600 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Solutions</h3>
                <p className="text-gray-600 leading-relaxed">
                  We prioritize understanding your needs. Every solution is
                  carefully crafted to match your specific business requirements.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-red-600 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Partnership</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive support from initial consultation and development
                  to deployment, maintenance, and ongoing optimization.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-red-600 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Future-Ready Technology</h3>
                <p className="text-gray-600 leading-relaxed">
                  Utilizing cutting-edge AI, machine learning, and modern development
                  frameworks to ensure your solutions remain competitive.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-red-600 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data-Driven Insights</h3>
                <p className="text-gray-600 leading-relaxed">
                  Advanced analytics and business intelligence solutions that transform
                  raw data into actionable insights for strategic decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Results Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Real Results, Real Impact
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Don't just take our word for it. See how we've helped businesses like yours achieve measurable
              success.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed text-lg italic">
                  "...exceptional understanding..."
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-500 font-medium">Logo</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Management</div>
                  <div className="text-gray-600 text-sm">Life Shop</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed text-lg italic">
                  "...streamline operations across all locations..."
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-500 font-medium">Logo</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Leadership Team</div>
                  <div className="text-gray-600 text-sm">Wairegi Advocates</div>
                </div>
              </div>
            </div>
          </div>

          {/* View All Success Stories Link */}
          <div className="text-center">
            <a
              href="/success-stories"
              className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-lg transition-colors duration-200"
            >
              View all Success Stories
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Our Collaborative Approach Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Collaborative Approach
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We follow a structured, transparent process to ensure your project is delivered smoothly, on
              time, and achieves your desired outcomes.
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Process Line */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-gray-300" style={{left: '10%', right: '10%'}}></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="text-center relative">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 relative z-10">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Discover & Analyze</h3>
                <p className="text-gray-600 leading-relaxed">
                  Understanding your business, processes, and goals to identify opportunities.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center relative">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 relative z-10">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Plan & Design</h3>
                <p className="text-gray-600 leading-relaxed">
                  Creating a tailored roadmap with clear milestones and deliverables.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center relative">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 relative z-10">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Implement & Test</h3>
                <p className="text-gray-600 leading-relaxed">
                  Developing, configuring, and rigorously testing solutions before deployment.
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center relative">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 relative z-10">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Support & Grow</h3>
                <p className="text-gray-600 leading-relaxed">
                  Providing ongoing support, training, and strategic guidance for continued success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl text-red-100 mb-8 leading-relaxed">
            Let's discuss how Signal Sphere's tailored ERP, custom software, and AI solutions can help
            you achieve operational excellence and sustainable growth.
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
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
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

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">QUICK LINKS</h4>
              <ul className="space-y-3">
                <li>
                  <a href="/services" className="text-red-600 font-medium">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/why-us" className="text-gray-600 hover:text-red-600 transition-colors duration-200">
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a href="/case-studies" className="text-gray-600 hover:text-red-600 transition-colors duration-200">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-600 hover:text-red-600 transition-colors duration-200">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Core Services */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">CORE SERVICES</h4>
              <ul className="space-y-3">
                <li>
                  <a href="/services/dynamics-365" className="text-gray-600 hover:text-red-600 transition-colors duration-200">
                    Website & Mobile App Development
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

              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">CONTACT US</h4>
              <div className="space-y-3 text-gray-600">
                <div>
                  <p>5th Floor Towers</p>
                  <p>Ojijo Road , Nairobi Kenya</p>
                </div>
                <div>
                  <p><span className="font-medium">Phone:</span> +254 717 353774</p>
                </div>
                <div>
                  <p><span className="font-medium">Email:</span> hello@signal-sphere.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
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

export default HomePage;
