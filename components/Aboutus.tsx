import Image from 'next/image'
import React from 'react'
import { Bookmark, BarChart, User } from 'lucide-react';

const AboutUs = () => {
  return (
    <>
    <section id='about' className="pt-48 md:pt-10 px-4 md:px-18 bg-white">
      {/* Centered Title */}
      <div className="text-center -mt-[120px] md:mt-0 mb-10">
        <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        
        {/* Text */}
        <div className="w-full md:w-1/2 space-y-4">
          <h3 className="text-2xl font-semibold text-gray-700">Building a Healthier Nation Through <br></br>Trusted Pharma Solutions</h3>
          <p className="text-gray-600 text-base leading-relaxed">
          We are a rising pharmaceutical company committed to building a healthier tomorrow by delivering quality, branded medicines to the Indian market. While we are new in name, our foundation is built on years of industry knowledge, compliance expertise, and a deep understanding of what healthcare providers and patients truly need.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
          Backed by WHO-GMP certified manufacturing partners, we bring to market a trusted line of safe, effective, and affordable medicines. From antibiotics and multivitamins to pain relievers and wellness products, our diverse product range is carefully curated to meet everyday health needs across multiple therapeutic areas.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
          Our goal is simple—to make healthcare more accessible and reliable. By bridging the gap between manufacturing excellence and market availability, we ensure that quality medicines reach the people who need them most, on time and at the right value.
          </p>

          <button className="bg-gray-200 text-black px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300">
  Learn More
</button>



        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 h-[420px] relative">
  <Image 
    src="/boltcareabout.jpg"
    alt="About Us"
    fill
    className="rounded-xl object-cover"
  />
</div>

      </div>

    </section>


    <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Feature 1 */}
        <div className="text-center md:text-left">
          <div className="w-14 h-14 mx-auto md:mx-0 mb-4 flex items-center justify-center bg-[#001428] rounded-full">
            <Bookmark className="text-white" size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Experience and Expertise</h3>
          <p className="text-gray-600">
          Backed by over a decade of industry expertise, Boltcare Pharma is dedicated to delivering innovative healthcare solutions with a strong focus on quality, reliability, and continuous advancement.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="text-center md:text-left">
          <div className="w-14 h-14 mx-auto md:mx-0 mb-4 flex items-center justify-center bg-[#001428] rounded-full">
            <BarChart className="text-white" size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Laboratory Analysis</h3>
          <p className="text-gray-600">
          Our advanced laboratories, equipped with cutting-edge technology, ensure precise testing and rigorous quality control—delivering pharmaceutical products you can rely on with confidence
          </p>
        </div>

        {/* Feature 3 */}
        <div className="text-center md:text-left">
          <div className="w-14 h-14 mx-auto md:mx-0 mb-4 flex items-center justify-center bg-[#001428] rounded-full">
            <User className="text-white" size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Customer Focused</h3>
          <p className="text-gray-600">
            At Boltcare Pharma, we prioritize understanding our customers' needs and strive to exceed their expectations by delivering personalized healthcare solutions that truly make a difference.
          </p>
        </div>
      </div>
    </section>


    </>
  )
}

export default AboutUs
