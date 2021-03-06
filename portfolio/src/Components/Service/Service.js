import React from "react";
import "./Service.css";
import { FcOk } from "react-icons/fc";
import Zoom from "react-reveal/Zoom";

const Service = () => {
  const serviceData = [
    {
      id: 1,
      service1: "Web Development",
      service2: "Mobile App Development",
      service3: "UI/UX Design",
      service4: "Digital Marketing",
    },
    {
      id: 2,
      service1: "Web Development",
      service2: "Mobile App Development",
      service3: "UI/UX Design",
      service4: "Digital Marketing",
    },
    {
      id: 3,
      service1: "Web Development",
      service2: "Mobile App Development",
      service3: "UI/UX Design",
      service4: "Digital Marketing",
    },
    {
      id: 4,
      service1: "Web Development",
      service2: "Mobile App Development",
      service3: "UI/UX Design",
      service4: "Digital Marketing",
    },
    {
      id: 5,
      service1: "Web Development",
      service2: "Mobile App Development",
      service3: "UI/UX Design",
      service4: "Digital Marketing",
    },
    {
      id: 6,
      service1: "Web Development",
      service2: "Mobile App Development",
      service3: "UI/UX Design",
      service4: "Digital Marketing",
    },
    {
      id: 7,
      service1: "Web Development",
      service2: "Mobile App Development",
      service3: "UI/UX Design",
      service4: "Digital Marketing",
    },
    {
      id: 8,
      service1: "Web Development",
      service2: "Mobile App Development",
      service3: "UI/UX Design",
      service4: "Digital Marketing",
    },
  ];
  const colors = [
    "#40E0D0",
    "#008080",
    "#DE3163",
    "#CCCCFF",
    "#800000",
    "#008000",
    "#800080",
    "#000080",
  ];

  return (
    <div className="container service-section" id="service">
      {/* Section Title */}
      <div className="section-title">
        <h5>Services</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {serviceData.map((item, index) => (
          <Zoom>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="services">
                <span
                  className="service-number"
                  style={{ backgroundColor: colors[index] }}
                >
                  <p>{index + 1}</p>
                </span>

                <div className="list-of-service">
                  <p>
                    <FcOk size={20} style={{ margin: "5px" }} />
                    {item.service1}
                  </p>
                </div>
                <p className="service-item-underline"></p>
                <div className="list-of-service">
                  <p>
                    <FcOk size={20} style={{ margin: "5px" }} />
                    {item.service2}
                  </p>
                </div>
                <p className="service-item-underline"></p>
                <div className="list-of-service">
                  <p>
                    <FcOk size={20} style={{ margin: "5px" }} />
                    {item.service3}
                  </p>
                </div>
                <p className="service-item-underline"></p>
                <div className="list-of-service">
                  <p>
                    <FcOk size={20} style={{ margin: "5px" }} />
                    {item.service4}
                  </p>
                </div>
              </div>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default Service;
