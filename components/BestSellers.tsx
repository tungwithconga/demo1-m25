import React from 'react';

const BestSellers: React.FC = () => {
  const products = [
    { name: 'Áo Sơ Mi - AR240036D', price: '690,000₫', image: 'https://owen.cdn.vccloud.vn/media/catalog/product/cache/01755127bd64f5dde3182fd2f139143a/a/s/as240020d._2.jpg' },
    { name: 'Áo Sơ Mi - AS240020D', price: '650,000₫', image: 'https://owen.cdn.vccloud.vn/media/catalog/product/cache/01755127bd64f5dde3182fd2f139143a/a/r/ar40033dt._2.jpg' },
    { name: 'Áo Sơ Mi - AR240033DT', price: '690,000₫', image: 'https://owen.cdn.vccloud.vn/media/catalog/product/cache/01755127bd64f5dde3182fd2f139143a/a/s/as240047d._3_1.jpg' },
    { name: 'Áo Sơ Mi - AS240047D', price: '690,000₫', image: 'https://owen.cdn.vccloud.vn/media/catalog/product/cache/01755127bd64f5dde3182fd2f139143a/a/r/ar240018dt._2.jpg' },
  ];

  return (
    <section className="my-10 px-8">
      <h2 className="text-center text-2xl font-bold mb-8">Best Seller</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.name}
            className="text-center p-4 bg-white shadow-lg rounded-lg transition-transform duration-300 hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[300px] object-cover rounded-md"
            />
            <h4 className="mt-4 text-lg font-semibold">{product.name}</h4>
            <p className="text-lg text-gray-700">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
