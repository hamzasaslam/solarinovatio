import React from "react";
import Group427324279 from "./assets/Group 427324279.png";
import TestoniCristian from "./assets/Testoni Cristian.png";
import Gavioli from "./assets/Gavioli.png";
import MassimoFabi from "./assets/Massimo Fabi_ direttore commerciale.png";

const Intro = () => {
  return (
    <section>
      <div
        id="chisiamo"
        className="owners-intro-container-upper w-100"
        style={{ padding: "80px 0" }}
      >
        <div className="container" style={{ zIndex: 1, position: "relative" }}>
          <div
            className="dots-bg-vector"
            style={{ zIndex: 0, position: "absolute", left: 0, top: 10 }}
          >
            <img src={Group427324279} alt="intro" />
          </div>
          <div className="intro-section-content">
            <h1 className="section-heading text-center">Chi Siamo</h1>
            <p
              className="text-center"
              style={{
                marginTop: 55,
                fontFamily: "Poppins",
                fontSize: 17,
                fontWeight: 400,
                letterSpacing: "0em",
                padding: "0px 10px",
                color: "#363636",
              }}
            >
              Solar Innovatio è una PMI innovativa italiana specializzata nella
              progettazione e realizzazione di sistemi fotovoltaici
              intelligenti. Solar Innovatio unisce alla decennale esperienza
              maturata nel panorama italiano nell'ambito delle soluzioni
              fotovoltaiche un approccio ingegneristico, innovativo, digitale
              alla principale fonte di energia rinnovabile.
            </p>
            {/* cards  */}
            <div className="intro-cards d-flex">
              <div
                className="card border-0 d-flex align-items-center justify-content-center"
                style={{ position: "relative" }}
              >
                <div
                  className="text-bg"
                  style={{
                    width: "100%",
                    height: "70%",
                    position: "absolute",
                    top: "30%",
                    backgroundColor: "var(--extra-light)",
                    borderRadius: 6,
                    zIndex: 0,
                  }}
                ></div>
                <img
                  className="card-img"
                  style={{ width: 182, height: 173, zIndex: 1 }}
                  src={TestoniCristian}
                  alt="Card image cap"
                />
                <div className="card-body" style={{ zIndex: 1 }}>
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
                    Cristian Testoni
                  </h5>
                  <p
                    className="card-text text-center"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: 14,
                      fontWeight: 400,
                      letterSpacing: "0em",
                      textAlign: "center",
                      marginBottom: "0px !important",
                      color: "#666666",
                    }}
                  >
                    Ingegnere Meccanico, MBA. Ho ricoperto cariche di consulente
                    e progettista in aziende meccaniche. Ho avviato come
                    imprenditore diverse startup di riferimento nel settore
                    rinnovabili in Italia e all’estero.
                  </p>
                </div>
              </div>
              <div
                className="card border-0 d-flex align-items-center justify-content-center"
                style={{ position: "relative" }}
              >
                <div
                  className="text-bg"
                  style={{
                    width: "100%",
                    height: "70%",
                    position: "absolute",
                    top: "30%",
                    backgroundColor: "var(--extra-light)",
                    borderRadius: 6,
                    zIndex: 0,
                  }}
                ></div>
                <img
                  className="card-img"
                  style={{ width: 182, height: 173, zIndex: 1 }}
                  src={Gavioli}
                  alt="Card image cap"
                />
                <div className="card-body" style={{ zIndex: 1 }}>
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
                    Gavioli
                  </h5>
                  <p
                    className="card-text text-center"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: 14,
                      fontWeight: 400,
                      letterSpacing: "0em",
                      textAlign: "center",
                      marginBottom: "0px !important",
                      color: "#666666",
                    }}
                  >
                    Sono un ingegnere energetico. Mi occupo di progettazione,
                    manutenzione e consulenza nel campo delle energie
                    rinnovabili. Ho esperienza pluriennale nell’ambito dei
                    progetti di efficienza energetica.
                  </p>
                </div>
              </div>
              <div
                className="card border-0 d-flex align-items-center justify-content-center"
                style={{ position: "relative" }}
              >
                <div
                  className="text-bg"
                  style={{
                    width: "100%",
                    height: "70%",
                    position: "absolute",
                    top: "30%",
                    backgroundColor: "var(--extra-light)",
                    borderRadius: 6,
                    zIndex: 0,
                  }}
                ></div>
                <img
                  className="card-img"
                  style={{ width: 182, height: 173, zIndex: 1 }}
                  src={MassimoFabi}
                  alt="Card image cap"
                />
                <div className="card-body" style={{ zIndex: 1 }}>
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
                    Massimo Fabi
                  </h5>
                  <p
                    className="card-text text-center"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: 14,
                      fontWeight: 400,
                      letterSpacing: "0em",
                      textAlign: "center",
                      marginBottom: "0px !important",
                      color: "#666666",
                    }}
                  >
                    Mi occupo di sviluppo e commercializzazione di sistemi di
                    accumulo di energia rinnovabile. Ho esperienza pluriennale
                    nella direzione commerciale di aziende del settore.
                  </p>
                </div>
              </div>
            </div>
            <div className="section-bottom-quote">
              <p className="text-center section-quote">
                Non sviluppiamo pannelli fotovoltaici. Il pannello è solo una
                componente di una soluzione ingegneristica più completa che
                comprende sensoristiche avanzate e l'integrazione con i sistemi
                domotici di casa.
              </p>
              <h2
                className="quote-auther"
                style={{
                  fontFamily: "Poppins",
                  fontSize: 18,
                  fontWeight: 500,
                  letterSpacing: "0em",
                  textAlign: "center",
                  color: "var(--green)",
                  marginTop: 30,
                }}
              >
                Cristian Testoni
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
