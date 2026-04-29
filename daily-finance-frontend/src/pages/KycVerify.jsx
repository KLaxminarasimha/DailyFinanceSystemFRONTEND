import React, { useState } from "react";
import { verifyKycOtp } from "../api/customerApi";

function KycVerify() {
  const [customerId, setCustomerId] = useState("");
  const [otp, setOtp] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await verifyKycOtp(customerId, otp);
      alert(response.data || "KYC verified");
    } catch (error) {
      alert(error.response?.data?.message || "KYC verification failed");
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Verify KYC OTP</h2>

      <form onSubmit={submit}>
        <input
          placeholder="Customer ID"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
          required
        />

        <input
          placeholder="OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />

        <button type="submit">Verify KYC</button>
      </form>
    </div>
  );
}

export default KycVerify;