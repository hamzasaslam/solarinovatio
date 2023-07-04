import React from "react";
import Group427324401 from "./assets/vectors/Group 427324401.png"
import Group427324402 from "./assets/vectors/Group 427324402.png"

const Sire = () => {
  return (
    <>
      <div
        id="sire"
        className="sire-container-upper w-100"
        style={{ padding: "40px 0" }}
      >
        <div className="container">
          <div className="row w-100" style={{ gap: 30 }}>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <img
                className="sire-hero-img"
                src= {Group427324401}
                style={{ width: 480 }}
              />
            </div>
            <div
              className="col-lg-8 col-md-12 col-sm-12 d-flex align-items-center justify-content-center"
              style={{ position: "relative", zIndex: 1 }}
            >
              <img
                src={Group427324402}
                style={{
                  position: "absolute",
                  width: 130,
                  right: "20%",
                  top: "0%",
                  zIndex: 0,
                }}
                alt
              />
              <div className="sire-content" style={{ marginLeft: "auto" }}>
                <h3>S.I.R.E</h3>
                <h1
                  className="sire section-heading text-left"
                  style={{ fontSize: 34 }}
                >
                  Smart Integrated Renewable Energy
                </h1>
                <p>
                  S.I.R.E. è il primo sistema fotovoltaico intelligente al mondo
                  per la produzione, conversione e gestione dell'energia solare,
                  studiato specificatamente per installazioni all'interno di
                  condomini.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sire;
