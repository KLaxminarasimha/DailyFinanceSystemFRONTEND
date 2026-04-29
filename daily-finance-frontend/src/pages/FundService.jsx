import React, { useEffect, useState } from "react";
import {
  getFundBalance,
  loanDisbursement,
  emiPayment,
  addPenalty,
  addInterest,
} from "../api/fundApi";

function FundService() {
  const [balance, setBalance] = useState(null);

  const [form, setForm] = useState({
    amount: "",
    referenceId: "",
  });

  const loadBalance = async () => {
    try {
      const response = await getFundBalance();
      setBalance(response.data);
    } catch (error) {
      alert(error.response?.data?.message || "Error loading balance");
    }
  };

  useEffect(() => {
    loadBalance();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitAction = async (type) => {
    const data = {
      amount: form.amount,
      referenceId: form.referenceId,
    };

    try {
      if (type === "loan") await loanDisbursement(data);
      if (type === "emi") await emiPayment(data);
      if (type === "penalty") await addPenalty(data);
      if (type === "interest") await addInterest(data);

      alert("Fund transaction successful");
      setForm({ amount: "", referenceId: "" });
      loadBalance();
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || error.response?.data || "Something went wrong");
    }
  };

  return (
    <div>
      <h2>Fund Service</h2>

      <div className="balance-box">
        <p>Fund ID: {balance?.id || "-"}</p>
        <h3>Balance: ₹ {balance?.balance || "0"}</h3>
        <button onClick={loadBalance}>Refresh Balance</button>
      </div>

      <form>
        <input
          name="amount"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
          required
        />

        <input
          name="referenceId"
          placeholder="Reference ID / Loan ID"
          value={form.referenceId}
          onChange={handleChange}
          required
        />

        <button type="button" onClick={() => submitAction("loan")}>
          Loan Disbursement
        </button>

        <button type="button" onClick={() => submitAction("emi")}>
          EMI Payment
        </button>

        <button type="button" onClick={() => submitAction("penalty")}>
          Add Penalty
        </button>

        <button type="button" onClick={() => submitAction("interest")}>
          Add Interest
        </button>
      </form>
    </div>
  );
}

export default FundService;