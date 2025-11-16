import React from 'react';

interface NavItem {
  label: string;
  href: string;
}

interface CaseStudy {
  id: string;
  category: string;
  title: string;
  challenge: string;
  solution: string;
  keyResults: {
    text: string;
    value: string;
  }[];
  image?: string;
  slug: string;
}

interface CaseStudiesPageProps {
  navItems?: NavItem[];
  caseStudies?: CaseStudy[];
}

const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({
  navItems = [
    { label: 'Services', href: '/services' },
    { label: 'ICT Supplies', href: '/ict-supplies' },
    { label: 'Why Us', href: '/why-us' },
    { label: 'Success Stories', href: '/success-stories' },
    { label: 'About', href: '/about' }
  ],
  caseStudies = [
    {
      id: '1',
      category: 'ECOMMERCE',
      title: 'Life Shop',
      challenge: 'Manual inventory management & Vendor coordination',
      solution: 'Automated inventory & vendor management system',
      keyResults: [
        { text: '30% increase in sales', value: '30%' },
        { text: '45% reduction in errors', value: '45%' }
      ],
      slug: 'life-shop'
    },
    {
      id: '2',
      category: 'TECHNOLOGY',
      title: 'SmartSol Solutions Platform',
      challenge: 'Fragmented business processes',
      solution: 'Integrated management platform',
      keyResults: [
        { text: '50% faster reporting', value: '50%' },
        { text: '25% cost reduction', value: '25%' }
      ],
      slug: 'smartsol-solutions-platform'
    },
    {
      id: '3',
      category: 'HEALTHCARE',
      title: 'ClinicOS Healthcare',
      challenge: 'Inefficient patient management',
      solution: 'AI-powered healthcare system',
      keyResults: [
        { text: '40% improved satisfaction', value: '40%' },
        { text: '60% reduced wait times', value: '60%' }
      ],
      slug: 'clinicos-healthcare'
    }
  ]
}) => {
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ecommerce':
        return 'bg-red-100 text-red-600';
      case 'technology':
        return 'bg-red-100 text-red-600';
      case 'healthcare':
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

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
                <span className="text-red-600">Sphere</span>
              </a>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`transition-colors duration-200 font-medium ${
                    item.label === 'Success Stories'
                      ? 'text-red-600'
                      : 'text-gray-700 hover:text-red-600'
                  }`}
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
              <button className="text-gray-700 hover:text-red-600 focus:outline-none">
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
              Success Stories
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped organizations across different industries transform their operations
              and achieve measurable results.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Case Study Image */}
                <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                  {study.image ? (
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-gray-400 text-6xl font-light">
                      800 × 600
                    </div>
                  )}
                </div>

                {/* Case Study Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${getCategoryColor(study.category)}`}>
                      {study.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {study.title}
                  </h3>

                  {/* Challenge */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Challenge:</h4>
                    <p className="text-gray-600 text-sm">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-1">Solution:</h4>
                    <p className="text-gray-600 text-sm">
                      {study.solution}
                    </p>
                  </div>

                  {/* Key Results */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">KEY RESULTS:</h4>
                    <div className="space-y-2">
                      {study.keyResults.map((result, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{result.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Read Full Case Study Link */}
                  <a
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-sm transition-colors duration-200 group"
                  >
                    Read Full Case Study
                    <svg
                      className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200"
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

          {/* Call to Action Section */}
          <div className="mt-16 text-center bg-gray-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our proven solutions can help transform your business operations
              and drive measurable results.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-medium text-lg group"
            >
              Start Your Transformation
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
                  <p><span className="font-medium">Phone:</span> +254</p>
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
              © 2025 SignalSphere. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CaseStudiesPage;
