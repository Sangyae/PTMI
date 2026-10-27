import { useState } from "react";
import TreatmentForm from "./components/TreatmentForm";
import { initialTreatments } from "./treatmentData";

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
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* 1. Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          background: "#333",
          color: "white",
          padding: "15px",
        }}
      >
        <h2 style={{ margin: 0 }}>Patient Treatment</h2>
        <button
          style={{
            background: "none",
            color: "white",
            border: "1px solid white",
            padding: "5px 10px",
          }}
        >
          Sign / Sign Up
        </button>
      </nav>

      {/* 2 & 3. Search Bar and Filter Dropdown */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 0",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <input
          type="text"
          placeholder="Search treatments..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: "8px", flex: "1", minWidth: "200px" }}
        />
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          style={{ padding: "8px", minWidth: "150px" }}
        >
          <option value="All">All Types</option>
          <option value="Physiotherapy">Physiotherapy</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Orthopedics">Orthopedics</option>
          <option value="Neurology">Neurology</option>
        </select>
      </div>

      {/* 4. Display Patient/Treatment Details */}
      <div className="treatment-list">
        <h3>Treatment Records</h3>
        {filteredTreatments.length > 0 ? (
          filteredTreatments.map((treatment) => (
            <div
              key={treatment.id}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <strong>{treatment.name}</strong> ({treatment.type})
              <p style={{ margin: "5px 0 0 0", fontSize: "0.9em" }}>
                ID: {treatment.id} | Start Date: {treatment.date}
              </p>
            </div>
          ))
        ) : (
          <p>No treatments found.</p>
        )}
      </div>

      {/* 5 & 6. Treatment Form */}
      <TreatmentForm />

      {/* 7. Footer */}
      <footer
        style={{
          padding: "20px",
          background: "#f1f1f1",
          marginTop: "20px",
        }}
      >
        <p>&copy; PTMI 2026</p>
      </footer>
    </div>
  );
}
