import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelopeO } from 'react-icons/lib/fa';
import './footer.css';

const Footer = () => (
  <div className="footer">
    <a href="https://github.com/stephanieinez">
      <FaGithub size={30} color="black" className="icon" />
    </a>
    <a href="https://www.linkedin.com/in/stephanie-tassone-b2241b66/">
      <FaLinkedin size={30} color="black" className="icon" />
    </a>
    <a href="mailto:stephanie.tassone@gmail.com">
      <FaEnvelopeO size={30} color="black" className="icon" />
    </a>
  </div>
);

export default Footer;
