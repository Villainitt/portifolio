import ProjectCard from "../components/ProjectCard";
import { projects } from '../data/projects';

function Projetos() {
    return(
        <section id="projects" className="projetos-container">
            <h2>Meus projetos</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project}/>
                ))}
            </div>
        </section>
    )
}

export default Projetos