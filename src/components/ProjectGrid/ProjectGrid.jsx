import { memo } from "react";
import "./ProjectGrid.css";

function ProjectGrid(props) {
  if (!props.allProjects) return <p style={{ textAlign: "center", color: "gray" }}>No projects found.</p>;
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
