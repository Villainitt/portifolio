import { Mail, Linkedin, Github} from 'lucide-react';

function Contatos(){
    return(
        <section id="contact" className="contatos-container">
            <div className="contact-content">
                <h2>Vamos conversar?</h2>
                <p>
                Estou sempre aberta a novos desafios. 
                Se você tem uma ideia de projeto ou quer apenas trocar uma ideia sobre 
                tecnologia, data science ou o universo, minha caixa de entrada está aberta!
                </p>
                <a href="mailto:camilamartinssousa5@gmail.com" className='contact-card'>
                    <div className='icon-box'>
                        <Mail size={40}/>
                    </div>
                    <div className='contact-info'>
                        <h3>Envie um e-mail</h3>
                        <span>camilamartinssousa5@gmail.com</span>
                    </div>
                </a>
                <div className='social-links'>
                    <a href="https://github.com/Villainitt" target="_blank" rel="noreferrer" className="social-btn">
                        <Github size={24}/>
                    </a>
                    <a href="www.linkedin.com/in/camila-martins-6a5bb02b1" target="_blank" rel="noreferrer" className="social-btn">
                        <Linkedin size={24}/>
                    </a>
                </div>

            </div>
        </section>
        
    )
}

export default Contatos