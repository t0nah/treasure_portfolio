import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="h-screen flex items-center justify-center bg-gradient-to-bl from-gray-900 via-purple-800 to-black relative overflow-hidden"
    >
      {/* Subtle Animated Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-20 pointer-events-none animate-pulse"></div>

      <div className="container mx-auto text-center px-6 relative z-10">
        {/*Heading */}
        <h1
          style={{ fontFamily: "Neue Power, sans-serif" }}
          className="text-5xl md:text-8xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gold via-pink-500 to-teal-300 mb-4 tracking-wider uppercase animate-glow"
        >
          Hey, I’m Treasure
        </h1>

        {/*  Subtext */}
        <p className="text-lg md:text-2xl text-gray-200 font-light mb-10 italic max-w-3xl mx-auto leading-relaxed">
          I design and develop high-performance web experiences
        </p>

        {/* Call to Action */}
        <a
          href="#projects"
          className="inline-block bg-gradient-to-r from-pink-500 via-purple-600 to-gold px-12 py-5 text-white font-medium rounded-full shadow-2xl hover:shadow-glow hover:scale-110 transition-transform duration-500 ease-out transform uppercase tracking-wider"
        >
          Explore My Work
        </a>
      </div>

      {/* Decorative Glow Orbs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gold rounded-full filter blur-2xl opacity-30 animate-float"></div>
      <div className="absolute top-1/3 left-1/2 w-24 h-24 bg-teal-300 rounded-full filter blur-xl opacity-25 animate-float"></div>
    </section>
  );
};

export default About;
