import { useState } from "react";
import TreatmentForm from "./treatmentForm";
import { initialTreatments } from "./treatmentData";
import UWL from "./UWL.jpg";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

export default function App() {
  const [treatments] = useState(initialTreatments);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");

  // Filtering logic: Checks both the search bar and the dropdown
  const filteredTreatments = treatments.filter((treatment) => {
    const matchesSearch = treatment.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesType = filterType === "All" || treatment.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="app-container">
      <nav className="navbar">
        <h2 className="nav-title">Patient Treatment Management</h2>
        <button className="nav-btn">Sign/SignUp</button>
      </nav>
      <div>
        <img src={UWL} className="img" alt="Uwl" />
      </div>
      <div className="controls-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search treatments..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="filter-select"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="All">All Types</option>
          <option value="Physiotherapy">Physiotherapy</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Orthopedics">Orthopedics</option>
          <option value="Neurology">Neurology</option>
        </select>
      </div>

      <div className="treatment-list-container">
        <h3 className="section-title">Treatment Records</h3>
        {filteredTreatments.length > 0 ? (
          filteredTreatments.map((treatment) => (
            <div key={treatment.id} className="treatment-card">
              <div className="treatment-header">
                <strong>{treatment.name}</strong>
                <span className="treatment-badge">{treatment.type}</span>
              </div>
              <p className="treatment-meta">
                ID: {treatment.id} | Start Date: {treatment.date}
              </p>
            </div>
          ))
        ) : (
          <p className="no-results">No treatments found.</p>
        )}
      </div>
      <TreatmentForm />

      <footer className="footer">
        <h3 className="footer-h3">Help? 0123456789 </h3>
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
        </div>
        <p className="copyright">@CopyRight PTMI UWL</p>
      </footer>
    </div>
  );
}
