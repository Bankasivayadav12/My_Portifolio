"use client"
import Head from 'next/head'

export default function EVCharging() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>EV Car Charging | Coffee and Cream by EvCafe</title>
      </Head>

      {/* Banner Section */}
      <header className="relative bg-cover bg-center h-80 pt-4" style={{ backgroundImage: "url('/images/evchargingcars2.gif')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-6 sm:px-12 lg:px-24">
          <h1 className="text-4xl font-bold text-white"></h1>
          <p className="mt-2 text-4xl">Recharge your EV while you enjoy delicious food and drinks!</p>
        </div>
      </header>

      {/* EV Car Charging Menu Section */}
      <main className="container mx-auto py-12 px-4">
        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-pink-800 mb-6">Our EV Car Charging Options</h2>
          <p className="text-lg text-gray-600 mb-8">
            Choose your EV type and find the best charging station suited to your car’s charging requirements.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Charging Option 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img 
                src="/images/evcharge.jpg" // Replace with an actual image for Level 1 Charging
                alt="Level 1 Charging" 
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Level 1 Charging - Standard EVs</h3>
              <p className="text-lg text-gray-600 mb-4">
                Ideal for standard electric vehicles. Charges your car overnight, perfect for daily commutes.
              </p>
              <ul className="text-lg text-gray-600">
                <li>Location: 2331 Statesville Ave, Charlotte, NC</li>
                <li>Availability: 24/7</li>
                <li>Charging Time: 6-8 hours</li>
              </ul>
              <p className="mt-4 text-xl font-semibold text-pink-600">$4.25</p>
            </div>

            {/* Charging Option 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img 
                src="/images/supercharging.jpeg" // Replace with an actual image for Level 2 Charging
                alt="Level 2 Charging" 
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Level 2 Charging - Fast Charging</h3>
              <p className="text-lg text-gray-600 mb-4">
                A faster alternative for electric vehicles, ideal for quick top-ups during your visit to our cafe.
              </p>
              <ul className="text-lg text-gray-600">
                <li>Location: 1234 Central Ave, Charlotte, NC</li>
                <li>Availability: 24/7</li>
                <li>Charging Time: 3-4 hours</li>
              </ul>
              <p className="mt-4 text-xl font-semibold text-pink-600">$6.50</p>
            </div>

            {/* Charging Option 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img 
                src="/images/fastcharging.jpeg" // Replace with an actual image for Level 3 Charging
                alt="Level 3 Charging" 
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Level 3 Charging - Supercharging</h3>
              <p className="text-lg text-gray-600 mb-4">
                For high-performance electric vehicles that need a rapid recharge. Great for long road trips.
              </p>
              <ul className="text-lg text-gray-600">
                <li>Location: 6789 South Blvd, Charlotte, NC</li>
                <li>Availability: 24/7</li>
                <li>Charging Time: 30-60 minutes</li>
              </ul>
              <p className="mt-4 text-xl font-semibold text-pink-600">$12.00</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
