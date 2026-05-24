import './ProjectGrid.css';

function ProjectGrid() {
    const projectsData = [
        { id: 1, title: "Team Directory App", desc: "A real time user directory  fetching data from a live API.", tech: "Vanilla JS" },
        { id: 2, title: "Weather Dashboard", desc: "Monitors local atmoshperic changes with an interactive interfaces.", tech: "React" },
        { id: 3, title: "E-Commerce Cart", desc: "A sleek shopping layout with persistent state item management.", tech: "React" }
    ];
    return(
        <div className="react-project-section">
            <h2 className="section-title">My Projects</h2>
            <div className="react-project-grid">
                {projectsData.map((project) => (
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