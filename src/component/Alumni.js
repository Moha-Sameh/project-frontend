import { observer } from "mobx-react";
import React from "react";
import { Carousel } from "react-bootstrap";
import alumniStore from "../dataStore/alumniStore";

const Alumni = () => {
  return (
    <div className="AcademicStyle">
      <div>
        <Carousel>
          {alumniStore.alumni.map((item) => (
            <Carousel.Item interval={1000}>
              <img
                className="d-center w-10 p-2"
                src="https://pixy.org/download/1394670/"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{item.firstName + " " + item.lastName}</h3>
                <p>
                  {item.college.name +
                    " Department: " +
                    item.college.department}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default observer(Alumni);
