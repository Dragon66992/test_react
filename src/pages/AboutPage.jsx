import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function AboutPage() {
  return (
    <>
      <section className='max-w-full sm:max-w-[90%] mx-auto'>

        <Header />

        <div>

          <div className="min-h-screen py-10 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-primary mb-6">About Us</h1>
              <p className="text-lg text-gray-700 mb-4">
                Welcome to <span className="font-semibold">Original & Clone Perfume Store</span>, your trusted destination for premium and affordable fragrances. Whether you’re looking for authentic designer scents or high-quality alternatives, we’ve got you covered.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                {/* Original Perfumes Section */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-semibold text-secondary mb-4">Original Perfumes</h2>
                  <p className="text-gray-600">
                    Discover our collection of 100% authentic fragrances from world-renowned brands. Each bottle is carefully sourced to ensure quality and authenticity, making it the perfect choice for true perfume enthusiasts.
                  </p>
                  <ul className="list-disc list-inside mt-4 text-gray-600">
                    <li>Guaranteed authenticity</li>
                    <li>Wide selection of designer brands</li>
                    <li>Luxury packaging</li>
                  </ul>
                </div>

                {/* Clone Perfumes Section */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-semibold text-secondary mb-4">Clone Perfumes</h2>
                  <p className="text-gray-600">
                    Enjoy the essence of luxury at a fraction of the price. Our clone perfumes are crafted to closely mimic the scent of high-end fragrances, providing an affordable alternative without compromising quality.
                  </p>
                  <ul className="list-disc list-inside mt-4 text-gray-600">
                    <li>Affordable and long-lasting</li>
                    <li>Inspired by iconic fragrances</li>
                    <li>High-quality ingredients</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary text-white rounded-lg p-6 mt-10">
                <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
                <p className="text-gray-100">
                  At Original & Clone Perfume Store, we are committed to delivering exceptional service and products to our customers. Whether you’re searching for your signature scent or exploring new aromas, we’re here to help you find the perfect match.
                </p>
              </div>
            </div>
          </div>

        </div>
        
      </section>

      <Footer />
    </>
  )
}

export default AboutPage