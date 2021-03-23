import React from "react";
import styled from "styled-components";
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
          <Input
            type="text"
            className="form-control"
            placeholder="First Name"
            name="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="col-4">
          <Input
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
          <Input
            type="text"
            className="form-control"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="col-4">
          <Input
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
          <Input
            type="text"
            className="form-control"
            placeholder="College"
            name="college"
            onChange={handleChange}
          />
        </div>
        <Button>Submit Application</Button>
      </div>
    </form>
  );
};

const Input = styled.input`
  background: linear-gradient(to right, white, #a9a9a9);

  :hover {
    background: linear-gradient(to left, #b0c4de, #a9a9a9);
  }
  :focus {
    border: 2px solid saddlebrown;
  }
`;

const Button = styled.button`
  border-radius: 5px;
  padding: 25px;
  background-color: whitesmoke;
  margin-left: 200px;
  margin-top: 15px;

  :hover {
    background-color: yellow;
  }
`;
