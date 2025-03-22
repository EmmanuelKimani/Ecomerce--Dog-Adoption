import React, { useState } from "react";
import axios from "axios";

const Adddog = () => {
  const [dog_name, setDogName] = useState("");
  const [dog_gender, setDogGender] = useState("");
  const [dog_age, setDogAge] = useState("");
  const [dog_size, setDogSize] = useState("");
  const [adoption_cost, setAdoptionCost] = useState("");
  const [dog_photo, setDogPhoto] = useState("");

  // Feedback System
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Fetching the data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading("Connecting...");
    try {
      const formData = new FormData();
      formData.append("dog_name", dog_name);
      formData.append("dog_gender", dog_gender);
      formData.append("dog_age", dog_age);
      formData.append("dog_photo", dog_photo);
      formData.append("dog_size", dog_size);
      formData.append("adoption_cost", adoption_cost);

      // Posting the data
      const response = await axios.post(
        "https://emmanuelkimani.pythonanywhere.com/api/add_dog",
        formData
      );
      setLoading("");
      setSuccess(response.data.Message);
      // Resetting the form
      setDogName("");
      setDogGender("");
      setDogAge("");
      setDogPhoto("");
      setDogSize("");
      setAdoptionCost("");
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  return (
    <div className="add-dog-container">
      <div className="card shadow-lg p-4 col-md-6">
        <h2 className="text-center text-primary mb-4">Add a Dog in Need</h2>

        {/* Feedback Messages */}
        {loading && <div className="alert alert-info">{loading}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        {/* Add Dog Form */}
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <input
              type="text"
              placeholder="Enter Dog Name"
              className="form-control form-control-lg input-style"
              value={dog_name}
              onChange={(e) => setDogName(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="text"
              placeholder="Enter Dog Gender"
              className="form-control form-control-lg input-style"
              value={dog_gender}
              onChange={(e) => setDogGender(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="number"
              placeholder="Enter Dog Age"
              className="form-control form-control-lg input-style"
              value={dog_age}
              onChange={(e) => setDogAge(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="text"
              placeholder="Enter Dog Size"
              className="form-control form-control-lg input-style"
              value={dog_size}
              onChange={(e) => setDogSize(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="number"
              placeholder="Enter Adoption Cost"
              className="form-control form-control-lg input-style"
              value={adoption_cost}
              onChange={(e) => setAdoptionCost(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="file"
              placeholder="Choose Photo"
              className="form-control form-control-lg input-style"
              onChange={(e) => setDogPhoto(e.target.files[0])}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg w-100 custom-button"
            disabled={loading}
          >
            {loading ? "Adding Dog..." : "Add Dog"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Adddog;
