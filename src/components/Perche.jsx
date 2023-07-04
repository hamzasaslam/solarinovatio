import React from "react";

import Group from "./assets/vectors/Group.png"
import Group01 from "./assets/vectors/Group (1).png"
import Group02 from "./assets/vectors/Group (2).png"
const Perche = () => {
  return (
    <>
      <div
        id="features"
        className="perche-intro-container-upper w-100"
        style={{ padding: "80px 0" }}
      >
        <div className="container">
          <div className="perche-section-content">
            <h1 className="section-heading text-center">Perchè S.I.R.E.</h1>
            <div className="perche-cards d-flex">
              <div className="card border-0 d-flex align-items-center justify-content-center">
                <div className="card-body" style={{ zIndex: 1 }}>
                  <img src={Group} alt="Card image cap" />
                  <h5
                    className="card-title text-center"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: 20,
                      fontWeight: 500,
                      letterSpacing: "0em",
                      color: "#363636",
                    }}
                  >
                    Risparmio Energetico
                  </h5>
                  <p
                    className="card-text font-span text-center"
                    style={{ color: "#666666" }}
                  >
                    Risparmia da un minimo del 60% sulla bolletta fino
                    all'indipendenza energetica anche grazie alla schermatura
                    solare che consente una riduzione fino al 95% dei raggi UV e
                    quindi un minor utilizzo del condizionatore.{" "}
                  </p>
                </div>
              </div>
              <div className="card border-0 d-flex align-items-center justify-content-center">
                <div className="card-body" style={{ zIndex: 1 }}>
                  <img
                    src={Group01}
                    alt="Card image cap"
                  />
                  <h5
                    className="card-title text-center"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: 20,
                      fontWeight: 500,
                      letterSpacing: "0em",
                      color: "#363636",
                    }}
                  >
                    Mobilità Elettrica
                  </h5>
                  <p
                    className="card-text font-span text-center"
                    style={{ color: "#666666" }}
                  >
                    L'unica soluzione che rende l’utilizzo di un’auto elettrica
                    veramente economico. L’efficienza dei pannelli e le batterie
                    di accumulo garantiscono fino a 29.000 chilometri annui a
                    emissioni zero.{" "}
                  </p>
                </div>
              </div>
              <div className="card border-0 d-flex align-items-center justify-content-center">
                <div className="card-body" style={{ zIndex: 1 }}>
                  <img
                    src={Group02}
                    alt="Card image cap"
                  />
                  <h5
                    className="card-title text-center"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: 20,
                      fontWeight: 500,
                      letterSpacing: "0em",
                      color: "#363636",
                    }}
                  >
                    Comunità Energetica
                  </h5>
                  <p
                    className="card-text font-span text-center"
                    style={{ color: "#666666" }}
                  >
                    Dal concetto di condominio al concetto di comunità
                    energetica: Si.Re. è il sistema che rende possibile
                    realizzare una Comunità Energetica Rinnovabile senza
                    acquisto di energia elettrica dalla rete.
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

export default Perche;
