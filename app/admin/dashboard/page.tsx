"use client";  // Đánh dấu đây là Client Component

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const DashboardPage = () => {
  // const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Total Sales</h3>
            <p className="mt-2 text-3xl font-bold">$9,328.55</p>
            <p className="text-green-500 mt-1">+15.6% from last week</p>
          </div>
          {/* Thêm các phần khác ở đây */}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
