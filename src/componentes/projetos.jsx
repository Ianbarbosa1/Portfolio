// eslint-disable-next-line react/prop-types
export function Projetos({imagem, nome, descricao, link}) {
  return (
    <>
        <section className="projeto">
          <div className="empresa">
            <img src={imagem} alt={nome}/>
            <h3>{nome}</h3>
          </div>

          <div className="descricao">
            <p>{descricao}</p>
            <a href={link} target="_blank">Acessar Site</a>
          </div>
        </section>
    </>
  );
}

