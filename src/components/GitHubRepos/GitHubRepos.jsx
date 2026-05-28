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
              className="github-repo-card"
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
                  className="github-repo-language"
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
