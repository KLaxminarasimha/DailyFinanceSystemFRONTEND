import React, { useState } from "react";
import { verifyOtp } from "../api/authApi";

function VerifyOtp() {
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [otp, setOtp] = useState("");

  const submit = async (e) => {
  e.preventDefault();

  const payload = {
    email: email.trim(),
    otp: otp.trim(),
  };

  console.log("Sending OTP payload:", payload);

  try {
    await verifyOtp(payload);

    alert("OTP verified successfully");
    window.location.href = "/login";
  } catch (error) {
    console.log("OTP error:", error);
    console.log("Backend error:", error.response?.data);

    alert("OTP may be verified. Please try login.");
    window.location.href = "/login";
  }
};

  return (
    <div>
      <h2>Verify OTP</h2>

      <form onSubmit={submit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />

        <button type="submit">Verify OTP</button>
      </form>
    </div>
  );
}

export default VerifyOtp;