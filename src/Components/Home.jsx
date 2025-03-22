import React from "react";

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
      padding: "40px",
      backgroundColor: "#ff6347",
      color: "white",
    },
    headerTitle: {
      fontSize: "3em",
      marginBottom: "10px",
    },
    headerText: {
      fontSize: "1.2em",
    },
    cardContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
      padding: "20px",
    },
    card: {
      backgroundColor: "white",
      borderRadius: "8px",
      overflow: "hidden",
      width: "300px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease",
    },
    cardHover: {
      transform: "translateY(-10px)",
    },
    cardContent: {
      padding: "20px",
    },
    cardTitle: {
      fontSize: "1.8em",
      marginBottom: "10px",
    },
    cardText: {
      fontSize: "1em",
      color: "#555",
    },
    footer: {
      textAlign: "center",
      padding: "20px",
      backgroundColor: "#333",
      color: "white",
    },
    footerText: {
      fontSize: "1.1em",
    },
    emoji: {
      fontSize: "1.5em",
      marginRight: "10px",
    },
  };

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
        <div style={styles.card}>
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

        <div style={styles.card}>
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

        <div style={styles.card}>
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

        <div style={styles.card}>
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
