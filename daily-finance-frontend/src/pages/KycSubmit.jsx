import React, { useState } from "react";
import { submitKyc } from "../api/customerApi";

function KycSubmit() {
  const [customerId, setCustomerId] = useState("");

  const [form, setForm] = useState({
    aadhar: "",
    pan: "",
    email: "",
    phone: "",
    ifsc: "",
    accountNumber: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      await submitKyc(customerId, form);
      alert("KYC submitted. OTP generated.");
    } catch (error) {
      alert(error.response?.data?.message || "Error submitting KYC");
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Submit KYC</h2>

      <form onSubmit={submit}>
        <input
          placeholder="Customer ID"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
          required
        />

        <input name="aadhar" placeholder="Aadhar" onChange={handleChange} required />
        <input name="pan" placeholder="PAN" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="phone" placeholder="Phone" onChange={handleChange} required />
        <input name="ifsc" placeholder="IFSC" onChange={handleChange} required />
        <input name="accountNumber" placeholder="Account Number" onChange={handleChange} required />

        <button type="submit">Submit KYC</button>
      </form>
    </div>
  );
}

export default KycSubmit;