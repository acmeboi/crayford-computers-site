import {
  Clock,
  Cpu,
  HardDrive,
  Laptop,
  Mail,
  MapPin,
  Menu,
  Monitor,
  Network,
  Phone,
  Printer,
  Server,
  Settings,
  Shield,
  Users,
  X
} from "lucide-react";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderHome = () => (
    <>
      <header className="bg-emerald-800">
        <div className="container px-6 py-16 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
            IT Solutions for Your Business
          </h1>
          <p className="mb-8 text-xl text-gray-200">
            At Crayford Computers Company, we are dedicated to providing
            top-notch IT services tailored to meet the diverse needs of our
            clients. Whether you are a small business or a large enterprise, our
            team of experts is here to help you navigate the ever-evolving world
            of technology.
          </p>
          <button
            onClick={() => setCurrentPage("contact")}
            className="px-8 py-3 font-semibold transition duration-300 bg-yellow-400 rounded-lg text-emerald-900 hover:bg-yellow-500"
          >
            Get Started
          </button>
        </div>
      </header>

      {/* Animated Services Overview */}
      <section className="py-16 overflow-hidden bg-white">
        <div className="container px-6 mx-auto">
          <h2 className="mb-16 text-3xl font-bold text-center text-gray-800">
            Why Choose Us
          </h2>

          <div className="grid items-center gap-12 mb-24 md:grid-cols-2">
            <div className="relative">
              <div className="relative w-full h-64 p-8 overflow-hidden rounded-lg bg-emerald-50 group">
                <div className="absolute inset-0 transition-transform duration-700 transform -skew-x-12 bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 group-hover:skew-x-12"></div>
                <Monitor className="w-16 h-16 mb-4 text-emerald-600 animate-bounce" />
                <div className="relative z-10">
                  <h3 className="mb-2 text-2xl font-bold text-emerald-800">
                    Modern Infrastructure
                  </h3>
                  <p className="text-gray-600">
                    State-of-the-art hardware and software solutions for your
                    business needs
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
                  <Settings className="w-32 h-32 text-emerald-200 animate-spin-slow" />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center p-4 space-x-4 transition-transform duration-300 transform rounded-lg bg-gray-50 hover:scale-105">
                <Shield className="w-8 h-8 text-emerald-600" />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Enterprise Security
                  </h4>
                  <p className="text-gray-600">
                    Advanced protection for your business data
                  </p>
                </div>
              </div>
              <div className="flex items-center p-4 space-x-4 transition-transform duration-300 transform rounded-lg bg-gray-50 hover:scale-105">
                <Server className="w-8 h-8 text-emerald-600" />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Cloud Solutions
                  </h4>
                  <p className="text-gray-600">
                    Scalable and reliable cloud infrastructure
                  </p>
                </div>
              </div>
              <div className="flex items-center p-4 space-x-4 transition-transform duration-300 transform rounded-lg bg-gray-50 hover:scale-105">
                <Users className="w-8 h-8 text-emerald-600" />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Expert Support
                  </h4>
                  <p className="text-gray-600">
                    24/7 technical assistance and consultation
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 transition duration-300 border border-gray-200 rounded-lg hover:shadow-lg group">
              <div className="relative h-12 mb-4">
                <Monitor className="absolute w-12 h-12 transition-transform duration-300 transform text-emerald-600 group-hover:scale-110" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Hardware Solutions</h3>
              <p className="text-gray-600">
                Complete computer hardware sales, repairs, and maintenance
                services.
              </p>
            </div>
            <div className="p-6 transition duration-300 border border-gray-200 rounded-lg hover:shadow-lg group">
              <div className="relative h-12 mb-4">
                <Shield className="absolute w-12 h-12 transition-transform duration-300 transform text-emerald-600 group-hover:scale-110" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">IT Security</h3>
              <p className="text-gray-600">
                Comprehensive security solutions to protect your business data.
              </p>
            </div>
            <div className="p-6 transition duration-300 border border-gray-200 rounded-lg hover:shadow-lg group">
              <div className="relative h-12 mb-4">
                <Users className="absolute w-12 h-12 transition-transform duration-300 transform text-emerald-600 group-hover:scale-110" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">IT Consultancy</h3>
              <p className="text-gray-600">
                Expert IT consulting services for business growth and
                efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Animation */}
      <section className="py-16 text-white bg-emerald-800">
        <div className="container px-6 mx-auto">
          <div className="grid gap-8 text-center md:grid-cols-4">
            <div className="group">
              <div className="mb-2 text-4xl font-bold text-yellow-400 transition-transform duration-300 transform group-hover:scale-110">
                500+
              </div>
              <p className="text-gray-200">Clients Served</p>
            </div>
            <div className="group">
              <div className="mb-2 text-4xl font-bold text-yellow-400 transition-transform duration-300 transform group-hover:scale-110">
                15+
              </div>
              <p className="text-gray-200">Years Experience</p>
            </div>
            <div className="group">
              <div className="mb-2 text-4xl font-bold text-yellow-400 transition-transform duration-300 transform group-hover:scale-110">
                24/7
              </div>
              <p className="text-gray-200">Support Available</p>
            </div>
            <div className="group">
              <div className="mb-2 text-4xl font-bold text-yellow-400 transition-transform duration-300 transform group-hover:scale-110">
                100%
              </div>
              <p className="text-gray-200">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const renderAbout = () => (
    <section className="py-16 bg-white">
      <div className="container px-6 mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
          About Crayford Computers
        </h2>
        <div className="max-w-3xl mx-auto space-y-6 text-gray-600">
          <p>
            Crayford Computers & IT Consultant Nig. Ltd. is a leading provider
            of comprehensive IT solutions in Nigeria. Located at Plot 20 Block 8
            Oluyole Estate, Ibadan, we have established ourselves as a trusted
            partner for businesses seeking reliable IT services and solutions.
          </p>
          <p>
            With years of experience in the industry, we specialize in providing
            top-quality computer hardware, software solutions, and professional
            IT consultancy services to businesses of all sizes.
          </p>
          <div className="p-6 mt-8 rounded-lg bg-emerald-50">
            <h3 className="mb-4 text-xl font-semibold text-emerald-800">
              Our Mission
            </h3>
            <p>
              To provide cutting-edge IT solutions and exceptional service that
              empowers businesses to achieve their technological goals while
              ensuring maximum efficiency and security.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-emerald-50">
            <h3 className="mb-4 text-xl font-semibold text-emerald-800">
              Our Vision
            </h3>
            <p>
              To be the leading IT solutions provider in Nigeria, known for
              excellence, innovation, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  const renderServices = () => (
    <section className="py-16 bg-white">
      <div className="container px-6 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-800">
          Our Services & Products
        </h2>

        <div className="space-y-16">
          {/* Hardware Sales */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-emerald-800">
              Computer Hardware Sales
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-6 transition duration-300 border border-gray-200 rounded-lg hover:shadow-lg">
                <Laptop className="w-10 h-10 mb-4 text-emerald-600" />
                <h4 className="mb-2 text-lg font-semibold">
                  Laptops & Desktops
                </h4>
                <p className="text-gray-600">
                  Wide range of computers from leading brands
                </p>
              </div>
              <div className="p-6 transition duration-300 border border-gray-200 rounded-lg hover:shadow-lg">
                <Printer className="w-10 h-10 mb-4 text-emerald-600" />
                <h4 className="mb-2 text-lg font-semibold">
                  Printers & Scanners
                </h4>
                <p className="text-gray-600">
                  Office printing solutions and document management
                </p>
              </div>
              <div className="p-6 transition duration-300 border border-gray-200 rounded-lg hover:shadow-lg">
                <HardDrive className="w-10 h-10 mb-4 text-emerald-600" />
                <h4 className="mb-2 text-lg font-semibold">Storage Devices</h4>
                <p className="text-gray-600">
                  Hard drives, SSDs, and backup solutions
                </p>
              </div>
            </div>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-emerald-800">
              Professional IT Services
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-6 transition duration-300 border border-gray-200 rounded-lg hover:shadow-lg">
                <Server className="w-10 h-10 mb-4 text-emerald-600" />
                <h4 className="mb-2 text-lg font-semibold">Server Solutions</h4>
                <p className="text-gray-600">
                  Installation, configuration, and maintenance
                </p>
              </div>
              <div className="p-6 transition duration-300 border border-gray-200 rounded-lg hover:shadow-lg">
                <Network className="w-10 h-10 mb-4 text-emerald-600" />
                <h4 className="mb-2 text-lg font-semibold">Network Setup</h4>
                <p className="text-gray-600">
                  Complete networking solutions for businesses
                </p>
              </div>
              <div className="p-6 transition duration-300 border border-gray-200 rounded-lg hover:shadow-lg">
                <Shield className="w-10 h-10 mb-4 text-emerald-600" />
                <h4 className="mb-2 text-lg font-semibold">
                  Security Services
                </h4>
                <p className="text-gray-600">
                  Cybersecurity and data protection
                </p>
              </div>
            </div>
          </div>

          {/* Maintenance Services */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-emerald-800">
              Maintenance & Support
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-6 transition duration-300 border border-gray-200 rounded-lg hover:shadow-lg">
                <Monitor className="w-10 h-10 mb-4 text-emerald-600" />
                <h4 className="mb-2 text-lg font-semibold">Hardware Repairs</h4>
                <p className="text-gray-600">
                  Expert repair services for all computer equipment
                </p>
              </div>
              <div className="p-6 transition duration-300 border border-gray-200 rounded-lg hover:shadow-lg">
                <Cpu className="w-10 h-10 mb-4 text-emerald-600" />
                <h4 className="mb-2 text-lg font-semibold">
                  System Maintenance
                </h4>
                <p className="text-gray-600">
                  Regular maintenance and optimization services
                </p>
              </div>
              <div className="p-6 transition duration-300 border border-gray-200 rounded-lg hover:shadow-lg">
                <Users className="w-10 h-10 mb-4 text-emerald-600" />
                <h4 className="mb-2 text-lg font-semibold">IT Consultation</h4>
                <p className="text-gray-600">
                  Professional advice and strategic planning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderContact = () => (
    <section className="py-16 bg-gray-50">
      <div className="container px-6 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-800">
          Contact Us
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-emerald-600" />
              <p className="text-gray-600">
                Plot 20 Block 8 Oluyole Estate, Ibadan
              </p>
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
            <button className="w-full px-6 py-3 font-semibold text-white transition duration-300 rounded-lg bg-emerald-600 hover:bg-emerald-700">
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
      <nav className="sticky top-0 z-50 bg-emerald-800">
        <div className="container px-6 py-4 mx-auto">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => setCurrentPage("home")}
            >
              <Settings className="w-8 h-8 text-yellow-400" />
              <span className="text-xl font-bold text-white">
                Crayford Computers & IT Consultant NIG L.T.D
              </span>
            </div>

            {/* Mobile menu button */}
            <button
              className="text-white md:hidden hover:text-yellow-400 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Desktop menu */}
            <div className="hidden space-x-8 text-gray-200 md:flex">
              <button
                onClick={() => setCurrentPage("home")}
                className={`hover:text-yellow-400 ${
                  currentPage === "home" ? "text-yellow-400" : ""
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setCurrentPage("about")}
                className={`hover:text-yellow-400 ${
                  currentPage === "about" ? "text-yellow-400" : ""
                }`}
              >
                About
              </button>
              <button
                onClick={() => setCurrentPage("services")}
                className={`hover:text-yellow-400 ${
                  currentPage === "services" ? "text-yellow-400" : ""
                }`}
              >
                Services
              </button>
              <button
                onClick={() => setCurrentPage("contact")}
                className={`hover:text-yellow-400 ${
                  currentPage === "contact" ? "text-yellow-400" : ""
                }`}
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } md:hidden mt-4 space-y-4 pb-4`}
          >
            <button
              onClick={() => {
                setCurrentPage("home");
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 text-gray-200 hover:text-yellow-400 ${
                currentPage === "home" ? "text-yellow-400" : ""
              }`}
            >
              Home
            </button>
            <button
              onClick={() => {
                setCurrentPage("about");
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 text-gray-200 hover:text-yellow-400 ${
                currentPage === "about" ? "text-yellow-400" : ""
              }`}
            >
              About
            </button>
            <button
              onClick={() => {
                setCurrentPage("services");
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 text-gray-200 hover:text-yellow-400 ${
                currentPage === "services" ? "text-yellow-400" : ""
              }`}
            >
              Services
            </button>
            <button
              onClick={() => {
                setCurrentPage("contact");
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 text-gray-200 hover:text-yellow-400 ${
                currentPage === "contact" ? "text-yellow-400" : ""
              }`}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      {currentPage === "home" && renderHome()}
      {currentPage === "about" && renderAbout()}
      {currentPage === "services" && renderServices()}
      {currentPage === "contact" && renderContact()}

      {/* Footer */}
      <footer className="py-8 text-white bg-emerald-900">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 text-center md:text-left md:mb-0">
              <p>&copy; 2024 Crayford Computers & IT Consultant Nig. Ltd.</p>
              <p className="text-sm text-gray-400">All rights reserved</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-yellow-400">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-yellow-400">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
