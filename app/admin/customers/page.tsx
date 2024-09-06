// app/admin/customers.tsx
import Layout from '../layout';

const Customers = () => {
  const customers = [
    { id: '12542', name: 'Rikkei Academy', email: 'ra@rikkei.com', role: 'Admin', date: '20 Jan, 2022' },
    { id: '32423', name: 'User1', email: 'user1@gmail.com', role: 'User', date: '22 Feb, 2022' },
  ];

  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold">Customers</h3>
        <table className="min-w-full table-auto mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(customer => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.role}</td>
                <td>{customer.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
