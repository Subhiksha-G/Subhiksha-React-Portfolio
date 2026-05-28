import { useCallback, useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import { useLocalStorage } from "./hooks/useLocalStorage";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

function App() {
  const [likes, setLikes] = useLocalStorage("project-appreciation-score", 0);

  const [showOnlyReact, setShowOnlyReact] = useState(false);

  const { isDarkMode } = useContext(ThemeContext);

  const [portfolioProjects, setPortfolioProjects] = useState([
    {
      id: 1,
      title: "Team Directory App",
      desc: "A real time user directory  fetching data from a live API.",
      tech: "Vanilla JS",
    },
    {
      id: 2,
      title: "Weather Dashboard",
      desc: "Monitors local atmoshperic changes with an interactive interfaces.",
      tech: "React",
    },
    {
      id: 3,
      title: "E-Commerce Cart",
      desc: "A sleek shopping layout with persistent state item management.",
      tech: "React",
    },
  ]);

  function handleLikeClick() {
    setLikes(likes + 1);
  }

  const deleteProject = useCallback((projectId) => {
    setPortfolioProjects((prevProjects) =>
      prevProjects.filter((project) => project.id !== projectId),
    );
  }, []);

  const displayedProjects = showOnlyReact
    ? portfolioProjects.filter((project) => project.tech === "React")
    : portfolioProjects;

  return (
    <div
      className={`app-container ${isDarkMode ? "dark-theme" : "light-theme"}`}
    >
      <Navbar logoTitle="SUBHIKSHA G 🚀" countValue={likes} />

      <ErrorBoundary>
        <Routes>
          <Route
            path="/"
            element={<Home likes={likes} handleLikeClick={handleLikeClick} />}
          />
          <Route
            path="/projects"
            element={
              <ProjectsPage
                displayedProjects={displayedProjects}
                deleteProject={deleteProject}
                showOnlyReact={showOnlyReact}
                setShowOnlyReact={setShowOnlyReact}
              />
            }
          />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
