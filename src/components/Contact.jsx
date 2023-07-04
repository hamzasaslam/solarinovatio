import React from "react";
import Vector6 from "./assets/vectors/7454 (6).png"
import Vector5 from "./assets/vectors/7454 (5).png"
import Group427323699 from "./assets/vectors/Group 427323699.png"
const Contact = () => {
  return (
    <>
      <div
        className="contact-section-container-upper w-100"
        style={{ padding: "40px 0", position: "relative", zIndex: 1 }}
      >
        <h1 className="section-heading text-center">CONTATTACI</h1>
        <div className="container" style={{ marginTop: 80 }}>
          <div
            className="row d-flex align-items-center justify-content-between"
            style={{ gap: 30 }}
          >
            <div className="col-lg-4 col-md-12">
              <div className="adress">
                <div className="adress-section d-flex">
                  <div
                    className="adress-img"
                    style={{ marginBottom: "auto", marginRight: 15 }}
                  >
                    <img src={Vector6} alt />
                  </div>
                  <div className="adress-content">
                    <p>
                      Leo dui fermentum tristique urna tellus eget amet aliquam.
                      Id vitae orci
                    </p>
                  </div>
                </div>
                <div className="adress-section d-flex">
                  <div
                    className="adress-img"
                    style={{ marginBottom: "auto", marginRight: 15 }}
                  >
                    <img src={Group427323699} alt />
                  </div>
                  <div className="adress-content">
                    <p>
                      email@email.com <br /> support@email.com
                    </p>
                  </div>
                </div>
                <div className="adress-section d-flex">
                  <div
                    className="adress-img"
                    style={{ marginBottom: "auto", marginRight: 15 }}
                  >
                    <img src={Vector5} alt />
                  </div>
                  <div className="adress-content">
                    <p>+29 98595 8998</p>
                  </div>
                </div>
              </div>
              <p
                style={{
                  color: "#363636",
                  fontFamily: "Poppins",
                  fontSize: 16,
                  fontWeight: 400,
                  letterSpacing: "0em",
                  textAlign: "left",
                  marginTop: 20,
                }}
              >
                We Will get back to you within 24 hours. Or Call us Now
              </p>
            </div>
            <div className="col-lg-7 col-md-12">
              <form className="g-2">
                <div className="form-row d-flex" style={{ gap: 10 }}>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div className="form-row" style={{ marginTop: 10 }}>
                  <div className="col">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="form-row" style={{ marginTop: 10 }}>
                  <div className="col">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={5}
                      placeholder="Massage"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="form-row" style={{ marginTop: 10 }}>
                  <div className="col text-right w-100">
                    <button
                      type="submit"
                      className="btn text-white d-block"
                      style={{
                        marginLeft: "auto",
                        maxWidth: 141,
                        width: 140,
                        padding: 10,
                        backgroundColor: "var(--green)",
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
