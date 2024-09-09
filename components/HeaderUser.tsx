import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      {/* Phần trên cùng với số điện thoại hỗ trợ */}
      <div className="flex justify-end py-2 px-4 text-sm text-gray-600">
        <span>Hỗ trợ khách hàng: <a href="tel:19008079" className="font-bold text-yellow-600">1900 8079</a></span>
      </div>
      
      {/* Phần chính của header: Logo, Navigation, Search, Icons */}
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src="https://owen.cdn.vccloud.vn/static/version1724551346/frontend/Owen/owen2021/vi_VN/images/logo.svg" alt="Owen Logo" className="h-10" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <a href="#" className="hover:text-yellow-600">Hàng Mới <span className="text-red-500">HOT</span></a>
          <a href="#" className="hover:text-yellow-600">Áo</a>
          <a href="#" className="hover:text-yellow-600">Quần</a>
          <a href="#" className="hover:text-yellow-600">Phụ Kiện</a>
          <a href="#" className="hover:text-yellow-600">Giá Tốt</a>
          <a href="#" className="hover:text-yellow-600">Cửa Hàng</a>
        </nav>

        {/* Search Bar */}
        <div className="flex-grow hidden md:block relative mx-8">
          <input
            type="text"
            placeholder="Bạn tìm gì..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-yellow-600"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
          <span className="material-symbols-outlined">search</span>
          </button>
        </div>

        {/* Icons: Favorites, Account, Cart */}
        <div className="flex space-x-6">
          <a href="#" className="hover:text-yellow-600">
            <span className="material-symbols-outlined">favorite</span>
          </a>
          <a href="#" className="hover:text-yellow-600">
          <span className="material-symbols-outlined">person</span>
          </a>
          <a href="#" className="hover:text-yellow-600">
          <span className="material-symbols-outlined">local_mall</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
