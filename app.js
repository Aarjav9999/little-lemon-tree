```jsx
import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 2,
    occasion: "Birthday",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.date || !formData.time) {
      setMessage("Please select a date and time.");
      return;
    }

    if (formData.guests < 1 || formData.guests > 10) {
      setMessage("Guests must be between 1 and 10.");
      return;
    }

    setMessage("Your table has been successfully reserved!");
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container nav-container">
          <div className="logo">
            <span className="logo-icon">🍋</span>
            <div>
              <h1>Little Lemon</h1>
              <p>Chicago</p>
            </div>
          </div>

          <nav aria-label="Main navigation">
            <a href="#home">Home</a>
            <a href="#menu">Menu</a>
            <a href="#about">About</a>
            <a href="#booking">Reservations</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section id="home" className="hero">
          <div className="container hero-content">
            <div className="hero-text">
              <p className="location">CHICAGO, ILLINOIS</p>
              <h2>Little Lemon</h2>
              <h3>Fresh food. Great taste.</h3>

              <p>
                We are a family-owned Mediterranean restaurant serving
```
