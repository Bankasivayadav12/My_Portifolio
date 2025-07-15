"use client";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer"; // Add this for intersection observer

const About = () => {
  return (
    <section className="container mx-auto px-6 md:px-12 lg:px-32 py-16 bg-gray-50">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Hey, I’m  {""}
            <span className="text-blue-600 text-typing-animation">BANKA SIVA</span>
            <span className="text-purple-600 text-typing-animation">Full Stack Developer</span>
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            I specialize in crafting seamless user experiences through modern web technologies.
            Passionate about designing and building interactive websites and applications.
          </p>
          
        </div>
        {/* Profile Image */}
        <div className="relative">
          <Image
            src="/images/photo1.png"
            alt="Profile"
            width={320}
            height={320}
            className="rounded-full shadow-xl border-4 border-white"
          />
        </div>
      </div>

      {/* Expertise Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">My Expertise</h2>
        <ExpertiseSection />
      </div>
    </section>
  );
};

const ExpertiseSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {expertiseData.map((item, index) => (
        <div
          key={index}
          className={`bg-white shadow-lg rounded-xl p-6 border-l-8 transition-all duration-500 ease-in-out ${
            inView ? "animate-fadeInUp" : ""
          }`}
          style={{ borderColor: item.color }}
        >
          <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
          <p className="text-gray-600 mt-2">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

const expertiseData = [
  { title: "Frontend Development", description: "Crafting interactive UI using React, Next.js, and Tailwind CSS.", color: "#7C3AED" },
  { title: "Backend Development", description: "Building scalable APIs with Node.js, Express, and databases.", color: "#F59E0B" },
  { title: "UI/UX Design", description: "Designing intuitive and user-friendly interfaces.", color: "#EF4444" },
  { title: "Performance Optimization", description: "Enhancing speed, SEO, and best coding practices.", color: "#10B981" },
];

export default About;
