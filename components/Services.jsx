"use client";
import Head from 'next/head';
export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Building fast, responsive, and interactive websites with modern technologies.',
      icon: '🌐',
      link: '/services/web-development',
    },
    {
      id: 2,
      title: 'UI/UX Design',
      description: 'Creating user-friendly interfaces that ensure a seamless experience.',
      icon: '🎨',
      link: '/services/ui-ux-design',
    },
    {
      id: 3,
      title: 'Backend Development',
      description: 'Developing scalable and secure backends to power your web applications.',
      icon: '⚙️',
      link: '/services/backend-development',
    },
    {
      id: 4,
      title: 'Mobile App Development',
      description: 'Building cross-platform mobile apps with smooth user experiences.',
      icon: '📱',
      link: '/services/mobile-app-development',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Services | Portfolio</title>
      </Head>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-extrabold tracking-wide">Services I Offer</h1>
          <p className="mt-6 text-2xl font-medium">Transforming ideas into digital solutions.</p>
        </div>
      </header>

      {/* Services Section */}
      <main className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative bg-white shadow-xl rounded-lg overflow-hidden group hover:scale-105 transition-all duration-300"
            >
              {/* Service Icon */}
              <div className="absolute top-4 left-4 p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-4xl">
                {service.icon}
              </div>

              {/* Service Content */}
              <div className="p-8">
                <h3 className="text-3xl font-semibold text-gray-800">{service.title}</h3>
                <p className="mt-4 text-lg text-gray-600">{service.description}</p>

                <div className="mt-6 text-center">
                  <a
                    href={service.link}
                    className="inline-block bg-pink-500 text-white py-2 px-6 rounded-md hover:bg-pink-600 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
