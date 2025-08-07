// src/app/page.tsx
'use client';

import Image from "next/image";
import React from "react";
import { motion } from 'framer-motion';
const projects = [
  {
    id: 1,
    title: "Shower Rooms",
    image: "/Shower.jpeg",
    description: "Hygienic, energy-efficient cold storage solutions for food, pharma, and industrial use."
  },
  {
    id: 2,
    title: "Stainless Steel Sink",
    image: "/table4.png",
    description: "Commercial-grade stainless steel tables with hygienic surfaces and durable construction."
  },
  {
    id: 3,
    title: "Stainless Cooker",
    image: "/cooker2.png",
    description: "Secure, climate-controlled server environments with optimal airflow and cable management."
  },
  {
    id: 4,
    title: "Staircase Handlebars",
    image: "/staircase.jpeg",
    description: "Bespoke stainless steel fabrication for commercial, industrial, and architectural applications."
  }
];

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section with Video Background */}
        <section className="relative bg-gray-900 text-white h-screen min-h-[600px] px-4 text-center overflow-hidden flex items-center justify-center">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            src="/welding.mp4"
          />
          
          {/* Dark overlay for better contrast */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-gray-900/60"></div>
          
          {/* Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-yellow-400">Stainless Steel</span> Fabrication Experts
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Custom solutions for cold rooms, server rooms, commercial kitchens, and all your stainless steel needs. 
              <span className="block mt-2 font-medium">Precision. Quality. Durability.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/ContactUs"
                className="inline-block bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Contact Us
              </a>
              <a
                href="/Ourproduct"
                className="inline-block border-2 border-white hover:border-yellow-400 text-white hover:text-yellow-400 font-bold px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                View Our Work
              </a>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-20 px-4 min-h-[60vh] md:min-h-[70vh] relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[url('/fab.jpg')]"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto">
            <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: false, margin: "-20% 0px -20% 0px" }} // Triggers in both directions
             variants={{
               hidden: { opacity: 0, y: 50 },
               visible: { opacity: 1, y: 0 }
             }}
             transition={{ 
               duration: 3,
               ease: [0.16, 1, 0.3, 1]
             }}
             whileHover={{ scale: 1.02 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-black">
                Our <span className="text-yellow-600">Premium</span> Projects
              </h2>
              <p className="text-grey-1000 max-w-2xl mx-auto text-sm sm:text-base">
                Crafting durable stainless steel solutions for industries worldwide
              </p>
            </motion.div>

            <motion.div 
               
               initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-20% 0px -20% 0px" }} // Triggers in both directions
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ 
                  duration: 3,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ scale: 1.02 }}

              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            >
              {projects.map((project) => (
                <motion.div 
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-20% 0px -20% 0px" }} // Triggers in both directions
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ 
                  duration: 3,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ scale: 1.02 }}
                className="group relative  rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 will-change-transform"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-1 bg-blue-500 mr-3 transition-all duration-500 group-hover:w-12"></div>
                      <h3 className="text-xl font-bold text-yellow-700">{project.title}</h3>
                    </div>
                    <p className="text-yellow-600 text-sm mb-4">{project.description}</p>
                    <button className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors flex items-center">
                      View Project
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center mt-14"
            >
              <button className="px-8 py-3 bg-yellow-800 hover:bg-black text-white font-medium rounded-full shadow-lg transition-all duration-300 hover:shadow-blue-500/30 flex items-center mx-auto">
              <a href="/Ourproduct">Explore More Products</a> 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-gray-900 py-12 md:py-16 px-4 min-h-[400px] md:min-h-[500px] flex items-center">
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch w-full">
            {/* Image with border on left and right */}
            <div className="relative h-full min-h-[300px]">
              {/* Border container - only left and right */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
                <div className="absolute left-0 top-0 h-full w-8 bg-gray-400"></div>
                <div className="absolute right-0 top-0 h-full w-8 bg-gray-400"></div>
              </div>
              <Image
                src="/tank.jpeg"
                fill
                alt="Stainless Steel Fabrication"
                className="w-full h-[500px] object-cover rounded-lg shadow-xl relative z-10"
              />
            </div>
            
            {/* Text content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-200">
                What is Stainless Steel Fabrication?
              </h2>
              <p className="text-gray-100 text-base sm:text-lg mb-8">
                Stainless steel fabrication is the process of cutting, shaping, and assembling stainless steel into finished products and structures. This process uses advanced techniques such as welding, bending, and machining to create durable, corrosion-resistant components for industries like food processing, construction, healthcare, and technology. Stainless steel fabrication ensures high strength, hygiene, and longevity, making it ideal for custom solutions ranging from architectural features to industrial equipment.
              </p>

              {/* Benefits with Icons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {/* Durability */}
                <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-yellow-400 transition-colors">
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <h3 className="font-semibold text-gray-100">Durability</h3>
                  </div>
                  <p className="text-gray-300 text-sm">Withstands extreme conditions and heavy use</p>
                </div>

                {/* Hygiene */}
                <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-yellow-400 transition-colors">
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <h3 className="font-semibold text-gray-100">Hygiene</h3>
                  </div>
                  <p className="text-gray-300 text-sm">Non-porous surface prevents bacterial growth</p>
                </div>

                {/* Corrosion Resistance */}
                <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-yellow-400 transition-colors">
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                    <h3 className="font-semibold text-gray-100">Corrosion Resistant</h3>
                  </div>
                  <p className="text-gray-300 text-sm">Withstands moisture and harsh chemicals</p>
                </div>

                {/* Aesthetic */}
                <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-yellow-400 transition-colors">
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <h3 className="font-semibold text-gray-100">Aesthetic</h3>
                  </div>
                  <p className="text-gray-300 text-sm">Modern, clean appearance for any setting</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* why choose us */}
        <section>
        <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-gray-700 font-semibold tracking-wide uppercase">
              Our Values
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-yellow-600 sm:text-4xl">
              Why Choose Us
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="text-center">
                <div className="text-yellow-600 text-5xl mb-4">01</div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">Precision</h3>
                <p className="mt-2 text-base text-gray-500">
                  Millimeter-perfect fabrication with advanced CNC technology
                </p>
              </div>

              <div className="text-center">
                <div className="text-yellow-600 text-5xl mb-4">02</div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">Quality</h3>
                <p className="mt-2 text-base text-gray-500">
                  Only premium 304/316 stainless steel materials
                </p>
              </div>

              <div className="text-center">
                <div className="text-yellow-600 text-5xl mb-4">03</div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">Durability</h3>
                <p className="mt-2 text-base text-gray-500">
                  Fabrications that withstand decades of heavy use
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
        </section>

        {/* our clients */}
        <section id="clients" className="relative min-h-screen flex items-center py-20 overflow-hidden">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="/bgvideo.mp4" type="video/mp4" />
          </video>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          
          {/* Content Container */}
          <div className="relative z-20 text-center px-4 w-full max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-16">
              Our <span className="text-yellow-600">Valued Clients</span>
            </h2>
            
            {/* Clients Grid with Avatar-Style Logos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 px-4">
              {/* Client 1 - Wakalucy */}
              <div className="group flex flex-col items-center">
                <div className="w-40 h-40 sm:w-52 sm:h-52 mb-6 flex items-center justify-center p-1 rounded-full border-4 border-white/20 group-hover:border-yellow-400 transition-all duration-500 shadow-2xl bg-white/5 backdrop-blur-sm transform group-hover:scale-105">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/10">
                    <Image 
                      src="/wakalucy.png" 
                      alt="Wakalucy Fish Palace Logo"
                      width={208}
                      height={208}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Wakalucy Fish Palace</h3>
                <p className="text-white/80 mt-2 text-base sm:text-lg">Food Industry</p>
              </div>
              
              {/* Client 2 - Homeway */}
              <div className="group flex flex-col items-center">
                <div className="w-40 h-40 sm:w-52 sm:h-52 mb-6 flex items-center justify-center p-1 rounded-full border-4 border-white/20 group-hover:border-yellow-400 transition-all duration-500 shadow-2xl bg-white/5 backdrop-blur-sm transform group-hover:scale-105">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/10">
                    <Image 
                      src="/homeawaysupa.png" 
                      alt="Homeway Supermarkets Logo"
                      width={208}
                      height={208}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Homeway Supermarkets</h3>
                <p className="text-white/80 mt-2 text-base sm:text-lg">Retail Chain</p>
              </div>
              
              {/* Client 3 - Bee Care */}
              <div className="group flex flex-col items-center">
                <div className="w-40 h-40 sm:w-52 sm:h-52 mb-6 flex items-center justify-center p-1 rounded-full border-4 border-white/20 group-hover:border-yellow-400 transition-all duration-500 shadow-2xl bg-white/5 backdrop-blur-sm transform group-hover:scale-105">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/10">
                    <Image 
                      src="/beecare-logo.png" 
                      alt="Bee Care Apiaries Logo"
                      width={208}
                      height={208}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Bee Care Apiaries</h3>
                <p className="text-white/80 mt-2 text-base sm:text-lg">Agriculture</p>
              </div>
              
              {/* Client 4 - Amalia */}
              <div className="group flex flex-col items-center">
                <div className="w-40 h-40 sm:w-52 sm:h-52 mb-6 flex items-center justify-center p-1 rounded-full border-4 border-white/20 group-hover:border-yellow-400 transition-all duration-500 shadow-2xl bg-white/5 backdrop-blur-sm transform group-hover:scale-105">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/10">
                    <Image 
                      src="/animila.png" 
                      alt="Amalia Homes Logo"
                      width={208}
                      height={208}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Amalia Homes</h3>
                <p className="text-white/80 mt-2 text-base sm:text-lg">Real Estate</p>
              </div>
            </div>
            
            <div className="mt-16 sm:mt-20 px-4">
              <a href="#contact" className="inline-block bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl text-lg sm:text-xl transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                Become Our Client
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}