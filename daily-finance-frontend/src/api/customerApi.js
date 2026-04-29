import axios from "axios";

const API = "http://localhost:9999/customers";

// Create customer
export const createCustomer = (data, userId) => {
  return axios.post(`${API}/profile`, data, {
    headers: {
      "X-USER-ID": userId,
    },
  });
};

// Get all customers
export const getAllCustomers = () => {
  return axios.get(API);
};

// Get customer by ID
export const getCustomerById = (id) => {
  return axios.get(`${API}/${id}`);
};

// Delete customer
export const deleteCustomer = (id) => {
  return axios.delete(`${API}/${id}`);
};

// Add employee details
export const addEmployeeDetails = (customerId, data) => {
  return axios.post(`${API}/${customerId}/employee`, data);
};

// Add business details
export const addBusinessDetails = (customerId, data) => {
  return axios.post(`${API}/${customerId}/business`, data);
};

// Add guarantor
export const addGuarantor = (customerId, data) => {
  return axios.post(`${API}/${customerId}/guarantor`, data);
};

// Submit KYC
export const submitKyc = (customerId, data) => {
  return axios.post(`${API}/${customerId}/kyc`, data);
};

// Verify KYC OTP
export const verifyKycOtp = (customerId, otp) => {
  return axios.post(`${API}/${customerId}/kyc/verify`, { otp });
};