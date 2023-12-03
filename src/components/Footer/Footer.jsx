// import React from "react";
// import "./Footer.css";
// export default function Footer() {
//     return (
//         <section className="footer" id="footer">
//             <h2>FUTURE WEBS &#169; 2023</h2>
//             <h3>Location: Haifa</h3>
//             <h3>Telephone Number: +555-555-555</h3>
//         </section>
//     );
// }
import "./Footer.css";
import { AiFillGithub } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTelegramPlane,
} 
from 'react-icons/fa';

const Footer = () => {
  // let date = new Date();
  // let year = date.getFullYear();

  return (
    <div className="footer">
      <div className="container">
        <div className="copyright">
          <h1>Made with ❤️ by Fatema Yasen</h1>
        </div>

        <div className="body">
          <ul className="socialIcons">
            <li>
              <a
                href="https://github.com/fatemaY"
                target="_blank"
                rel="noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/fatemayas2?locale=he_IL"
                target="_blank"
                rel="noreferrer"
                aria-label="facebook"
              >
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/fatema"
                target="_blank"
                rel="noreferrer"
                aria-label="TelegramPlane"
              >
                <FaTelegramPlane />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/fatema-yasen-460b96213/"
                target="_blank"
                rel="noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;