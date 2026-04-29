import React, { useState } from "react";
import { addGuarantor } from "../api/customerApi";

function AddGuarantor() {
  const [customerId, setCustomerId] = useState("");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    pan: "",
    relation: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      await addGuarantor(customerId, form);
      alert("Guarantor added");
    } catch (error) {
      alert(error.response?.data?.message || "Error adding guarantor");
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Add Guarantor</h2>

      <form onSubmit={submit}>
        <input
          placeholder="Customer ID"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
          required
        />

        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="phone" placeholder="Phone" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="pan" placeholder="PAN" onChange={handleChange} required />
        <input name="relation" placeholder="Relation" onChange={handleChange} required />
        <input name="address" placeholder="Address" onChange={handleChange} required />

        <button type="submit">Save Guarantor</button>
      </form>
    </div>
  );
}

export default AddGuarantor;