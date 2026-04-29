import React, { useEffect, useState } from "react";
import { getAllCustomers, deleteCustomer } from "../api/customerApi";

function CustomersList() {
  const [customers, setCustomers] = useState([]);

  const loadCustomers = async () => {
    try {
      const response = await getAllCustomers();
      setCustomers(response.data);
    } catch (error) {
      alert("Error loading customers");
      console.log(error);
    }
  };

  useEffect(() => {
    loadCustomers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteCustomer(id);
      alert("Customer deleted");
      loadCustomers();
    } catch (error) {
      alert("Error deleting customer");
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Customers</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>User Type</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.firstName} {c.lastName}</td>
              <td>{c.userType}</td>
              <td>
                <button onClick={() => handleDelete(c.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomersList;