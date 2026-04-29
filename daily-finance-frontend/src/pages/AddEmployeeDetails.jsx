import React, { useState } from "react";
import { addEmployeeDetails } from "../api/customerApi";

function AddEmployeeDetails() {
  const [customerId, setCustomerId] = useState("");

  const [form, setForm] = useState({
    empId: "",
    companyName: "",
    ctc: "",
    monthlySalary: "",
    experience: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      await addEmployeeDetails(customerId, form);
      alert("Employee details added");
    } catch (error) {
      alert(error.response?.data?.message || "Error adding employee details");
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Add Employee Details</h2>

      <form onSubmit={submit}>
        <input
          placeholder="Customer ID"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
          required
        />

        <input name="empId" placeholder="Employee ID" onChange={handleChange} required />
        <input name="companyName" placeholder="Company Name" onChange={handleChange} required />
        <input name="ctc" placeholder="CTC" onChange={handleChange} />
        <input name="monthlySalary" placeholder="Monthly Salary" onChange={handleChange} required />
        <input name="experience" placeholder="Experience" onChange={handleChange} required />

        <button type="submit">Save Employee</button>
      </form>
    </div>
  );
}

export default AddEmployeeDetails;