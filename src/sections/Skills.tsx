import {Code, Database, Cpu } from 'lucide-react';


function Skills(){
    const skillsData = [
            {
                icone: Code,
                categoria: "Frontend",
                techs: ["React", "HTML", "CSS", "JavaScript"]
            },
            {   
                icone: Database,
                categoria: "Backend",
                techs: ["Java", "API Rest", "Python"]
            },
            {
                icone: Cpu,
                categoria: "DevOps",
                techs: ["Docker", "Git & Gitlab", "CI/CD"]
            }
        ];

    return(
        <section id="skills" className="skills-container"> 
            <h2>Skills</h2>
            <div className="skills-grid">
                {skillsData.map((group, index) => {
                    const IconComponent = group.icone;
                    return (
                        <div key={index} className="skill-card">
                            <div className="skill-header">
                                <div className="skill-icon">
                                    <IconComponent size={32} /> 
                                </div>
                                <h3>{group.categoria}</h3>
                            </div>

                            <div className="tech-list">
                                {group.techs.map((tech, idx) => (
                                    <span key={idx} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default Skills