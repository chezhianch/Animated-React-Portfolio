import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_oojsw2s',
      'template_8u1gbac',
      form.current,
      'qQ3H_uiWZDmKHbHFh'
    ).then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      },
      (error) => {
        console.log(error.text);
        alert("Something went wrong. Please try again.");
      }
    );
  };

  return (
    <div className="container">
      <h2 style={{ color: 'white', marginBottom: '20px' }}>Contact Me</h2>
      <form ref={form} onSubmit={handleSubmit} className="form">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="Enter your name" required />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Enter your email" required />

        <label htmlFor="message">Message</label>
        <textarea name="message" rows="5" placeholder="Write your message..." required />
        <div className="button-container">
  <button type="submit">Send</button>
</div>

      </form>
    </div>
  );
};

export default Contact;
