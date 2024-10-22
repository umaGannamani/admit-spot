import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    country: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add validation and API call logic here
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
      <input type="text" name="country" placeholder="Country of Residence" value={formData.country} onChange={handleChange} required />
      <textarea name="message" placeholder="How can we serve you?" value={formData.message} onChange={handleChange} required />
      <button type="submit">Request a callback</button>
    </form>
  );
};

export default ContactForm;
