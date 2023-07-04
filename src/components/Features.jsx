import React from "react";
import Group03 from "./assets/vectors/Group (3).png"
import Vector from "./assets/vectors/Vector.png"
import Vector01 from "./assets/vectors/Vector (1).png"
import Vector02 from "./assets/vectors/Vector (2).png"
const Features = () => {
  return (
    <>
      <div
        id="whysire"
        className="features-intro-container-upper w-100"
        style={{ padding: "30px 0" }}
      >
        <div className="container">
          <div className="feature-section-content">
            <div className="feature-cards d-flex">
              <div className="card border-0 d-flex align-items-center justify-content-center">
                <div className="card-body" style={{ zIndex: 1 }}>
                  <img
                    src={Group03}
                    alt="Card image cap"
                  />
                  <h5
                    className="card-title small-heading"
                    style={{ color: "#363636" }}
                  >
                    110%
                  </h5>
                  <p
                    className="card-text font-span text-center"
                    style={{ color: "#666666" }}
                  >
                    Superbonus{" "}
                  </p>
                </div>
              </div>
              <div className="card  border-0 d-flex align-items-center justify-content-center">
                <div className="card-body" style={{ zIndex: 1 }}>
                  <img src={Vector} alt="Card image cap" />
                  <h5
                    className="card-title small-heading"
                    style={{ color: "#363636" }}
                  >
                    110%
                  </h5>
                  <p
                    className="card-text font-span text-center"
                    style={{ color: "#666666" }}
                  >
                    Superbonus{" "}
                  </p>
                </div>
              </div>
              <div className="card border-0 d-flex align-items-center justify-content-center">
                <div className="card-body" style={{ zIndex: 1 }}>
                  <img
                    src={Vector01}
                    alt="Card image cap"
                  />
                  <h5
                    className="card-title small-heading"
                    style={{ color: "#363636" }}
                  >
                    110%
                  </h5>
                  <p
                    className="card-text font-span text-center"
                    style={{ color: "#666666" }}
                  >
                    Superbonus
                  </p>
                </div>
              </div>
              <div className="card border-0 d-flex align-items-center justify-content-center">
                <div className="card-body" style={{ zIndex: 1 }}>
                  <img
                    src={Vector02}
                    alt="Card image cap"
                  />
                  <h5
                    className="card-title small-heading"
                    style={{ color: "#363636" }}
                  >
                    110%
                  </h5>
                  <p
                    className="card-text font-span text-center"
                    style={{ color: "#666666" }}
                  >
                    Superbonus{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
