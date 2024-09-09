import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="border-t border-gray-700 mb-10"></div>
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Cột 1: Logo và Thông tin công ty */}
        <div>
          <img src="https://owen.cdn.vccloud.vn/static/version1725854603/frontend/Owen/owen2021/vi_VN/images/logo-footer.svg" alt="Owen Logo" className="h-10 mb-4" />
          <p className="text-gray-400">CÔNG TY CỔ PHẦN THỜI TRANG KOWIL VIỆT NAM</p>
          <p className="mt-2 text-gray-400">
            Hotline: <a href="tel:19008079" className="font-bold text-yellow-500">1900 8079</a>
          </p>
          <p className="text-gray-400">8:30 - 19:00 tất cả các ngày trong tuần.</p>
          <p className="mt-4 text-gray-400">
            <strong>VP Phía Bắc:</strong> 10B,Ngách 106,Ngõ Xã Đàn 2,Nam Đồng,Đống Đa, Hà Nội.
          </p>
        </div>

        {/* Cột 2: Giới thiệu Owen */}
        <div>
          <h3 className="font-bold text-white mb-4">GIỚI THIỆU OWEN</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-yellow-500">Giới thiệu</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-500">Blog</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-500">Hệ thống cửa hàng</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-500">Liên hệ với Owen</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-500">Chính sách bảo mật</a></li>
          </ul>
        </div>

        {/* Cột 3: Hỗ trợ khách hàng */}
        <div>
          <h3 className="font-bold text-white mb-4">HỖ TRỢ KHÁCH HÀNG</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-yellow-500">Hỏi đáp</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-500">Chính sách vận chuyển</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-500">Hướng dẫn chọn kích cỡ</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-500">Hướng dẫn thanh toán</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-500">Quy định đổi hàng</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-500">Hướng dẫn mua hàng</a></li>
          </ul>
        </div>

        {/* Cột 4: Kết nối và Phương thức thanh toán */}
        <div>
          <h3 className="font-bold text-white mb-4">KẾT NỐI</h3>
          <div className="flex space-x-4 mb-6">
            <a href="#" className="hover:text-yellow-500">
            <i className="fa-brands fa-square-facebook"></i>
            </a>
            <a href="#" className="hover:text-yellow-500">
            <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-yellow-500">
            <i className="fa-brands fa-youtube"></i>
            </a>
          </div>

          <h3 className="font-bold text-white mb-4">PHƯƠNG THỨC THANH TOÁN</h3>
          <div className="flex space-x-4">
            <img src="https://owen.cdn.vccloud.vn/static/version1725854603/frontend/Owen/owen2021/vi_VN/images/pay.png" alt="Visa" className="h-8" />
            <img src="https://owen.cdn.vccloud.vn/static/version1725854603/frontend/Owen/owen2021/vi_VN/images/pay.png" alt="MasterCard" className="h-8" />
            <img src="https://owen.cdn.vccloud.vn/static/version1725854603/frontend/Owen/owen2021/vi_VN/images/pay.png" alt="Internet Banking" className="h-8" />
          </div>
        </div>
      </div>

      {/* Biểu tượng Zalo */}
      <div className="fixed bottom-4 right-4">
        <a href="#" className="hover:opacity-75">
          <img src="/path-to-zalo-icon.png" alt="Zalo" className="h-12" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
