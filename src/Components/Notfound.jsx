import React from "react";
import { useNavigate } from "react-router-dom";
import pic from "./error.avif";

const Notfound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <br />
      <br />
      <h1>The URL was not found</h1>
      <img src={pic} alt="" class="resize-image" />
      <button
        onClick={() => {
          navigate("/");
        }}
        className="btn btn-primary"
      >
        Return home
      </button>
    </div>
  );
};

export default Notfound;
