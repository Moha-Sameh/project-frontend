import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div>
        <Link to="/admission">
          <div className="container">
            <Img
              src="https://images.theconversation.com/files/288077/original/file-20190814-136180-1ihzx3n.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
              alt="Avatar"
              className="Styleimg"
              style={{ width: "100%" }}
            />
            <div className="middle">
              <div className="text"> Admission </div>
            </div>
          </div>
        </Link>
        <Link to="/academic">
          <div className="container">
            <Img
              src="https://images.theconversation.com/files/288077/original/file-20190814-136180-1ihzx3n.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
              alt="Avatar"
              className="Styleimg"
              style={{ width: "100%" }}
            />
            <div className="middle">
              <div className="text"> Academic </div>
            </div>
          </div>
        </Link>
        <Link to="/alumni">
          <div className="container">
            <Img
              src="https://images.theconversation.com/files/288077/original/file-20190814-136180-1ihzx3n.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
              alt="Avatar"
              className="Styleimg"
              style={{ width: "100%" }}
            />
            <div className="middle">
              <div className="text"> Alumni </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

const Img = styled.img`
  :hover {
    opacity: 0.7;
    border: 3px solid slategray;
  }
`;
