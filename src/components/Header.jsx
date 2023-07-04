import React from 'react'
import logo1 from "./assets/logo 1.png"
import callIcon from "./assets/vectors/call-icon.svg"
import envelop from "./assets/vectors/envelop.svg"
import Nav from './Nav'

const Header = () => {
  return (
    <>
    
    <div className="header-contact-container-upper w-100 border-bottom">
  <div className="container">
    <div className="row d-flex align-items-center " style={{padding: '15px 0px'}}>
      <div className="col-4 col-md-2 col-sm-6">
        <img src={logo1} style={{width: 92, height: 44}} alt="logo" />
      </div>
      <div className="col-8 col-md-10 col-sm-6  mobile-contacts">
        <a className="text-dark" style={{fontSize: 20}} id="open-menu" href="javascript:void(0)"><i className="fa fa-bars d-flex align-items-center justify-content-end  w-100" /></a>
      </div>
      <div className="col-8 col-md-10 col-sm-6 desktop-contacts">
        <div className="header-contact-upper d-flex align-items-center justify-content-end  w-100">
          <div className="header-contact">
            <img src={callIcon} alt="icon" />
            <span className="font-span" style={{color: 'var(--dark)'}}>0203 519 4420</span>
          </div>
          <div className="header-contact" style={{margin: '0px 40px'}}>
            <img src={envelop} alt="envelop" />
            <span className="font-span" style={{color: 'var(--dark)'}}>info@solarinovatio.com</span>
          </div>
          <div className="header-contact">
            <a className="text-white" style={{backgroundColor: 'var(--green)'}} href="javascript:void(0)">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<Nav/>

    </>
  )
}

export default Header