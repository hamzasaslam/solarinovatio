import React from "react";
import frame4 from "./assets/vectors/Frame 4.png"

const Processing = () => {
  return (
    <>
      <div
        id="howwork"
        className="processs-steps-container-upper w-100"
        style={{ padding: "40px 0" }}
      >
        <h1 className="section-heading text-center">
          Connettiti al sole anche tu
        </h1>
        <div className="container">
          <div
            className="row g-2 d-flex justify-content-between"
            style={{ marginTop: 80 }}
          >
            <div className="step-card step step1 ">
              <div className="col-content">
                <img src={frame4} alt />
                <h1 className="font-span text-center m-0">
                  Richiedi un Preventivo
                </h1>
                <p>
                  Senza impegno un nostro Solar expert ti contatterâ per
                  verificare Ie tue esirenze ditilizzn
                </p>
              </div>
            </div>
            <div className="step-card w-auto step step2 ">
              <div className="col-content">
                <img src={frame4} alt />
                <h1 className="font-span text-center m-0">
                  Richiedi un Preventivo
                </h1>
                <p>
                  Senza impegno un nostro Solar expert ti contatterâ per
                  verificare Ie tue esirenze ditilizzn
                </p>
              </div>
            </div>
            <div className="step-card w-auto step step3">
              <div className="col-content">
                <img src={frame4} alt />
                <h1 className="font-span text-center m-0">
                  Richiedi un Preventivo
                </h1>
                <p>
                  Senza impegno un nostro Solar expert ti contatterâ per
                  verificare Ie tue esirenze ditilizzn
                </p>
              </div>
            </div>
            <div className="step-card w-auto step step4">
              <div className="col-content">
                <img src={frame4} alt />
                <h1 className="font-span text-center m-0">
                  Richiedi un Preventivo
                </h1>
                <p>
                  Senza impegno un nostro Solar expert ti contatterâ per
                  verificare Ie tue esirenze ditilizzn
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Processing;
