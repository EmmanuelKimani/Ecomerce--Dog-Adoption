import React, { useState } from "react";

const Home = () => {
  // Inline styles for the component
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f7f7f7",
      color: "#333",
      lineHeight: "1.6",
    },
    header: {
      textAlign: "center",
      padding: "60px",
      background: "linear-gradient(135deg, #ff6347, #ff4500)",
      color: "white",
      borderRadius: "10px",
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
      animation: "fadeIn 2s ease-out",
    },
    headerTitle: {
      fontSize: "4em",
      fontWeight: "bold",
      marginBottom: "15px",
      textTransform: "uppercase",
      letterSpacing: "5px",
      animation: "bounce 2s infinite alternate",
    },
    headerText: {
      fontSize: "1.4em",
      fontStyle: "italic",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
    },
    cardContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "30px",
      padding: "40px",
    },
    card: {
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      width: "320px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      overflow: "hidden",
      position: "relative",
    },
    cardHover: {
      transform: "scale(1.1)",
      boxShadow: "0 16px 40px rgba(0, 0, 0, 0.25)",
    },
    cardContent: {
      padding: "25px",
      textAlign: "center",
      backgroundColor: "#f9f9f9",
      borderTop: "5px solid #ff6347",
      position: "relative",
    },
    cardTitle: {
      fontSize: "2em",
      marginBottom: "15px",
      fontWeight: "bold",
      textTransform: "uppercase",
    },
    cardText: {
      fontSize: "1.1em",
      color: "#555",
      marginBottom: "20px",
      lineHeight: "1.5",
    },
    footer: {
      textAlign: "center",
      padding: "25px",
      backgroundColor: "#333",
      color: "white",
      position: "relative",
      marginTop: "50px",
      borderTop: "2px solid #555",
    },
    footerText: {
      fontSize: "1.2em",
      letterSpacing: "1px",
    },
    emoji: {
      fontSize: "2em",
      marginRight: "15px",
    },
    testimonialCard: {
      backgroundColor: "#fafafa",
      borderRadius: "10px",
      width: "320px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      margin: "20px",
      textAlign: "center",
    },
    testimonialText: {
      fontSize: "1.2em",
      fontStyle: "italic",
      color: "#444",
      marginBottom: "15px",
    },
    callToActionCard: {
      backgroundColor: "#ff6347",
      borderRadius: "10px",
      width: "320px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      padding: "25px",
      margin: "20px",
      color: "white",
      textAlign: "center",
      textTransform: "uppercase",
    },
    callToActionText: {
      fontSize: "1.3em",
      fontWeight: "bold",
      marginBottom: "15px",
    },
    callToActionButton: {
      backgroundColor: "#ffffff",
      color: "#ff6347",
      border: "none",
      borderRadius: "5px",
      padding: "12px 20px",
      fontSize: "1.2em",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    callToActionButtonHover: {
      backgroundColor: "#ff4500",
      color: "white",
    },
  };

  // State to manage hover effect
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Welcome to Our Animal Shelter</h1>
        <p style={styles.headerText}>
          We are dedicated to caring for animals in need and finding them loving
          homes!
        </p>
      </header>

      <div style={styles.cardContainer}>
        <div
          style={{
            ...styles.card,
            ...(hoveredCard === "about" ? styles.cardHover : {}),
          }}
          onMouseEnter={() => setHoveredCard("about")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div style={styles.cardContent}>
            <h2 style={styles.cardTitle}>
              <span style={styles.emoji}>🐾</span>About Us
            </h2>
            <p style={styles.cardText}>
              Our shelter has been serving the community for over 10 years,
              providing a safe haven for abandoned and stray animals.
            </p>
          </div>
        </div>

        <div
          style={{
            ...styles.card,
            ...(hoveredCard === "adopt" ? styles.cardHover : {}),
          }}
          onMouseEnter={() => setHoveredCard("adopt")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div style={styles.cardContent}>
            <h2 style={styles.cardTitle}>
              <span style={styles.emoji}>🐶</span>Adopt
            </h2>
            <p style={styles.cardText}>
              We have a variety of animals looking for their forever homes. Come
              visit us and meet your new best friend!
            </p>
          </div>
        </div>

        <div
          style={{
            ...styles.card,
            ...(hoveredCard === "volunteer" ? styles.cardHover : {}),
          }}
          onMouseEnter={() => setHoveredCard("volunteer")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div style={styles.cardContent}>
            <h2 style={styles.cardTitle}>
              <span style={styles.emoji}>🤝</span>Volunteer
            </h2>
            <p style={styles.cardText}>
              Join us as a volunteer and make a difference in the lives of
              animals. Your help is invaluable to us!
            </p>
          </div>
        </div>

        <div
          style={{
            ...styles.card,
            ...(hoveredCard === "donate" ? styles.cardHover : {}),
          }}
          onMouseEnter={() => setHoveredCard("donate")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div style={styles.cardContent}>
            <h2 style={styles.cardTitle}>
              <span style={styles.emoji}>💖</span>Donate
            </h2>
            <p style={styles.cardText}>
              Support our shelter through your generous donations. Every bit
              helps us continue our mission to help animals in need.
            </p>
          </div>
        </div>

        <div style={styles.testimonialCard}>
          <h3>What People Are Saying</h3>
          <p style={styles.testimonialText}>
            "The shelter gave me the best companion I could ever ask for! Thank
            you for everything you do for these animals!"
          </p>
        </div>

        <div style={styles.callToActionCard}>
          <h3 style={styles.callToActionText}>Ready to make a difference?</h3>
          <p>
            Support our mission today by adopting, volunteering, or donating!
          </p>
          <button
            style={styles.callToActionButton}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#ff4500")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#ffffff")}
          >
            Get Involved
          </button>
        </div>
      </div>

      <footer style={styles.footer}>
        <p style={styles.footerText}>
          Contact us at: info@animalshelter.org | Call us at: 123-456-7890
        </p>
      </footer>
    </div>
  );
};

export default Home;
