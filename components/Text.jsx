import React from 'react'
import about from '../public/images/background1.webp'
const Text = () => {
    return (
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute w-full h-full bg-cover bg-center bg-fixed opacity-80"
          style={{ backgroundImage: `url(${about.src})` }}
        ></div>
        <div className="text-center container mx-auto px-6 md:px-12 flex flex-col items-center p-10 mt-12 rounded-lg z-10">
          <h3 className="text-3xl sm:text-4xl font-bold text-pink-500">
            COMMITTED TO CREATING EXCEPTIONAL DIGITAL EXPERIENCES! 
          </h3>
          <p className="text-white mt-4 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Whether you're building your brand, designing a product, or developing a full-stack application, my portfolio reflects my commitment to quality and excellence. 
            I specialize in crafting tailored solutions that are not only functional but also provide a seamless user experience.
            With a passion for technology, I create clean, scalable, and user-centric designs to bring your ideas to life. Let’s build something extraordinary together!
          </p>
        </div>

      </section>
    )
}

export default Text
