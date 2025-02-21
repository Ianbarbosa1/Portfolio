import { useState } from "react"
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5"
export function Header(){
    let [abrir, setAbrir] = useState(false);

    function abriu(){
        setAbrir(true)
    }
    function fechar(){
        setAbrir(false)
    }
    
    return(
        <>
            {abrir && 
                <> 
                    <nav className="menu-tel">
                    <div className="links-menu-tel">
                        <IoClose className="fechar" onClick={fechar}/>
                        <a href="https://drive.google.com/file/d/164QNj9NhQibCslmXBKHVDZMpl0afdASl/view?usp=sharing" target="_blank">Curriculo</a>
                        <a href="#sobre">Sobre Mim</a>
                        <a href="#projetos">Projetos</a>
                        <a href="https://github.com/Ianbarbosa1" target="_blank">Repositório</a>
                    </div>
                    </nav>
                </>
            }
            
            <nav className="menu">
                <div className="detalhe"></div>

                <div className="links">
                    <a href="https://drive.google.com/file/d/164QNj9NhQibCslmXBKHVDZMpl0afdASl/view?usp=sharing" target="_blank">Curriculo</a>
                    <a href="#sobre">Sobre Mim</a>
                    <a href="#projetos">Projetos</a>
                    <a href="https://github.com/Ianbarbosa1" target="_blank">Repositório</a>
                </div>

                <FiMenu className="menu-hamburguer" onClick={abriu}/>
            </nav>

            <h1 className="T1">Portfólio</h1>
            <h2 className="T2">Ian Barbosa</h2>
            
            <div className="detalhe2"></div>
        </>
    )
}