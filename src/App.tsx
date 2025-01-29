import React, { useState } from 'react';
import { Monitor, Cpu, Phone, Mail, MapPin, Clock, ChevronRight, Settings, Shield, Users, Printer, Network, Server, HardDrive, Laptop, Smartphone, Menu, X } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderHome = () => (
    <>
      <header className="bg-emerald-800">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            IT Solutions for Your Business
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Professional IT Consultancy Services in Nigeria
          </p>
          <button onClick={() => setCurrentPage('contact')} className="bg-yellow-400 text-emerald-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300">
            Get Started
          </button>
        </div>
      </header>

      {/* Animated Services Overview */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Why Choose Us</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative">
              <div className="w-full h-64 bg-emerald-50 rounded-lg p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 transform -skew-x-12 group-hover:skew-x-12 transition-transform duration-700"></div>
                <Monitor className="w-16 h-16 text-emerald-600 mb-4 animate-bounce" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-emerald-800 mb-2">Modern Infrastructure</h3>
                  <p className="text-gray-600">State-of-the-art hardware and software solutions for your business needs</p>
                </div>
                <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
                  <Settings className="w-32 h-32 text-emerald-200 animate-spin-slow" />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg transform hover:scale-105 transition-transform duration-300">
                <Shield className="w-8 h-8 text-emerald-600" />
                <div>
                  <h4 className="font-semibold text-gray-800">Enterprise Security</h4>
                  <p className="text-gray-600">Advanced protection for your business data</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg transform hover:scale-105 transition-transform duration-300">
                <Server className="w-8 h-8 text-emerald-600" />
                <div>
                  <h4 className="font-semibold text-gray-800">Cloud Solutions</h4>
                  <p className="text-gray-600">Scalable and reliable cloud infrastructure</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg transform hover:scale-105 transition-transform duration-300">
                <Users className="w-8 h-8 text-emerald-600" />
                <div>
                  <h4 className="font-semibold text-gray-800">Expert Support</h4>
                  <p className="text-gray-600">24/7 technical assistance and consultation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition duration-300 group">
              <div className="relative h-12 mb-4">
                <Monitor className="w-12 h-12 text-emerald-600 absolute transform group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hardware Solutions</h3>
              <p className="text-gray-600">Complete computer hardware sales, repairs, and maintenance services.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition duration-300 group">
              <div className="relative h-12 mb-4">
                <Shield className="w-12 h-12 text-emerald-600 absolute transform group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2">IT Security</h3>
              <p className="text-gray-600">Comprehensive security solutions to protect your business data.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition duration-300 group">
              <div className="relative h-12 mb-4">
                <Users className="w-12 h-12 text-emerald-600 absolute transform group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2">IT Consultancy</h3>
              <p className="text-gray-600">Expert IT consulting services for business growth and efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Animation */}
      <section className="py-16 bg-emerald-800 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold mb-2 text-yellow-400 transform group-hover:scale-110 transition-transform duration-300">500+</div>
              <p className="text-gray-200">Clients Served</p>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 text-yellow-400 transform group-hover:scale-110 transition-transform duration-300">15+</div>
              <p className="text-gray-200">Years Experience</p>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 text-yellow-400 transform group-hover:scale-110 transition-transform duration-300">24/7</div>
              <p className="text-gray-200">Support Available</p>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 text-yellow-400 transform group-hover:scale-110 transition-transform duration-300">100%</div>
              <p className="text-gray-200">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const renderAbout = () => (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About Crayford Computers</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-gray-600">
          <p>
            Crayford Computers & IT Consultant Nig. Ltd. is a leading provider of comprehensive IT solutions in Nigeria. 
            Located at Plot 20 Block 8 Oluyole Estate, Ibadan, we have established ourselves as a trusted partner for 
            businesses seeking reliable IT services and solutions.
          </p>
          <p>
            With years of experience in the industry, we specialize in providing top-quality computer hardware, 
            software solutions, and professional IT consultancy services to businesses of all sizes.
          </p>
          <div className="bg-emerald-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold text-emerald-800 mb-4">Our Mission</h3>
            <p>
              To provide cutting-edge IT solutions and exceptional service that empowers businesses to achieve their 
              technological goals while ensuring maximum efficiency and security.
            </p>
          </div>
          <div className="bg-emerald-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-emerald-800 mb-4">Our Vision</h3>
            <p>
              To be the leading IT solutions provider in Nigeria, known for excellence, innovation, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  const renderServices = () => (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services & Products</h2>
        
        <div className="space-y-16">
          {/* Hardware Sales */}
          <div>
            <h3 className="text-2xl font-semibold text-emerald-800 mb-6">Computer Hardware Sales</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition duration-300">
                <Laptop className="w-10 h-10 text-emerald-600 mb-4" />
                <h4 className="text-lg font-semibold mb-2">Laptops & Desktops</h4>
                <p className="text-gray-600">Wide range of computers from leading brands</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition duration-300">
                <Printer className="w-10 h-10 text-emerald-600 mb-4" />
                <h4 className="text-lg font-semibold mb-2">Printers & Scanners</h4>
                <p className="text-gray-600">Office printing solutions and document management</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition duration-300">
                <HardDrive className="w-10 h-10 text-emerald-600 mb-4" />
                <h4 className="text-lg font-semibold mb-2">Storage Devices</h4>
                <p className="text-gray-600">Hard drives, SSDs, and backup solutions</p>
              </div>
            </div>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-2xl font-semibold text-emerald-800 mb-6">Professional IT Services</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition duration-300">
                <Server className="w-10 h-10 text-emerald-600 mb-4" />
                <h4 className="text-lg font-semibold mb-2">Server Solutions</h4>
                <p className="text-gray-600">Installation, configuration, and maintenance</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition duration-300">
                <Network className="w-10 h-10 text-emerald-600 mb-4" />
                <h4 className="text-lg font-semibold mb-2">Network Setup</h4>
                <p className="text-gray-600">Complete networking solutions for businesses</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition duration-300">
                <Shield className="w-10 h-10 text-emerald-600 mb-4" />
                <h4 className="text-lg font-semibold mb-2">Security Services</h4>
                <p className="text-gray-600">Cybersecurity and data protection</p>
              </div>
            </div>
          </div>

          {/* Maintenance Services */}
          <div>
            <h3 className="text-2xl font-semibold text-emerald-800 mb-6">Maintenance & Support</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition duration-300">
                <Monitor className="w-10 h-10 text-emerald-600 mb-4" />
                <h4 className="text-lg font-semibold mb-2">Hardware Repairs</h4>
                <p className="text-gray-600">Expert repair services for all computer equipment</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition duration-300">
                <Cpu className="w-10 h-10 text-emerald-600 mb-4" />
                <h4 className="text-lg font-semibold mb-2">System Maintenance</h4>
                <p className="text-gray-600">Regular maintenance and optimization services</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition duration-300">
                <Users className="w-10 h-10 text-emerald-600 mb-4" />
                <h4 className="text-lg font-semibold mb-2">IT Consultation</h4>
                <p className="text-gray-600">Professional advice and strategic planning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderContact = () => (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-emerald-600" />
              <p className="text-gray-600">Plot 20 Block 8 Oluyole Estate, Ibadan</p>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-emerald-600" />
              <p className="text-gray-600">+234 703 203 0129</p>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-emerald-600" />
              <p className="text-gray-600">info@crayfordcomputers.ng</p>
            </div>
            <div className="flex items-center space-x-4">
              <Clock className="w-6 h-6 text-emerald-600" />
              <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            ></textarea>
            <button className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-emerald-800 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <Settings className="w-8 h-8 text-yellow-400" />
              <span className="text-white font-bold text-xl">Crayford Computers</span>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-white hover:text-yellow-400 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8 text-gray-200">
              <button 
                onClick={() => setCurrentPage('home')} 
                className={`hover:text-yellow-400 ${currentPage === 'home' ? 'text-yellow-400' : ''}`}
              >
                Home
              </button>
              <button 
                onClick={() => setCurrentPage('about')} 
                className={`hover:text-yellow-400 ${currentPage === 'about' ? 'text-yellow-400' : ''}`}
              >
                About
              </button>
              <button 
                onClick={() => setCurrentPage('services')} 
                className={`hover:text-yellow-400 ${currentPage === 'services' ? 'text-yellow-400' : ''}`}
              >
                Services
              </button>
              <button 
                onClick={() => setCurrentPage('contact')} 
                className={`hover:text-yellow-400 ${currentPage === 'contact' ? 'text-yellow-400' : ''}`}
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden mt-4 space-y-4 pb-4`}>
            <button 
              onClick={() => {
                setCurrentPage('home');
                setIsMobileMenuOpen(false);
              }} 
              className={`block w-full text-left px-4 py-2 text-gray-200 hover:text-yellow-400 ${currentPage === 'home' ? 'text-yellow-400' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => {
                setCurrentPage('about');
                setIsMobileMenuOpen(false);
              }} 
              className={`block w-full text-left px-4 py-2 text-gray-200 hover:text-yellow-400 ${currentPage === 'about' ? 'text-yellow-400' : ''}`}
            >
              About
            </button>
            <button 
              onClick={() => {
                setCurrentPage('services');
                setIsMobileMenuOpen(false);
              }} 
              className={`block w-full text-left px-4 py-2 text-gray-200 hover:text-yellow-400 ${currentPage === 'services' ? 'text-yellow-400' : ''}`}
            >
              Services
            </button>
            <button 
              onClick={() => {
                setCurrentPage('contact');
                setIsMobileMenuOpen(false);
              }} 
              className={`block w-full text-left px-4 py-2 text-gray-200 hover:text-yellow-400 ${currentPage === 'contact' ? 'text-yellow-400' : ''}`}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      {currentPage === 'home' && renderHome()}
      {currentPage === 'about' && renderAbout()}
      {currentPage === 'services' && renderServices()}
      {currentPage === 'contact' && renderContact()}

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p>&copy; 2024 Crayford Computers & IT Consultant Nig. Ltd.</p>
              <p className="text-sm text-gray-400">All rights reserved</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-400">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;