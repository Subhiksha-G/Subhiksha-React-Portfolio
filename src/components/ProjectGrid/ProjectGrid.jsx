import { memo } from "react";
import "./ProjectGrid.css";

function ProjectGrid(props) {
  if (!props.allProjects || props.allProjects.length === 0) {
    return(
        <div style={{ textAlign: "center", color: "gray", padding: '40px' }}>
            <p style={{fontSize: '1.2rem', fontWeight: 'bold'}}>No projects found.</p>
            <p style={{fontSize: '0.9rem'}}>Try clearing you search or reloading the page.</p>
        </div>
    );
  }
  return (
    <div className="react-project-section">
      <h2 className="section-title">My Projects</h2>
      <div className="react-project-grid">
        {props.allProjects.map((project) => (
          <div className="react-project-card" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "15px",
              }}
            >
              <span className="tech-tag">{project.tech}</span>
              <button
                onClick={() => props.onDeleteProject(project.id)}
                className="delete-project-btn"
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(ProjectGrid);
