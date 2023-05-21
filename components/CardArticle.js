import React from 'react';

function CardArticle() {
  return (
    <section className="bg-gray-100 text-gray-800">
      <div className="bg-white rounded-lg shadow-md p-6">
        <img
          src="https://d33wubrfki0l68.cloudfront.net/b9ace6d77b906317f3a8c581143cd1d00b4bdd24/e0a5b/8_assetsfull/4_cuentosindivual/29_bicletapinchada.jpg"
          alt="Article 1"
          className="w-full h-40 object-cover mb-4"
        />
        <h3 className="text-xl font-bold mb-2">Article 1 Title</h3>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis
          massa sed ullamcorper auctor.
        </p>
      </div>
    </section>
  );
}

export default CardArticle;
