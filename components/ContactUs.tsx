'use client';
import React, { useRef, useState } from "react";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";
import Image from "next/image";


export default function ContactUs() {
  return (
    <>
    
      <div className="relative w-full">
            {/* Desktop Image (Full Width, Cropped for Cover Look) */}
            <div className="hidden sm:block mt-16">
              <Image
                src="/contactusimg.png"
                alt="Hero"
                width={1920}
                height={962}
                className="w-full h-auto object-cover"
              />
            </div>
      
            {/* Mobile Image (Show Full Image Without Cropping) */}
            <div className="sm:hidden relative h-[300px] mt-4">
              <Image
                src="/contactusimg.png"
                alt="Hero Mobile"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <section id='contact' className="bg-white py-14 px-4 md:px-10">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
        <p className="text-gray-600 mt-2">We’d love to hear from you! Fill out the form below to get in touch.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <form  className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="from_email"
                  placeholder="you@example.com"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Mobile No</label>
              <input
                type="number"
                name="form_no"
                placeholder="+91 9898989898"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Write your message..."
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md transition duration-300"
            >
              Send Message
            </button>

            
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">Our Office</h3>
            <p className="text-gray-600 mt-2">
              SNO.32/5, SaI AANGAN, NAVECHA ROAD, Gangotri Nagar, PIMPLE GURAV, Pimpri-Chinchwad, Maharashtra 411061
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800">Contact Information</h3>
            <ul className="space-y-2 text-gray-600">
              <li><strong>Phone:</strong> +91 7559337386</li>
              <li><strong>Email:</strong> <a href="mailto:boltcarepharma@gmail.com" className="text-blue-600">boltcarepharma@gmail.com</a></li>
              <li><strong>Support:</strong> <a href="mailto:boltcarepharma@gmail.com" className="text-blue-600">boltcarepharma@gmail.com</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800">Follow Us</h3>
            <div className="flex space-x-4 text-blue-600 mt-2 text-xl">
              <a href="https://www.facebook.com/profile.php?id=61574585492384" target='_blank' aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://wa.me/918806112331" aria-label="WhatsApp" target='_blank'><FaWhatsapp /></a>
              <a href="https://www.instagram.com/arp_digital_solutions/" aria-label="Instagram" target='_blank'><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="w-full h-[400px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.683567861013!2d73.81433657501486!3d18.588299382518468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b97b37007f19%3A0xcc24328709fa368e!2sBoltcare%20Pharma%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1746816761337!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

 
    </>
  );
};


