import React from 'react';

const Categories: React.FC = () => {
  const categories = [
    { title: 'Sơ mi lịch lãm', image: 'https://owen.cdn.vccloud.vn/media/amasty/ampromobanners/Artboard_11-100_2808.jpg', link: '/so-mi' },
    { title: 'Quần tây hiện đại', image: 'https://owen.cdn.vccloud.vn/media/amasty/ampromobanners/Artboard_11_copy_2-100_2808.jpg', link: '/quan-tay' },
    { title: 'Polo trẻ trung', image: 'https://owen.cdn.vccloud.vn/media/amasty/ampromobanners/Artboard_11_copy-100_2808.jpg', link: '/polo' },
  ];

  return (
    <section className="grid grid-cols-3 gap-6 my-10 px-8">
      {categories.map((category) => (
        <div key={category.title} className="relative">
          <img src={category.image} alt={category.title} className="w-full h-[400px] object-cover" />
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-xl font-bold">{category.title}</h3>
            <a href={category.link} className="mt-4 inline-block px-6 py-2 bg-white text-black">
              Xem ngay
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Categories;
