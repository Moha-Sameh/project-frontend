import React from "react";
import admissionStore from "../dataStore/admissionStore";

export const Admission = () => {
  const [student, setStudent] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    college: "",
  });

  const handleChange = (event) => {
    setStudent({ ...student, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    admissionStore.createStudent(student);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group row">
        <div className="col-4">
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            name="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="col-4">
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            name="lastName"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-4">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="col-4">
          <input
            type="text"
            className="form-control"
            placeholder="Contact Number"
            name="number"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-4">
          <input
            type="text"
            className="form-control"
            placeholder="College"
            name="college"
            onChange={handleChange}
          />
        </div>
        <button>Submit Application</button>
      </div>
    </form>
  );
};
