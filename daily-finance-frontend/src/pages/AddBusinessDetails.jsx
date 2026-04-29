import React, { useState } from "react";
import { addBusinessDetails } from "../api/customerApi";

function AddBusinessDetails() {
  const [customerId, setCustomerId] = useState("");

  const [form, setForm] = useState({
    businessName: "",
    businessType: "",
    gstNumber: "",
    monthlyIncome: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      await addBusinessDetails(customerId, form);
      alert("Business details added");
    } catch (error) {
      alert(error.response?.data?.message || "Error adding business details");
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Add Business Details</h2>

      <form onSubmit={submit}>
        <input
          placeholder="Customer ID"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
          required
        />

        <input name="businessName" placeholder="Business Name" onChange={handleChange} required />
        <input name="businessType" placeholder="Business Type" onChange={handleChange} required />
        <input name="gstNumber" placeholder="GST Number" onChange={handleChange} required />
        <input name="monthlyIncome" placeholder="Monthly Income" onChange={handleChange} required />

        <button type="submit">Save Business</button>
      </form>
    </div>
  );
}

export default AddBusinessDetails;