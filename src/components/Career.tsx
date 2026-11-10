import "./styles/Career.css";
import { config } from "../config";

const getDisplayYear = (period: string) => {
  if (period.includes("Present")) return "NOW";
  if (period.includes(" - ")) {
    return period.split(" - ")[0]; // Show start year for ranges
  }
  return period; // Single year like "2021"
};

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Experience, Education <span>&</span>
          <br /> Hackathons
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {config.experiences.map((exp, index) => (
            <div key={index} className="career-info-box">
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.position}</h4>
                  <h5>{exp.company}</h5>
                </div>
                <h3>{getDisplayYear(exp.period)}</h3>
              </div>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>

        {/* Hackathon & Innovation Honors */}
        {config.achievements && config.achievements.length > 0 && (
          <div className="career-achievements">
            <h3>Honors & Hackathon Achievements</h3>
            <div className="achievements-grid">
              {config.achievements.map((item, idx) => (
                <div key={idx} className="achievement-card">
                  <div className="achievement-badge">🏆 {item.role}</div>
                  <h4>{item.title}</h4>
                  <p>{item.venue}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Career;
