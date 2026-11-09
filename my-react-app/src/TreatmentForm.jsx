import { useState } from "react";

export default function TreatmentForm() {
  // useState holds our current input values
  const [formData, setFormData] = useState({
    treatmentId: "",
    treatmentType: "",
    treatmentName: "",
    startDate: "",
  });

  // This state holds the data only AFTER the submit button is clicked
  const [submittedData, setSubmittedData] = useState(null);

  // onChange event handler to update state as the user types
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // onClick/onSubmit event handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    alert("Registered Successfully!");
  };

  return (
    <div
      className="form-section"
      style={{ padding: "20px", border: "1px solid #ccc", margin: "20px 0" }}
    >
      <h3>Register New Treatment</h3>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <input
          type="text"
          name="treatmentId"
          placeholder="Treatment ID"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="treatmentType"
          placeholder="Treatment Type"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="treatmentName"
          placeholder="Treatment Name"
          onChange={handleChange}
          required
        />
        <input type="date" name="startDate" onChange={handleChange} required />
        <button
          type="submit"
          style={{
            cursor: "pointer",
            padding: "10px",
            background: "#007BFF",
            color: "white",
          }}
        >
          Register Treatment
        </button>
      </form>

      {/* Renders the entered information only if submittedData exists */}
      {submittedData && (
        <div
          style={{ marginTop: "20px", padding: "10px", background: "#e9ecef" }}
        >
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
