import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './EmailForm.css';

const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_os5c7tn',    
      'template_kywm15f',  
      form.current,
      '9_sg2XfIf7ukRRXX_' 
    )
    .then((result) => {
        alert("Email sent successfully! ✅");
        form.current.reset();
    }, (error) => {
        alert("Failed to send email ❌: " + error.text);
    });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="email-form">
      <h3>Contact Us</h3>
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" rows="4" placeholder="Your Message" required />
      <button type="submit">Send</button>
    </form>
  );
};

export default EmailForm;
