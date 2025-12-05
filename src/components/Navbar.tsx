import logo from "../assets/images/logo.png"

function Navbar(){
    return (
        <nav className="navbar">
            <div className="logo"><img src={logo} alt="Logo" /></div>
            <ul className="itens">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#skills">Conhecimentos</a></li>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#contact">Contato</a></li>

            </ul>
        </nav>
    );
}

export default Navbar;