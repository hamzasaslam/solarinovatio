import React from 'react';
import vector3 from "./assets/7454 (3).png"
import vector1 from "./assets/7454 (1).png"
import vector5 from "./assets/vectors/7454 (5).png"
import vector6 from "./assets/vectors/7454 (6).png"
import Group427323699 from "./assets/vectors/Group 427323699.png"
const Footer = () => {
  return (
    <>
    
        <div className="footer-container-upper w-100" style={{ padding: '0px 0', position: 'relative', zIndex: 1 }}>
          <footer className="footer-section">
            <div className="container">
              <div className="footer-content pt-5 pb-5">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 mb-50 logo-w-text-links">
                    <div className="footer-widget logo-text">
                      <div className="footer-logo">
                        <a href="index.html"><img src={vector3} className="img-fluid" alt="logo" /></a>
                      </div>
                      <div className="footer-text">
                        <p>Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae orci maecenas tortor odio Leo dui fermentum tristique urna tellus eget amet aliquam.</p>
                      </div>
                      <div className="footer-social-icon">
                        <div className="footer-imgs">
                          <img src={vector1} alt="" srcSet="" />
                          <img src={vector1} alt="" srcSet="" />
                          <img src={vector1} alt="" srcSet="" />
                          <img src={vector1} alt="" srcSet="" />
                          <img src={vector1} alt="" srcSet="" />
                          <img src={vector1} alt="" srcSet="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 mb-30 center-links">
                    <div className="footer-widget">
                      <ul>
                        <h2>Quick Links</h2>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Chi Siamo</a></li>
                        <li><a href="#">S.I.R.E</a></li>
                        <li><a href="#">S.I.R.E Features</a></li>
                        <li><a href="#">Why SIRE ?</a></li>
                        <li><a href="#">SIRE Product</a></li>
                        <li><a href="#">How it Works ?</a></li>
                      </ul>
                    </div>
                    <div className="footer-widget">
                      <ul>
                        <h2>Useful Links</h2>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Condition</a></li>
                        <li><a href="#">FAQ</a></li>
                      </ul>
                      <ul>
                        <h2>Documents</h2>
                        <li><a href="#">Lindked Here</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 mb-50 contact-us">
                    <div className="footer-widget">
                      <ul>
                        <h2>Contact Us</h2>
                        <li>
                          <div className="adress-section d-flex">
                            <div className="adress-img" style={{ marginBottom: 'auto', marginRight: '15px' }}>
                              <img src={vector6} alt="" />
                            </div>
                            <div className="adress-content">
                              <p className="text-white" style={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 400, lineHeight: '21px', letterSpacing: '0em', textAlign: 'left' }}>Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae orci</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="adress-section d-flex">
                            <div className="adress-img" style={{ marginBottom: 'auto', marginRight: '15px' }}>
                              <img src={Group427323699} alt="" />
                            </div>
                            <div className="adress-content">
                              <p className="text-white" style={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 400, lineHeight: '21px', letterSpacing: '0em', textAlign: 'left' }}>leo@example.com <br /> support@example.com</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="adress-section d-flex">
                            <div className="adress-img" style={{ marginBottom: 'auto', marginRight: '15px' }}>
                              <img src={vector5} alt="" />
                            </div>
                            <div className="adress-content">
                              <p className="text-white" style={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 400, lineHeight: '21px', letterSpacing: '0em', textAlign: 'left' }}>+29 98595 8998</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright-area">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                    <div className="copyright-text">
                      <p>All Rights Reserved.</p>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 d-lg-block text-right">
                    <div className="footer-menu">
                      <ul>
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
    </>
  );
};

export default Footer;
