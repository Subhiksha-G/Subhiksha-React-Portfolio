import ProjectGrid from "../components/ProjectGrid/ProjectGrid";

function ProjectsPage({displayedProjects, deleteProject, showOnlyReact, setShowOnlyReact}) {
    return(
        <div style={{padding: '20px'}}>
            <div style={{textAlign: "center", marginTop: "30px"}}>
                <button onClick={() => setShowOnlyReact(!showOnlyReact)}
                    style={{
                        background: showOnlyReact ? "gold" : "#333",
                        color: showOnlyReact ? "black" : "gold",
                        border: "1px solid gold",
                        padding: "10px 20px",
                        borderRadius: "20px",
                        cursor: "pointer",
                        fontWeight: "bold"
                    }}>
                    {showOnlyReact ? "⚡ Showing React Only" : "🔍 Filter : React Projects"}
                </button>
            </div>
            <ProjectGrid allProjects={displayedProjects} onDeleteProject={deleteProject} />
        </div>
    );
}

export default ProjectsPage;