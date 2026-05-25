import { useEffect, useState } from "react";
import "./Testimonials.css";

function Testimonials() {
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const response = await fetch("https://randomuser.me/api/?results=2");
        const data = await response.json();
        setProfiles(data.results);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading testimonials", error);
        setIsLoading(false);
      }
    }

    fetchTestimonials();
  }, []);

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
          {profiles.map((user) => (
            <div key={user.login.uuid} className="testimonials-card">
              <img src="{user.picture.large}" alt="{user.name.first}" className="client-img" />
              <h3>
                {user.name.first} {user.name.last}
              </h3>
              <p className="client-location">
                {user.location.city}, {user.location.country}
              </p>
              <p className="testimonials-text">
                "Working with Subhiksha was an absolute pleasure. The frontend
                applications delivered are lightning fast, responsive and
                beautifully written!"
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Testimonials;
