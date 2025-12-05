import { Code, Mail, Sparkles} from 'lucide-react';

function Hero(){
    return(
        <section id="home" className="hero-container">
            <div className="hero-content">
                <div className='role'>
                    <Sparkles/>
                    <p> Desenvolvedora Full Stack</p>
                </div>
                <p className="greetings">Olá, que bom ter você aqui!</p>
                <h1 className="name">Camila Martins</h1>
                <p className='description'>Transformo ideias em código, focando em aplicações web elegantes e intuitivas.</p>
                
                <div className="hero-buttons">
                    <div className='btn-projetos'>
                        <Code/>
                        <a href="#projects">Ver projetos</a>
                    </div>
                    <div className='btn-contatos'>  
                        <Mail/>
                        <a href="#contact">Entrar em contato</a>
                    </div>
                    
                </div>
            </div>

        </section>
    );
}
export default Hero