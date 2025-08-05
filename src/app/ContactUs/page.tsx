import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { MdDirections } from 'react-icons/md';

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-4 text-xl text-blue-200">
            Reach our stainless steel fabrication experts
          </p>
        </div>
      </div>

      {/* Main Content - Two Column Grid */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Column - Google Map */}
          <div className="h-96 lg:h-full rounded-lg shadow-lg overflow-hidden">
            <iframe
              title="Our Location"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.854376476614!2d36.98787631526378!3d-1.263380535980628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f6f7b20d3f0a5%3A0x1e3b0b9a9a9a9a9a!2sBypass%20Kamakis!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
              className="border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Right Column - Contact Info */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">
              Contact Information
            </h2>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start">
                <div className="flex-shrink-0 text-blue-600 mt-1">
                  <FaMapMarkerAlt className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Our Location</h3>
                  <p className="mt-1 text-gray-600">
                    Bypass Road, Kamakis<br />
                    Nairobi, Kenya
                  </p>
                  <a 
                    href="https://goo.gl/maps/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center text-blue-600 hover:text-blue-800 text-sm"
                  >
                    <MdDirections className="mr-1" /> Open in Google Maps
                  </a>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start">
                <div className="flex-shrink-0 text-blue-600 mt-1">
                  <FaPhone className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Call Us</h3>
                  <div className="mt-1 space-y-1 text-gray-600">
                    <p className="hover:text-blue-600 transition-colors">
                      <a href="tel:+254700000000">+254 700 000 000</a> (Main)
                    </p>
                    <p className="hover:text-blue-600 transition-colors">
                      <a href="tel:+254700000001">+254 700 000 001</a> (Sales)
                    </p>
                    <p className="hover:text-blue-600 transition-colors">
                      <a href="tel:+254700000002">+254 700 000 002</a> (Support)
                    </p>
                  </div>
                </div>
              </div>

              {/* Email Addresses */}
              <div className="flex items-start">
                <div className="flex-shrink-0 text-blue-600 mt-1">
                  <FaEnvelope className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                  <div className="mt-1 space-y-1 text-gray-600">
                    <p className="hover:text-blue-600 transition-colors">
                      <a href="mailto:info@steelfab.com">info@steelfab.com</a> (General)
                    </p>
                    <p className="hover:text-blue-600 transition-colors">
                      <a href="mailto:sales@steelfab.com">sales@steelfab.com</a> (Sales)
                    </p>
                    <p className="hover:text-blue-600 transition-colors">
                      <a href="mailto:support@steelfab.com">support@steelfab.com</a> (Support)
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start">
                <div className="flex-shrink-0 text-blue-600 mt-1">
                  <FaClock className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
                  <div className="mt-1 text-gray-600">
                    <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p>Saturday: 9:00 AM - 1:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}