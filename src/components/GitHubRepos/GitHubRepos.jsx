import { useEffect, useState } from "react";

function GitHubRepos() {
  const [repos, setRepos] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/subhiksha-g/repos")
      .then((response) => response.json())
      .then((data) => {
        const myRepos = data.filter((repo) => !repo.fork);
        setRepos(myRepos);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching GitHub repos: ", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div style={{ marginTop: "50px", padding: "20px" }}>
      <h2 style={{ textAlign: "center", color: "gold" }}>
        Live GitHub Pages 🐙
      </h2>
      {isLoading ? (
        <p style={{ textAlign: "center" }}>Fetching live data from GitHub...</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {repos.map((repo) => (
            <div
              key={repo.id}
              style={{
                border: "1px solid #444",
                padding: "20px",
                borderRadius: "10px",
                width: "300px",
                background: "var(--card-bg, #1e1e1e)",
                color: "var(--text-main, white)",
              }}
            >
              <h3 style={{ marginTop: "0" }}>{repo.name}</h3>
              <p style={{ fontSize: "0.9rem", color: "gray" }}>
                {repo.description || "No description provided."}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "15px",
                }}
              >
                <span
                  style={{
                    fontSize: "0.8rem",
                    background: "#333",
                    padding: "4px 8px",
                    borderRadius: "5px",
                    color: "white",
                  }}
                >
                  {repo.language || "Code"}
                </span>
                <a
                  href="{repo.html_url}"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "gold",
                    textDecoration: "none",
                    fontWeight: "bold",
                    padding: "5px 10px",
                    border: "1px solid gold",
                    borderRadius: "5px"
                  }}
                >
                  View Code ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GitHubRepos;
