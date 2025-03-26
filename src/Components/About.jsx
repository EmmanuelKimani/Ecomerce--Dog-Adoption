import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.overlay}>
          <h1 style={styles.heading}>Welcome to Kimanis Animal Shelter</h1>
          <p style={styles.subHeading}>
            Saving Dogs, Changing Lives. Join Us in Our Mission to Give Every
            Dog a Second Chance!
          </p>
        </div>
      </header>

      <section style={styles.missionSection}>
        <h2 style={styles.sectionTitle}>Our Mission</h2>
        <p style={styles.missionDescription}>
          At Kimanis Animal Shelter, we are dedicated to rescuing,
          rehabilitating, and rehoming dogs in need. Our mission is not just
          about giving dogs a safe place to stay—it’s about giving them a chance
          at a brighter future. From rescue to adoption, every step is a
          testament to the love and care we provide for these beautiful
          creatures.
        </p>
      </section>

      <section style={styles.cardsSection}>
        <h2 style={styles.sectionTitle}>What We Do</h2>
        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Rescue</h3>
            <p style={styles.cardContent}>
              We rescue dogs from abusive environments, accidents, and neglect.
              We work with local authorities to save lives in critical
              situations.
            </p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Adopt</h3>
            <p style={styles.cardContent}>
              Our dogs are ready to find their forever homes. We provide
              adoption services with a personal touch to ensure the right fit
              between dog and family.
            </p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Support</h3>
            <p style={styles.cardContent}>
              You can help us continue our mission. Whether through donations,
              volunteering, or fostering, your support means everything to us
              and the dogs we care for.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.statsSection}>
        <h2 style={styles.sectionTitle}>Our Impact</h2>
        <div style={styles.statsContainer}>
          <div style={styles.statCard}>
            <h3 style={styles.statTitle}>300+</h3>
            <p style={styles.statText}>Dogs Rescued</p>
          </div>
          <div style={styles.statCard}>
            <h3 style={styles.statTitle}>200+</h3>
            <p style={styles.statText}>Dogs Adopted</p>
          </div>
          <div style={styles.statCard}>
            <h3 style={styles.statTitle}>50+</h3>
            <p style={styles.statText}>Volunteers</p>
          </div>
        </div>
      </section>

      <section style={styles.testimonialsSection}>
        <h2 style={styles.sectionTitle}>What Our Supporters Say</h2>
        <div style={styles.testimonialContainer}>
          <div style={styles.testimonialCard}>
            <p style={styles.testimonialText}>
              "The Kimanis Animal Shelter made all the difference in our lives.
              We found our perfect dog, and the team made the entire adoption
              process so smooth and heartfelt."
            </p>
            <p style={styles.testimonialAuthor}>- Sarah L., Dog Adopter</p>
          </div>
          <div style={styles.testimonialCard}>
            <p style={styles.testimonialText}>
              "Volunteering here has been an incredibly fulfilling experience.
              Seeing the dogs come in scared and leave with wagging tails is
              something I will never forget."
            </p>
            <p style={styles.testimonialAuthor}>- John D., Volunteer</p>
          </div>
        </div>
      </section>

      <section style={styles.contactSection}>
        <h2 style={styles.sectionTitle}>Contact Us</h2>
        <p style={styles.contactDescription}>
          Have any questions or want to adopt a dog? Reach out to us, and we'll
          be happy to help!
        </p>
        <div style={styles.contactInfo}>
          <p style={styles.contactItem}>
            <strong>Email:</strong> info@kimanisanimalshelter.com
          </p>
          <p style={styles.contactItem}>
            <strong>Phone:</strong> +254797566732
          </p>
          <p style={styles.contactItem}>
            <strong>Address:</strong> 123 Animal Lane, Kimanis, Sabah, Malaysia
          </p>
        </div>
      </section>
    </div>
  );
};

// Internal CSS styles
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "0",
    margin: "0",
    color: "#fff",
  },
  header: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "120px 20px",
    textAlign: "center",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "30px",
    borderRadius: "10px",
  },
  heading: {
    fontSize: "48px",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  subHeading: {
    fontSize: "24px",
    marginBottom: "30px",
    fontStyle: "italic",
  },
  missionSection: {
    padding: "40px",
    backgroundColor: "#FF7F50",
    textAlign: "center",
  },
  missionDescription: {
    fontSize: "18px",
    marginTop: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: "32px",
    color: "#3e8e41",
    marginBottom: "30px",
    textTransform: "uppercase",
    letterSpacing: "2px",
  },
  cardsSection: {
    padding: "40px 20px",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "20px",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "30px",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "#fff",
    color: "#333",
    width: "250px",
    borderRadius: "15px",
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    transition: "transform 0.3s ease-in-out",
  },
  cardTitle: {
    fontSize: "22px",
    color: "#3e8e41",
    marginBottom: "15px",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  cardContent: {
    fontSize: "16px",
    color: "#555",
  },
  statsSection: {
    backgroundColor: "#3e8e41",
    color: "#fff",
    padding: "40px 20px",
    textAlign: "center",
  },
  statsContainer: {
    display: "flex",
    justifyContent: "space-around",
  },
  statCard: {
    backgroundColor: "#fff",
    color: "#3e8e41",
    padding: "20px",
    borderRadius: "10px",
    width: "150px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  statTitle: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  statText: {
    fontSize: "16px",
  },
  testimonialSection: {
    padding: "40px 20px",
    backgroundColor: "#f9f9f9",
    textAlign: "center",
  },
  testimonialContainer: {
    display: "flex",
    justifyContent: "space-around",
    gap: "30px",
    flexWrap: "wrap",
  },
  testimonialCard: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "300px",
    textAlign: "center",
  },
  testimonialText: {
    fontSize: "16px",
    color: "#555",
    fontStyle: "italic",
    marginBottom: "20px",
  },
  testimonialAuthor: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#3e8e41",
  },
  contactSection: {
    backgroundColor: "#FF7F50",
    padding: "40px 20px",
    textAlign: "center",
  },
  contactDescription: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  contactInfo: {
    fontSize: "16px",
  },
  contactItem: {
    marginBottom: "10px",
  },
};

// Media Queries for responsiveness
const mediaQueries = {
  "@media (max-width: 768px)": {
    header: {
      padding: "80px 20px", // Reduced padding for mobile
    },
    heading: {
      fontSize: "32px", // Smaller font size for mobile
    },
    subHeading: {
      fontSize: "18px", // Smaller sub-heading font
    },
    card: {
      width: "100%", // Full width for cards on smaller screens
    },
    sectionTitle: {
      fontSize: "28px", // Adjust section title font size
    },
    cardsSection: {
      flexDirection: "column", // Stack cards vertically on smaller screens
      alignItems: "center", // Center the cards
    },
    testimonialContainer: {
      flexDirection: "column", // Stack testimonials vertically
      alignItems: "center", // Center testimonials
    },
    contactInfo: {
      fontSize: "14px", // Smaller font size for contact details
    },
  },
};

export default About;
