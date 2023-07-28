import React from "react";
import "../styles/contactform.css";

function ContactForm() {
  return (
    <div className="Contact_form">
      <form className="Contact">
        <input type="text" placeholder="Name" id="name" />
        <input type="text" placeholder="Email" id="email" />
        <textarea placeholder="Message" id="message_input" rows={4} />
        <button type="submit" className="submit_btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
