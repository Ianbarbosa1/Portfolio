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
          <p>É um prazer ter você por aqui! Sou Ian, um estudante de engenharia de software super empolgado com programação e desenvolvimento de sites. Tenho me dedicado a aprimorar meus conhecimentos nessa área desde o início da faculdade. Aqui estão alguns dos projetos que realizei.</p>

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
