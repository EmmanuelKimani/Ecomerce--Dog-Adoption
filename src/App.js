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
import About from "./Components/About"
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
        <div className="col-md-12">
          <nav className="navbar navbar-expand-md">
            <Link to="/home">
              <img src="static/image/navdog.jpg" alt="Logo" className="logo" />
            </Link>
            <Link to="/about" className="links">
              About Us
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
        </div>
        <header className="App-header">
          <h1>Welcome To KImani's Dog Shelter</h1>
        </header>
        <Carousel>
          <Carousel.Item>
            <img
              src="static/image/pup2.jpg"
              alt="first slide"
              style={{ width: "100%", height: "600px", objectFit: "cover" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="static/image/pup3.jpeg"
              alt="second slide"
              style={{ width: "100%", height: "600px", objectFit: "cover" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="static/image/pup4.jpeg"
              alt="third slide"
              style={{ width: "100%", height: "600px", objectFit: "cover" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="static/image/pup6.jpeg"
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
          <Route path="/about" element={<About />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="*" element={<Notfound />}></Route>
          <Route path="/" element={<Getdog />}></Route>
        </Routes>
      </BrowserRouter>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          {/* Footer Title */}
          <h2 className="footer-title bg-primary">
            Visit Us Again at Kimani's Animal Shelter
          </h2>

          {/* Mission Statement */}
          <p className="footer-mission">
            At Kimani's Animal Shelter, we rescue, care for, and find loving
            homes for abandoned dogs. Join us in making a difference.
          </p>

          {/* Social Media Links */}
          <div className="social-media">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-container"
            >
              <FaFacebook className="social-icon" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-container"
            >
              <FaInstagram className="social-icon" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-container"
            >
              <FaTwitter className="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-container"
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
              Call us at: <a href="tel:+1234567890">+254797566732</a>
            </p>
          </div>

          {/* Shelter Cards Section */}
          <div className="shelter-cards">
            {/* Existing Cards */}
            <div className="card">
              <h3>About Kimani's Shelter</h3>
              <p>
                Kimani's Animal Shelter has been dedicated to rescuing and
                caring for abandoned and mistreated animals since 2005. Our
                mission is to give every animal the love, care, and second
                chance they deserve.
              </p>
            </div>
            <div className="card">
              <h3>Success Stories</h3>
              <p>
                Countless animals have found their forever homes through
                Kimani's Animal Shelter. We are proud to share the stories of
                our happy adoptees and their new families.
              </p>
            </div>
            <div className="card">
              <h3>Our Team</h3>
              <p>
                Our team of dedicated staff and volunteers work tirelessly every
                day to care for the animals. From rescue operations to adoption
                events, we are all united by a common goal – to give abandoned
                animals a better life.
              </p>
            </div>
            <div className="card">
              <h3>Our Partners</h3>
              <p>
                We are proud to work with various local businesses and
                veterinarians who support our mission. Their contributions help
                us provide the best care for the animals in our shelter.
              </p>
            </div>

            {/* Additional Cards (Like 'Our Partners') */}
            <div className="card">
              <h3>Animal Care & Wellness</h3>
              <p>
                We provide medical care, vaccinations, and proper nutrition to
                ensure the well-being of every animal that comes into our
                shelter. Their health and happiness are our top priority.
              </p>
            </div>
            <div className="card">
              <h3>Adoption Process</h3>
              <p>
                Our adoption process is simple, transparent, and centered on
                finding the right match for both the animal and the adopter. We
                offer support throughout the transition.
              </p>
            </div>
            <div className="card">
              <h3>Events & Fundraisers</h3>
              <p>
                Throughout the year, we organize events, fundraisers, and
                awareness campaigns to support our mission. Join us in spreading
                the word and helping raise funds for the shelter.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
