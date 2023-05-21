import React from 'react';

function HeroSection() {
  return (
    <section className="bg-gray-100 text-gray-800">
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to the Writer's Blog
        </h1>
        <p className="text-xl mb-8">
          Explore the world of literature, culture, and stories.
        </p>
        <a
          href="#"
          className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
