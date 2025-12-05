import {ExternalLink} from 'lucide-react';

function ProjectCard({ project }){
    return(
        <div className="project-card">
            <div className="card-header">
                <div className='card-links'>
                    <a href="{project.link}" target='_blank' rel="noreferrer"><ExternalLink size={30}/></a>
                </div>
            </div>
            <h3 className='title'>{project.title}</h3>
            <p className='description'>{project.description}</p>

            <div className="tag-list">
                {project.tags.map((tag, index) => (
                    <span key={index} className='project-tags'>{tag}</span>
                ))}
            </div>
        </div>
    )
}

export default ProjectCard