import React, { useState } from "react";
import "./Checkout.css";

const Checkout = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    addressLine1: '',
    city: '',
    state: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://rappo.onrender.com/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Checkout data submitted successfully');
      } else {
        alert('Failed to submit checkout data');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting checkout data');
    }
  };

  return (
    <>
    <div className="checkout-container">
      <div className="form-section" style={{display:'flex'}}>
          <form className="checkout-form" onSubmit={handleSubmit}>
            <h3>Shipping Information</h3>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="form-input"
            />
            <div className="name-fields">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="form-input half-width"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="form-input half-width"
              />
            </div>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="form-input"
            />
            <input
              type="text"
              name="addressLine1"
              placeholder="Enter Your Address"
              value={formData.addressLine1}
              onChange={handleChange}
              required
              className="form-input"
            />
            <div className="location-fields">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
                className="form-input half-width"
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                required
                className="form-input half-width"
              />
            </div>
          <button type="submit" className="confirm-payment-btn">Confirm</button>
        </form>

        <div className="contact-right">
        <div className="contact-3d">
          <div className="cube">
            <div className="face front">Contact</div>
            <div className="face back">Get in Touch</div>
            <div className="face right">Info</div>
            <div className="face left">Details</div>
            <div className="face top">Support</div>
            <div className="face bottom">Help</div>
          </div>
        </div>
      </div>
      </div>




    </div>
     


      
    </>
  );
};

export default Checkout;
