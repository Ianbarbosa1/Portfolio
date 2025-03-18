/*COMPONENTES*/
import { Header } from "./componentes/header";
import { Sobre } from "./componentes/sobre";
import { Projetos } from "./componentes/projetos";
import { Footer } from "./componentes/footer";

/*IMAGENS*/
import mascote from "./assets/logos/mascote.jpg";
import roberts from "./assets/logos/roberts.jpg";
import cristiano from "./assets/logos/cr7.jpg";
import triagem from "./assets/logos/triagem.png";
import cross from "./assets/logos/cross arena.jpg";
import mm from "./assets/logos/mm-gourmet.jpg";
import neojobs from "./assets/logos/neojobs.png";
import mmr from "./assets/logos/mmr gases.png";
import premag from "./assets/logos/premag.png";
import yaris from "./assets/logos/yaris.jpg";
import inventiva from "./assets/logos/inventiva.jpg";
import estrela from "./assets/estrela.svg";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Sobre />
        
        <h1 id="projetos">Projetos</h1>

        <div className="projetos-postados">
          <img src={estrela} alt="estrela"/>
          <span>Projetos postados</span>
        </div>

        <section className="container-projetos">
          <Projetos
            imagem={mascote}
            nome="Mascote Rações"
            descricao="Site de um PetShop local"
            link="https://ianbarbosa1.github.io/Mascote/"
          />

          <Projetos
            imagem={roberts}
            nome="Roberts Mix"
            descricao="Site de uma lanchonete local"
            link="https://ianbarbosa1.github.io/Roberts/"
          />

          <Projetos
            imagem={cristiano}
            nome="Cristiano Ronaldo"
            descricao="Site do melhor jogador do mundo"
            link="https://ianbarbosa1.github.io/Cristiano-Ronaldo/"
          />

          <Projetos
            imagem={triagem}
            nome="Triagem"
            descricao="Site sobre sintomas da dengue"
            link="https://ianbarbosa1.github.io/Triagem/"
          />

          <Projetos
            imagem={cross}
            nome="Cross Arena"
            descricao="Site de uma Academia local"
            link="https://ianbarbosa1.github.io/Cross-Arena/"
          />

          <Projetos
            imagem={mm}
            nome="MM Gourmet"
            descricao="Site de uma Hamburgueria local"
            link="https://ianbarbosa1.github.io/MM-GOURMET/"
          />

          <Projetos
            id="postado"
            imagem={neojobs}
            nome="Neojobs"
            descricao="Site de uma empresa tecnologica"
            link="https://www.neojobs.com.br/"
          />

          <Projetos
            id="postado"
            imagem={mmr}
            nome="MMR Gases"
            descricao="Site de uma empresa de gases"
            link="https://mmrgases.com.br/"
          />

          <Projetos
            imagem={premag}
            nome="Premag"
            descricao="Empresa de premoldados de concreto "
            link="https://ianbarbosa1.github.io/premag/"
          />

          <Projetos
            imagem={yaris}
            nome="Yaris"
            descricao="Clinica local de pilates e RPG"
            link="https://ianbarbosa1.github.io/yaris/"
          />

          <Projetos
            id="postado"
            imagem={inventiva}
            nome="Inventiva Art"
            descricao="Empresa especializada em marketing digital"
            link="https://ianbarbosa1.github.io/Inventiva-Art/"
          />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
