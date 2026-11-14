import { useState } from "react";

export default function TreatmentForm() {
  const [formData, setFormData] = useState({
    treatmentId: "",
    treatmentType: "",
    treatmentName: "",
    startDate: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    alert("Registered Successfully!");
  };

  return (
    <div className="form-section">
      <h3 className="section-title">Register New Treatment</h3>

      <form className="treatment-form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          name="treatmentId"
          placeholder="Treatment ID"
          onChange={handleChange}
          required
        />
        <input
          className="form-input"
          type="text"
          name="treatmentType"
          placeholder="Treatment Type"
          onChange={handleChange}
          required
        />
        <input
          className="form-input"
          type="text"
          name="treatmentName"
          placeholder="Treatment Name"
          onChange={handleChange}
          required
        />
        <input
          className="form-input"
          type="date"
          name="startDate"
          onChange={handleChange}
          required
        />
        <button className="submit-btn" type="submit">
          Register Treatment
        </button>
      </form>

      {submittedData && (
        <div className="submitted-data-card">
          <h4>Recently Added (Local View Only)</h4>
          <p>
            <strong>ID:</strong> {submittedData.treatmentId}
          </p>
          <p>
            <strong>Type:</strong> {submittedData.treatmentType}
          </p>
          <p>
            <strong>Name:</strong> {submittedData.treatmentName}
          </p>
          <p>
            <strong>Start Date:</strong> {submittedData.startDate}
          </p>
        </div>
      )}
    </div>
  );
}
