"use client"
import { FaCode, FaPaintBrush } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';

const Services1 = () => {
  return (
    <div className="bg-white text-white py-16">
      <div className="text-center text-4xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 animate__animated animate__fadeIn">
        What I Done For You
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 sm:px-12 lg:px-24 animate__animated animate__fadeIn">

        {/* UI/UX Design */}
        <div className="bg-white text-black rounded-lg p-6 shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105 hover:bg-gradient-to-r from-purple-600 to-pink-600 hover:text-white hover:rotate-3">
          <div className="flex items-center justify-center mb-4 text-5xl">
            <MdDesignServices />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold">UI/UX Design</h3>
            <p className="text-lg text-black mt-2 group-hover:text-white">
              Designing intuitive UI/UX interfaces, focusing on user-centric design principles to optimize usability and satisfaction.
            </p>
          </div>
        </div>

        {/* Web Developer */}
        <div className="bg-white text-black rounded-lg p-6 shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105 hover:bg-gradient-to-r from-purple-600 to-pink-600 hover:text-white hover:rotate-3">
          <div className="flex items-center justify-center mb-4 text-5xl">
            <FaCode />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold">Web Developer</h3>
            <p className="text-lg text-black mt-2 group-hover:text-white">
              Crafting digital experiences, one line of code at a time, to shape the future of the web.
            </p>
          </div>
        </div>

        {/* Web Design */}
        <div className="bg-white text-black rounded-lg p-6 shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105 hover:bg-gradient-to-r from-purple-600 to-pink-600 hover:text-white hover:rotate-3">
          <div className="flex items-center justify-center mb-4 text-5xl">
            <FaPaintBrush />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold">Web Design</h3>
            <p className="text-lg text-black mt-2 group-hover:text-white">
              Transforming visions into captivating digital landscapes, where creativity meets functionality.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services1;
