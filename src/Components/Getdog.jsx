import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Getdog = () => {
  const [dog, setDog] = useState([]);
  const img_url = "https://emmanuelkimani.pythonanywhere.com/static/images/";
  const navigate = useNavigate("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const getDog = async () => {
    setLoading("Please Wait...");
    try {
      const response = await axios.get(
        "https://emmanuelkimani.pythonanywhere.com/api/dog_details"
      );
      setLoading("");
      setDog(response.data.Dogs);
      // console.log(response.data);
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };
  useEffect(() => {
    getDog();
  }, []);
  console.log(dog);
  return (
    <div className="container-fluid row">
      <h1>Find a Dog</h1>
      {loading}
      {error}

      {dog?.map((dog, index) => (
        <div className="col-md-3 mt-4" key={index}>
          <div className="card shadow p-2">
            <img src={img_url + dog.dog_photo} alt={dog.dog_photo} />
            <div className="card-body">
              <h5 className="mt-2">{dog.dog_name}</h5>
              <p className="text-muted">{dog.dog_gender}</p>
              <b className="text-warning">{dog.dog_age}</b>
              <p className="text-muted">{dog.dog_size}</p>
              <p className="text-muted">{dog.dog_photo}</p>
              <p className="text-muted">{dog.adoption_cost}</p>
              <br />
              <button
                className="btn btn-primary mt-2 w-40 custom-button"
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
  );
};

export default Getdog;
