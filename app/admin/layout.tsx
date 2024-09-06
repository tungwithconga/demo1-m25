// app/admin/layout.tsx
import { ReactNode } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <main className="p-6 flex-grow bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
