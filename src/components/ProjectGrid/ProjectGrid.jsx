import './ProjectGrid.css';

function ProjectGrid(props) {
    return(
        <div className="react-project-section">
            <h2 className="section-title">My Projects</h2>
            <div className="react-project-grid">
                {props.allProjects.map((project) => (
                    <div className='react-project-card' key={project.id}>
                        <h3>{project.title}</h3>
                        <p>{project.desc}</p>
                        <span className='tech-tag'>{project.tech}</span>
                    </div>
                ))}
                
            </div>
        </div>
    );
}

export default ProjectGrid;