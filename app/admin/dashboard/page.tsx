// app/admin/dashboard/page.tsx
import AdminLayout from '../layout';

const DashboardPage = () => {
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Total Sales</h3>
          <p className="mt-2 text-3xl font-bold">$9,328.55</p>
          <p className="text-green-500 mt-1">+15.6% from last week</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Visitors</h3>
          <p className="mt-2 text-3xl font-bold">12,302</p>
          <p className="text-green-500 mt-1">+12.7% from last week</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Orders</h3>
          <p className="mt-2 text-3xl font-bold">963</p>
          <p className="text-red-500 mt-1">-12.7% from last week</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Top Categories</h3>
          <p className="mt-2 text-3xl font-bold">$6.2k</p>
          <p>Electronics, Laptops, Phones</p>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold">Sales Performance</h3>
        <div className="h-64">[Sales Performance Chart Placeholder]</div>
      </div>
    </div>
      
    
  );
};

export default DashboardPage;
