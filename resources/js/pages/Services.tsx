import React from 'react';

interface NavItem {
  label: string;
  href: string;
}

interface ServiceItem {
  id: string;
  title: string;
  description?: string;
}

interface ServiceCategory {
  id: string;
  title: string;
  illustration: string;
  items: ServiceItem[];
  buttonText: string;
  buttonLink: string;
}

interface ServicesPageProps {
  navItems?: NavItem[];
  serviceCategories?: ServiceCategory[];
}

const ServicesPage: React.FC<ServicesPageProps> = ({
  navItems = [
    { label: 'Services', href: '/services' },
    { label: 'Why Us', href: '/why-us' },
    { label: 'Success Stories', href: '/success-stories' },
    { label: 'About', href: '/about' }
  ],
  serviceCategories = [
    {
      id: '1',
      title: 'Website & App Development',
      illustration: 'Illustration for Website & App Development',
      items: [
        { id: '1-1', title: 'Responsive Web Applications' },
        { id: '1-2', title: 'Mobile App Development' },
        { id: '1-3', title: 'E-commerce Solutions' }
      ],
      buttonText: 'Get Started',
      buttonLink: '/contact'
    },
    {
      id: '2',
      title: 'Custom Development & Integration',
      illustration: 'Illustration for Custom Development',
      items: [
        { id: '2-1', title: 'API Development & Integration' },
        { id: '2-2', title: 'System Analysis & Architecture' },
        { id: '2-3', title: 'ETL Integrations' }
      ],
      buttonText: 'Get Started',
      buttonLink: '/contact'
    },
    {
      id: '3',
      title: 'AI & Data Intelligence',
      illustration: 'Illustration for AI & Data Intelligence',
      items: [
        { id: '3-1', title: 'Business Intelligence Dashboards' },
        { id: '3-2', title: 'Predictive Analytics' },
        { id: '3-3', title: 'Document Data Extraction' }
      ],
      buttonText: 'Get Started',
      buttonLink: '/contact'
    },
    {
      id: '4',
      title: 'Data Science & Analytics',
      illustration: 'Illustration for Data Science',
      items: [
        { id: '4-1', title: 'Machine Learning Solutions' },
        { id: '4-2', title: 'Data Visualization' },
        { id: '4-3', title: 'Predictive Modeling' }
      ],
      buttonText: 'Get Started',
      buttonLink: '/contact'
    }
  ]
}) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-6">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold">
                <span className="text-gray-900">Signal</span>
                <span className="text-blue-600">Sphere</span>
              </a>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`transition-colors duration-200 font-medium ${
                    item.label === 'Services'
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/contact"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Contact Us
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to enhance your digital presence,
              unlock data insights, and drive business growth through innovation.
            </p>
          </div>

          {/* Service Categories */}
          <div className="space-y-20">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={category.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                categoryIndex % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}>

                {/* Illustration */}
                <div className={`${categoryIndex % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <svg
                        className="w-24 h-24 text-gray-400 mx-auto mb-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {categoryIndex === 0 && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        )}
                        {categoryIndex === 1 && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        )}
                        {categoryIndex === 2 && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        )}
                        {categoryIndex === 3 && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        )}
                      </svg>
                      <p className="text-gray-500 text-sm">{category.illustration}</p>
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className={`${categoryIndex % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                    {category.title}
                  </h2>

                  {/* Service Items */}
                  <div className="space-y-4 mb-8">
                    {category.items.map((item) => (
                      <div key={item.id} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                          <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">
                            {item.title}
                          </h3>
                          {item.description && (
                            <p className="text-gray-600 mt-1">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Get Started Button */}
                  <a
                    href={category.buttonLink}
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium group"
                  >
                    {category.buttonText}
                    <svg
                      className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Services Section */}
          <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Additional Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer a comprehensive range of technology solutions to meet your specific business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'AI & Business Intelligence',
                'Cloud Migration Services',
                'System Integration',
                'Business Process Automation',
                'Compliance Solutions',
                'Technical Support & Maintenance'
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3 className="font-medium text-gray-900">{service}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center bg-blue-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business operations
              and drive measurable results.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium text-lg group"
            >
              Schedule a Consultation
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
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold">
                  <span className="text-gray-900">Signal</span>
                  <span className="text-blue-600">Sphere</span>
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Your Partner for Modern Web Solutions and Data-Driven Growth.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">QUICK LINKS</h4>
              <ul className="space-y-3">
                <li>
                  <a href="/services" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/why-us" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a href="/case-studies" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-blue-600 font-medium">
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
                  <a href="/services/web-development" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    Web & App Development
                  </a>
                </li>
                <li>
                  <a href="/services/custom-development" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    Custom Development
                  </a>
                </li>
                <li>
                  <a href="/services/ai-intelligence" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    AI & Data Intelligence
                  </a>
                </li>
                <li>
                  <a href="/services/data-science" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    Data Science & Analytics
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
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
                  <p><span className="font-medium">Email:</span> info@signalsphere.co.uk</p>
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

export default ServicesPage;
