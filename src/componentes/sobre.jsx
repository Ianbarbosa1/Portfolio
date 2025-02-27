/*IMAGEMs*/
import imagem from "../assets/icone.svg";
import { FaHtml5,FaCss3,FaReact,FaPython,FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

export function Sobre() {
  return (
    <>
      <h1 id="sobre">Sobre</h1>

      <section className="sobre">
        <img src={imagem} alt="programador" className="icone-sobre"/>

        <div className="sobre-texto">
          <p>Eu sou Ian da Costa Barbosa e atualmente tenho 20 anos de idade, tenho o desejo e a vontade de me tornar um programador. Meu primeiro contato com a tecnologia foi por meio de um tio, que me ensinou os conceitos inicias sobre manutenção e redes de computadores. Depois de alguns meses, iniciei na faculdade de engenharia de software e na minha primeira aula tive o contato com a programação, e estou até os dias atuais aprimorando meus conhecimentos na área.</p>

          <div className="mini-sobre">
            <nav></nav>
            <h2>Linguagens Utilizadas</h2>
          </div>

          <div className="linguagens">
            <FaHtml5 title="HTML5" />
            <FaCss3 title="CSS" />
            <IoLogoJavascript title="JavaScript" />
            <FaReact title="ReactJs" />
            <FaPython title="Python" />
          </div>

          <div className="mini-sobre">
            <nav></nav>
            <h2>Redes Sociais</h2>
          </div>

          <div className="linguagens">
            <a href="https://www.instagram.com/ian_16hallo/">
              <FaInstagram title="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/ian-da-costa-barbosa-1715b4241/">
              <FaLinkedin title="Linkedin" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
