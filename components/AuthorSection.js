import React from 'react';

function AuthorSection() {
  return (
    <section className="bg-gray-100 text-gray-800">
      <div className="container mx-auto py-12 px-6">
        <div className="flex items-center mb-8">
          <img
            src="/author-photo.jpg"
            alt="Author"
            className="w-20 h-20 rounded-full mr-6"
          />
          <div>
            <h2 className="text-2xl font-bold">Jane Doe</h2>
            <p className="text-gray-600">Author, Writer, Storyteller</p>
          </div>
        </div>
        <p className="text-xl mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula
          nibh quis lectus cursus, at tincidunt arcu pellentesque. Nam vulputate
          urna quis lobortis malesuada.
        </p>
        <a
          href="#"
          className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
        >
          Read More
        </a>
      </div>
    </section>
  );
}

export default AuthorSection;
