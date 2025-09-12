
"use client";

import Navbar from "@/components/Navbar/Navbar";
import Foooter from "@/components/Footer";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <section className="bg-gray-900 text-white py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-12">
            Welcome to <span className="text-blue-400 font-semibold">ZyperAI</span>, 
            your AI-powered assistant built to make life easier.  
            We believe in empowering users with cutting-edge technology 
            that helps with productivity, creativity, and learning.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto text-center md:text-left">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Our Mission</h2>
            <p className="text-gray-300">
              To create an AI platform that enables everyone to explore, learn,
              and build without boundaries — whether it is generating ideas,
              creating content, or boosting productivity.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-green-400">Our Vision</h2>
            <p className="text-gray-300">
              To become the go-to AI platform for students, developers,
              businesses, and everyday users, making advanced AI accessible
              and user-friendly for all.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-6xl mx-auto mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Meet the Team</h2>
          <p className="text-gray-400 mb-10">
            I am passionate group of developers, designers, and innovators building the future of AI.
          </p>

          <div className="w-full flex flex-col justify-center items-center align-center">
            <div className="bg-gray-800 w-[550px] p-6 rounded-lg shadow-lg">
              <div className="w-24 h-24 mx-auto bg-blue-600 rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold">Abhishek Bawane</h3>
              <p className="text-gray-400">Frontend Developer, Disgner</p>
            </div>
            <p>I am a passionate Frontend Developer with a strong focus on building responsive, user-friendly, 
    and visually appealing web applications. Skilled in HTML, CSS, JavaScript, and React, I enjoy 
    turning ideas into functional interfaces that enhance user experiences. I have experience working 
    with modern libraries, frameworks, and tools like Material UI, Tailwind CSS, and Bootstrap to create 
    clean and scalable designs. I also pay close attention to performance optimization and cross-device
    compatibility, ensuring that every project I build is both efficient and accessible. As a fresher, I am 
    eager to contribute my creativity and technical skills to real-world projects while continuously learning 
    and growing in the field of frontend development.</p>

          </div>
        </div>
      </section>
      <Foooter />
    </>
  );
}
