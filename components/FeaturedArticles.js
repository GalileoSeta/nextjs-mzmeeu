import React from 'react';
import CardArticle from './CardArticle';

function FeaturedArticles() {
  return (
    <section className="bg-gray-200 text-gray-800">
      <div className="container mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Render the featured articles */}
          <CardArticle />
          <CardArticle />
          <CardArticle />
          {/* Repeat the above structure for other featured articles */}
        </div>
      </div>
    </section>
  );
}

export default FeaturedArticles;
