/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import ContactForm from "./ContactForm";
import { BsLinkedin, BsGithub, BsMedium } from "react-icons/bs";
import "../styles/contactme.css";

export const ContactMe = () => {
  return (
    <div>
      <div className="contact_info">
        <h1 className="links">
          <a href="https://www.linkedin.com/in/jeremiahmarcos/" target="_blank">
            <BsLinkedin className="icons" />
          </a>
        </h1>

        <h1 className="links">
          <a
            href="https://github.com/jmarcos00312"
            className="icons"
            target="_bl"
          >
            <BsGithub />
          </a>
        </h1>

        <h1 className="links">
          <a
            href="https://medium.com/@jeremiahmarcos27"
            className="icons"
            target="_bl"
          >
            <BsMedium />
          </a>
        </h1>
      </div>
      <ContactForm />
    </div>
  );
};
