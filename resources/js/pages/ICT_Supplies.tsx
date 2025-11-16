import React from 'react';

interface NavItem {
  label: string;
  href: string;
}

interface ICTSuppliesPageProps {
  navItems?: NavItem[];
}

const ICTSuppliesPage: React.FC<ICTSuppliesPageProps> = ({
  navItems = [
    { label: 'Services', href: '/services' },
    { label: 'ICT Supplies', href: '/ict-supplies' },
    { label: 'Why Us', href: '/why-us' },
    { label: 'Success Stories', href: '/success-stories' },
    { label: 'About', href: '/about' }
  ]
}) => {

  const supplies = [
    {
      id: 1,
      title: 'IP Telephony and VoIP Services',
      description: 'Modern communication solutions for businesses',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      ),
      link: '/ict-supplies/ip-telephony'
    },
    {
      id: 2,
      title: 'Surveillance & Security Systems',
      description: 'Comprehensive security solutions for your business',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      ),
      link: '/ict-supplies/surveillance'
    },
    {
      id: 3,
      title: 'ICT Hardware & Software Supplies',
      description: 'Quality hardware and software solutions',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      ),
      link: '/ict-supplies/hardware-software'
    },
    {
      id: 4,
      title: 'Preventive Maintenance Services',
      description: 'Keep your systems running smoothly',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      ),
      link: '/ict-supplies/maintenance'
    }
  ];
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
              ICT Supplies & Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive ICT supplies and services to power your business operations.
              From communication systems to security solutions, we've got you covered.
            </p>
          </div>

          {/* Supplies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {supplies.map((supply) => (
              <a
                key={supply.id}
                href={supply.link}
                className="group bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-red-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                    <svg
                      className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {supply.icon}
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                      {supply.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {supply.description}
                    </p>
                    <div className="flex items-center text-red-600 font-medium">
                      <span>Learn More</span>
                      <svg
                        className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Why Choose Our ICT Supplies */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our ICT Supplies?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We provide top-quality products and services backed by expert support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Products</h3>
                <p className="text-gray-600">
                  We source only the best brands and products to ensure reliability and longevity.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Installation</h3>
                <p className="text-gray-600">
                  Our expert team ensures quick and professional installation with minimal disruption.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ongoing Support</h3>
                <p className="text-gray-600">
                  Comprehensive maintenance and support services to keep your systems running.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-red-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Need ICT Supplies?
            </h2>
            <p className="text-lg text-red-100 mb-8 max-w-2xl mx-auto">
              Get in touch with our team to discuss your requirements and get a customized quote.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium text-lg group"
            >
              Contact Us Today
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
                  <a href="/ict-supplies" className="text-red-600 font-medium">
                    ICT Supplies
                  </a>
                </li>
                <li>
                  <a href="/why-us" className="text-gray-600 hover:text-red-600 transition-colors duration-200">
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
              <h4 className="text-lg font-bold text-gray-900 mb-4">ICT SUPPLIES</h4>
              <ul className="space-y-3">
                <li>
                  <a href="/ict-supplies/ip-telephony" className="text-gray-600 hover:text-red-600 transition-colors duration-200">
                    IP Telephony & VoIP
                  </a>
                </li>
                <li>
                  <a href="/ict-supplies/surveillance" className="text-gray-600 hover:text-red-600 transition-colors duration-200">
                    Surveillance Systems
                  </a>
                </li>
                <li>
                  <a href="/ict-supplies/hardware-software" className="text-gray-600 hover:text-red-600 transition-colors duration-200">
                    Hardware & Software
                  </a>
                </li>
                <li>
                  <a href="/ict-supplies/maintenance" className="text-gray-600 hover:text-red-600 transition-colors duration-200">
                    Maintenance Services
                  </a>
                </li>
              </ul>
            </div>

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

export default ICTSuppliesPage;
