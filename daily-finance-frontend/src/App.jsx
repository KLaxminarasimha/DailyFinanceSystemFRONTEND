import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CustomerRegister from "./pages/CustomerRegister";
import VerifyOtp from "./pages/VerifyOtp";
import Login from "./pages/Login";
import CreateCustomer from "./pages/CreateCustomer";
import CustomersList from "./pages/CustomersList";
import AddEmployeeDetails from "./pages/AddEmployeeDetails";
import AddBusinessDetails from "./pages/AddBusinessDetails";
import AddGuarantor from "./pages/AddGuarantor";
import KycSubmit from "./pages/KycSubmit";
import KycVerify from "./pages/KycVerify";
import "./index.css";
import FundService from "./pages/FundService";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="card big-card">
          <h1>Daily Finance</h1>

          <nav>
            <Link to="/fund">Fund</Link>
            <Link to="/register">Register</Link>
            <Link to="/verify-otp">Verify OTP</Link>
            <Link to="/login">Login</Link>
            <Link to="/create-customer">Create Customer</Link>
            <Link to="/customers">Customers</Link>
            <Link to="/employee">Employee</Link>
            <Link to="/business">Business</Link>
            <Link to="/guarantor">Guarantor</Link>
            <Link to="/kyc">KYC</Link>
            <Link to="/kyc-verify">KYC Verify</Link>
          </nav>

          <Routes>
            <Route path="/fund" element={<FundService />} />
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<CustomerRegister />} />
            <Route path="/verify-otp" element={<VerifyOtp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-customer" element={<CreateCustomer />} />
            <Route path="/customers" element={<CustomersList />} />
            <Route path="/employee" element={<AddEmployeeDetails />} />
            <Route path="/business" element={<AddBusinessDetails />} />
            <Route path="/guarantor" element={<AddGuarantor />} />
            <Route path="/kyc" element={<KycSubmit />} />
            <Route path="/kyc-verify" element={<KycVerify />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;