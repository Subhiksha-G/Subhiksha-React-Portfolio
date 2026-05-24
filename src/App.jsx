import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import ProjectGrid from "./components/ProjectGrid/ProjectGrid";

function App() {
  const [likes, setLikes] = useState(0);

  const portfolioProjects = [
        { id: 1, title: "Team Directory App", desc: "A real time user directory  fetching data from a live API.", tech: "Vanilla JS" },
        { id: 2, title: "Weather Dashboard", desc: "Monitors local atmoshperic changes with an interactive interfaces.", tech: "React" },
        { id: 3, title: "E-Commerce Cart", desc: "A sleek shopping layout with persistent state item management.", tech: "React" }
    ];

  function handleLikeClick() {
    setLikes(likes + 1);
  }

  return (
    <div className="app-container">
      <Navbar logoTitle="SUBHIKSHA G 🚀" countValue={likes} />

      <ProjectGrid allProjects={portfolioProjects} />
      
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1 style={{ color: "gold" }}>
          Subhiksha's React Portfolio Startup 🚀
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#cccccc" }}>
          Project Appreciation Score :{" "}
          <strong style={{ color: "gold" }}>{likes}</strong> ❤️
        </p>
        <button onClick={handleLikeClick} style={{
          background: '#333',
          color: 'gold',
          border: '1px solid gold',
          padding: '10px 20px',
          borderRadius: '20px',
          cursor: 'pointer',
          fontSize: '1rem',
          transition: '0.3s'
        }}>
          Appreciate Project 👍
        </button>
      </div>
    </div>
  );
}

export default App;
