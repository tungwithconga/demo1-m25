import React from 'react';

const Categories: React.FC = () => {
  const categories = [
    {
      image: 'https://owen.cdn.vccloud.vn/media/amasty/ampromobanners/Artboard_11-100_2808.jpg',
      link: '/so-mi',
    },
    {
      image: 'https://owen.cdn.vccloud.vn/media/amasty/ampromobanners/Artboard_11_copy_2-100_2808.jpg',
      link: '/quan-tay',
    },
    {
      image: 'https://owen.cdn.vccloud.vn/media/amasty/ampromobanners/Artboard_11_copy-100_2808.jpg',
      link: '/polo',
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 px-8">
      {categories.map((category) => (
        <div  className="relative group overflow-hidden rounded-lg shadow-lg">
          {/* Hình ảnh */}
          <img
            src={category.image}
            className="w-full h-[450px] object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
          {/* Nội dung */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-6">
            <h3 className="text-xl font-bold text-white"></h3>
            <a
              href={category.link}
              className="mt-4 inline-block px-6 py-2 text-black font-semibold rounded-lg transition-colors duration-300 hover:bg-gray-200"
            >
            </a>
          </div>

          {/* Hiệu ứng overlay khi hover */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
        </div>
      ))}
    </section>
  );
};

export default Categories;
