import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (name.trim() === "") {
      alert("Please enter your name.");
      return;
    }

    if (email.trim() === "" || !emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (message.trim() === "") {
      alert("Please enter your message.");
      return;
    }

    alert("Form submitted successfully!");
  };

  return (
    <div style={styles.background}>
      <div style={styles.overlay}>
        <div style={styles.container}>
          <h2>Write to us:</h2>
          <p>We'll write rarely, but only the best content.</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              style={styles.textarea}
            ></textarea>
            <button type="submit" style={styles.button}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  background: {
    backgroundImage: "url('/contactus.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "25px",
    padding: "40px",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
    width: "90%",
    maxWidth: "700px",
  },
  container: {
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "15px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "16px",
  },
  textarea: {
    width: "100%",
    height: "100px",
    padding: "15px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "15px",
    border: "none",
    borderRadius: "6px",
    fontSize: "18px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default ContactForm;
