import React, { useRef, useEffect, useState } from "react";

function MultiForm() {
  const inputRefs = useRef({}); // object to hold multiple refs
  const [submittedData, setSubmittedData] = useState(null);

  const fields = ["name", "email", "password", "phone", "address"];

  useEffect(() => {
    // Autofocus on the first input
    if (inputRefs.current["name"]) {
      inputRefs.current["name"].focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formValues = {};
    fields.forEach((field) => {
      formValues[field] = inputRefs.current[field].value;
    });

    setSubmittedData(formValues);

    // Clear fields
    fields.forEach((field) => {
      inputRefs.current[field].value = "";
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dynamic useRef Example</h2>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field}>
            <label>{field.toUpperCase()}: </label>
            <input
              type="text"
              placeholder={`Enter ${field}`}
              ref={(el) => (inputRefs.current[field] = el)}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Submitted Data</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default MultiForm;
