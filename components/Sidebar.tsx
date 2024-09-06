// components/Sidebar.tsx
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-lg font-bold">Rikkei Academy</div>
      <nav className="flex flex-col mt-4">
        <Link href="/admin/dashboard" legacyBehavior>
          <a className="py-2 px-4 hover:bg-gray-700">Dashboard</a>
        </Link>
        <Link href="/admin/products" legacyBehavior>
          <a className="py-2 px-4 hover:bg-gray-700">Products</a>
        </Link>
        <Link href="/admin/orders" legacyBehavior>
          <a className="py-2 px-4 hover:bg-gray-700">Orders</a>
        </Link>
        <Link href="/admin/customers" legacyBehavior>
          <a className="py-2 px-4 hover:bg-gray-700">Customers</a>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
