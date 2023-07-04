import React from "react";
import Vector4 from "./assets/vectors/7454 (4).png"
const Newsletter = () => {
  return (
    <>
      <div
        className="news-letter-container-upper w-100"
        style={{ padding: "40px 0", position: "relative", zIndex: 1 }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="news-letter-content">
                <h2 className="text-white">Subscribe for Newsletter</h2>
                <p className="text-white">
                  Leo dui fermentum tristique urna tellus eget amet aliquam. Id
                  vitae orci maecenas tortor odio
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-end">
              <div className="email-push bg-light p-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Inserisci la tua email"
                  id
                />
                <a href>
                  <img src={Vector4} alt />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
