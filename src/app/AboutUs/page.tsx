import { FaShieldAlt, FaRulerCombined, FaTools, FaIndustry } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-32">
        <div className="absolute inset-0 bg-stainless-steel bg-cover bg-center opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Stainless Steel Fabrication Experts
          </h1>
          <p className="mt-6 text-xl text-blue-200 max-w-3xl mx-auto">
            Precision. Quality. Durability.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Our Story
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Crafting Excellence in Stainless Steel
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              For years, we have been delivering custom stainless steel solutions that stand the test of time. 
              What began as a small workshop has grown into a trusted name in precision fabrication.
            </p>
          </div>
        </div>
      </div>

      {/* Specializations */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-12">
            Our Specializations
          </h2>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Cold Rooms */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-blue-600 mb-4">
                <FaIndustry className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Cold Room Solutions</h3>
              <p className="text-gray-500">
                Hygienic, durable stainless steel fabrication for temperature-controlled environments.
              </p>
            </div>

            {/* Server Rooms */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-blue-600 mb-4">
                <FaShieldAlt className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Server Room Installations</h3>
              <p className="text-gray-500">
                Precision fabrication for secure, efficient server and data center environments.
              </p>
            </div>

            {/* Commercial Kitchens */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-blue-600 mb-4">
                <FaTools className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Commercial Kitchens</h3>
              <p className="text-gray-500">
                Custom stainless steel workstations built for culinary excellence and sanitation.
              </p>
            </div>

            {/* Custom Fabrication */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-blue-600 mb-4">
                <FaRulerCombined className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Custom Fabrication</h3>
              <p className="text-gray-500">
                Tailored stainless steel solutions for your unique requirements.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Our Values
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Us
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="text-center">
                <div className="text-blue-600 text-5xl mb-4">01</div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">Precision</h3>
                <p className="mt-2 text-base text-gray-500">
                  Millimeter-perfect fabrication with advanced CNC technology
                </p>
              </div>

              <div className="text-center">
                <div className="text-blue-600 text-5xl mb-4">02</div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">Quality</h3>
                <p className="mt-2 text-base text-gray-500">
                  Only premium 304/316 stainless steel materials
                </p>
              </div>

              <div className="text-center">
                <div className="text-blue-600 text-5xl mb-4">03</div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">Durability</h3>
                <p className="mt-2 text-base text-gray-500">
                  Fabrications that withstand decades of heavy use
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to discuss your project?</span>
            <span className="block">Our experts are standing by.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
            Get a free consultation and quote for your custom stainless steel needs.
          </p>
          <a
            href="/ContactUs"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}