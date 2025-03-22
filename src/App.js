import logo from "./logo.svg";
import "./App.css";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Adddog from "./Components/Adddog";
import Getdog from "./Components/Getdog";
import Notfound from "./Components/Notfound";
import Payment from "./Components/Payment";
// import pic1 from "./Shelter pictures/puppy.jpeg";
// import pic2 from "./Shelter pictures/puppy2.webp";
// import pic3 from "./Shelter pictures/dogs4.jpeg";
// import pic4 from "./Shelter pictures/dog8.jpeg";
// import pic5 from "./Shelter pictures/navdog.jpg"
import { Carousel } from "react-bootstrap";
import Home from "./Components/Home";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/home">
            <img src="static/image/navdog.jpg" alt="Logo" className="logo" />
          </Link>
          <Link to="/signup" className="links">
            Signup
          </Link>
          <Link to="/signin" className="links">
            Signin
          </Link>
          <Link to="/adddog" className="links">
            Add Dog
          </Link>
          <Link to="/getdog" className="links">
            Get Dog
          </Link>
        </nav>
        <header className="App-header">
          <h1>Dogs</h1>
        </header>
        <Carousel>
          <Carousel.Item>
            <img
              src="static/image/dog1.jpeg"
              alt="first slide"
              style={{ width: "100%", height: "600px", objectFit: "cover" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="static/image/dog1.jpeg"
              alt="second slide"
              style={{ width: "100%", height: "600px", objectFit: "cover" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="static/image/dog1.jpeg"
              alt="third slide"
              style={{ width: "100%", height: "600px", objectFit: "cover" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="static/image/dog1.jpeg"
              alt="fourth slide"
              style={{ width: "100%", height: "600px", objectFit: "cover" }}
            />
          </Carousel.Item>
        </Carousel>

        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/adddog" element={<Adddog />}></Route>
          <Route path="/getdog" element={<Getdog />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="*" element={<Notfound />}></Route>
          <Route path="/" element={<Getdog />}></Route>
        </Routes>
      </BrowserRouter>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          {/* Footer Title */}
          <h2 className="footer-title">
            Visit Us Again at Kimani's Animal Shelter
          </h2>

          {/* Mission Statement */}
          <p className="footer-mission">
            At Kimani's Animal Shelter, we rescue, care for, and find loving
            homes for abandoned animals. Join us in making a difference.
          </p>

          {/* Social Media Links */}
          <div className="social-media">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="social-icon" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icon" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <p className="contact-text">
              <span role="img" aria-label="phone">
                📞
              </span>{" "}
              Call us at: <a href="tel:+1234567890">+1 234 567 890</a>
            </p>
          </div>

          {/* Shelter Cards Section */}
          <div className="shelter-cards">
            <div className="card">
              <h3>Adopt a Dog</h3>
              <p>
                Give a furry friend a forever home! Your support helps us
                provide shelter and care for abandoned dogs.
              </p>
              <a href="/adopt" className="card-button">
                Adopt Now
              </a>
            </div>
            <div className="card">
              <h3>Donate</h3>
              <p>
                Your donations help us keep the shelter running, provide food,
                medicine, and love to the animals.
              </p>
              <a href="/donate" className="card-button">
                Donate Now
              </a>
            </div>
            <div className="card">
              <h3>Volunteer</h3>
              <p>
                Join us as a volunteer and make a direct impact on the lives of
                the animals. Your time matters!
              </p>
              <a href="/volunteer" className="card-button">
                Volunteer Now
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
