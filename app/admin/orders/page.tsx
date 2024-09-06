// app/admin/orders.tsx
import Layout from '../layout';

const Orders = () => {
  const orders = [
    { id: 'UTG001', product: 'MacBook Pro 15\'', status: 'New Order', price: 2999, date: '20 Jan, 2022' },
    { id: 'UTG002', product: 'MacBook Pro 13\'', status: 'Confirmed', price: 2999, date: '22 Feb, 2022' },
  ];

  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold">Orders</h3>
        <table className="min-w-full table-auto mt-4">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product</th>
              <th>Status</th>
              <th>Total Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.product}</td>
                <td>{order.status}</td>
                <td>${order.price}</td>
                <td>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
