import axios from "axios";

const API = "http://localhost:9999/fund";

export const getFundBalance = () => {
  return axios.get(`${API}/balance`);
};

export const loanDisbursement = (data) => {
  return axios.post(`${API}/loan`, data);
};

export const emiPayment = (data) => {
  return axios.post(`${API}/emi`, data);
};

export const addPenalty = (data) => {
  return axios.post(`${API}/penalty`, data);
};

export const addInterest = (data) => {
  return axios.post(`${API}/interest`, data);
};