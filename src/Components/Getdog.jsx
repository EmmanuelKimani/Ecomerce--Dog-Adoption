import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Getdog = () => {
  const [dog, setDog] = useState([]);
  const img_url = "https://emmanuelkimani.pythonanywhere.com/static/images/";
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const [filtereddog, setFilteredDogs] = useState([]); // Filtered data
  const [searchQuery, setSearchQuery] = useState(""); // Search input

  const getDog = async () => {
    setLoading("Please Wait...");
    try {
      const response = await axios.get(
        "https://emmanuelkimani.pythonanywhere.com/api/dog_details"
      );
      setLoading("");
      setDog(response.data.Dogs);
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  useEffect(() => {
    getDog();
  }, []);

  useEffect(() => {
    if (!dog) return; // Prevent errors if dogs is undefined

    const filtered = dog.filter(
      (dog) =>
        dog.dog_size.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dog.dog_breed.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredDogs(filtered);
  }, [searchQuery, dog]);

  return (
    <div className="container-fluid">
      <h1 className="text-center my-4">Find a Dog</h1>
      <div className="mb-4 text-center">
        <input
          type="text"
          className="form-control shadow-sm p-2"
          placeholder="Search breed/size..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ maxWidth: "400px", margin: "0 auto" }} // Center the search bar
        />
      </div>
      {loading && <div>Loading...</div>}
      {error && <div className="text-danger">{error}</div>}

      <div className="row">
        {filtereddog?.map((dog, index) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 mt-4"
            key={index}
            style={{ display: "flex", justifyContent: "center" }} // Centering the cards
          >
            <div className="card shadow p-2" style={{ width: "100%" }}>
              <img
                src={img_url + dog.dog_photo}
                alt={dog.dog_name}
                className="card-img-top"
                style={{
                  height: "200px",
                  objectFit: "cover", // Make the image fit the card
                }}
              />
              <div className="card-body">
                <h5 className="mt-2">{dog.dog_name}</h5>
                <p className="text-muted">{dog.dog_gender}</p>
                <b className="text-warning">{dog.dog_age}</b>
                <p className="text-muted">{dog.dog_size}</p>
                <p className="text-muted">Ksh. {dog.adoption_cost}</p>
                <p className="text-muted">{dog.dog_breed}</p>
                <br />
                <button
                  className="btn btn-primary mt-2 w-100 custom-button"
                  onClick={() => {
                    navigate("/payment", { state: { dog } });
                  }}
                >
                  Show Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Getdog;
