import { useState, useEffect } from "react";
import "./Testimonials.css";

function Testimonials() {
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users?_limit=2");
        const data = await response.json();
        setProfiles(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading testimonials:", error);
        setIsLoading(false);
      }
    }
    fetchTestimonials();
  }, []);

  // ⚡ Hardcoded list of premium production-ready image links that never go down
  const stableImages = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80", // Client 1
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"  // Client 2
  ];

  return (
    <div className="testimonials-section">
      <h2 className="testimonials-title">Client Testimonials</h2>

      {isLoading ? (
        <div className="react-loader-container">
          <div className="react-spinner"></div>
          <p>Fetching latest client reviews...</p>
        </div>
      ) : (
        <div className="testimonials-container">
          {profiles.map((user, index) => (
            <div className="testimonials-card" key={user.id}>
              
              {/* ⚡ USE THE STABLE IMAGES ARRAY BASED ON THE LOOP INDEX */}
              <img 
                src={stableImages[index] || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150"} 
                alt={user.name} 
                className="client-img" 
              />
              
              <h3>{user.name}</h3>
              <p className="client-location">{user.company?.name || "Verified Client"}</p>
              <p className="testimonials-text">
                "Working with Subhiksha was an absolute pleasure. The frontend applications delivered are lightning fast and responsive!"
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Testimonials;