import logo from "../assets/Ian barbosa.png";
import { FaInstagram,FaLinkedin } from "react-icons/fa";
export function Footer() {
  return (
    <>
      <img src={logo} alt="Ian barbosa" className="logo"/>

      <p className="frase">Ian barbosa - 2025</p>

      <div className="linguagens">
        <a href="https://www.instagram.com/ian_16hallo/">
          <FaInstagram title="Instagram" />
        </a>
        <a href="https://www.linkedin.com/in/ian-da-costa-barbosa-1715b4241/">
          <FaLinkedin title="Linkedin" />
        </a>
      </div>
    </>
  );
}
