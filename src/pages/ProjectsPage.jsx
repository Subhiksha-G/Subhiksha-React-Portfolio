import { useEffect, useRef, useState } from "react";
import ProjectGrid from "../components/ProjectGrid/ProjectGrid";

function ProjectsPage({
  displayedProjects,
  deleteProject,
  showOnlyReact,
  setShowOnlyReact,
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const filteredSearchProjects = displayedProjects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <input
          type="text"
          placeholder="🔍 Type to search projects instantly..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          ref={inputRef}
          style={{
            padding: "12px 20px",
            width: "100%",
            maxWidth: "400px",
            borderRadius: "25px",
            border: "2px solid gold",
            background: "#222",
            color: "white",
            fontSize: "1rem",
            outline: "none",
            marginBottom: "20px",
          }}
        />
        <br />
        <button
          onClick={() => setShowOnlyReact(!showOnlyReact)}
          style={{
            background: showOnlyReact ? "gold" : "#333",
            color: showOnlyReact ? "black" : "gold",
            border: "1px solid gold",
            padding: "10px 20px",
            borderRadius: "20px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {showOnlyReact
            ? "⚡ Showing React Only"
            : "🔍 Filter : React Projects"}
        </button>
      </div>
      <ProjectGrid
        allProjects={filteredSearchProjects}
        onDeleteProject={deleteProject}
      />
    </div>
  );
}

export default ProjectsPage;
