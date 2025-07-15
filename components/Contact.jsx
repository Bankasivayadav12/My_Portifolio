"use client";

import Head from 'next/head';
import { useState } from 'react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Send the form data to the API
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true); // Show confirmation message on success
      } else {
        // Handle error
        alert('There was an issue submitting your form. Please try again.');
      }
    } catch (error) {
      alert('There was an error. Please try again.');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Contact Me | Portfolio</title>
      </Head>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-extrabold leading-tight tracking-wide">Hire Me</h1>
          <p className="mt-4 text-2xl font-medium">Let’s Grow Your Business Together!</p>
        </div>
      </header>

      {/* Main Contact Section */}
      <main className="container mx-auto py-12 px-4">
        {/* Hire Me Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Section: Text */}
          <div className="bg-blue-600 text-white rounded-xl p-8 shadow-xl">
            <h2 className="text-3xl font-semibold mb-4">Let’s Work Together</h2>
            <p className="text-lg mb-6">
              Let's grow your business with modern web development. I’m here to turn your ideas into reality.
            </p>
            <p className="font-semibold text-sm">Keep in Touch:</p>
            <div className="mt-4">
              <p className="text-sm">Email: <a href="mailto:example@info.com" className="underline">example@info.com</a></p>
              <p className="text-sm">Phone: <a href="tel:+910012345678" className="underline">+910-012345678</a></p>
            </div>
          </div>

          {/* Right Section: Form */}
          <div className="bg-white p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Me</h3>
            {!isSubmitted ? (
              <form onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 text-lg font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-6 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 text-lg font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-6 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 text-lg font-medium mb-2">
                    Your Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-6 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 text-lg font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    className="w-full px-6 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-orange-600 text-white text-lg font-semibold rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <div className="p-6 bg-green-100 text-center text-green-700 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Thank you for reaching out!</h3>
                <p>I'll get back to you as soon as possible.</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
