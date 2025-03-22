import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Payment = () => {
  //Feedback States
  const { dog } = useLocation().state || {};
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("amount", dog.adoption_cost);
      formData.append("phone", phone);

      //Posting the data
      const response = axios.post(
        "https://emmanuelkimani.pythonanywhere.com/api/mpesa_payment",
        formData
      );
    } catch (error) {}
  };
  return (
    <div className="row justify-content-center mt-2">
      <h1 className="m-2">Make Mpesa Payment - LIPA NA MPESA</h1>
      <div className="card shadow col-md-6 p-2">
        <h1 className="text-success">LIPA NA MPESA</h1>
        <h3 className="text-secondary">{dog.dog_name}</h3>
        <p className="text-danger">Ksh {dog.adoption_cost}</p>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="tel"
            placeholder="Enter 254*********"
            className="form-control"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <br />
          <button
            type="submit"
            className="custom-button btn btn-primary btn-lg"
          >
            Adopt Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
