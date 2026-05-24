import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [likes, setLikes] = useState(0);

  function handleLikeClick() {
    setLikes(likes + 1);
  }

  return (
    <div className="app-container">
      <Navbar logoTitle="SUBHIKSHA G 🚀" />
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
