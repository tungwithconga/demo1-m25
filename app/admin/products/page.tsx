// app/admin/products/page.tsx
import AdminLayout from '../layout';

const ProductsPage = () => {
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold">Products</h3>
        <table className="min-w-full table-auto mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Category</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>39842-231</td>
              <td>MacBook Pro 15'</td>
              <td>Available</td>
              <td>Laptops</td>
              <td>$2,999</td>
              <td>20 Jan, 2022</td>
            </tr>
            {/* Add more products here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsPage;
