import React from 'react'

const Nav = () => {
  return (
    <>
     <div id="menu-item" className="header-links-container-upper w-100 ">
  <div className="container">
    <div className="row d-flex align-items-center" style={{padding: '15px 0px'}}>
      <div className="col-12 w-100 ">
        <ul className="list-unstyled d-flex align-items-center justify-content-between w-100 m-0">
          <li><a className="active" href="#home">Home</a></li>
          <li><a href="#chisiamo">Chi Siamo</a></li>
          <li><a href="#sire">S.I.R.E</a></li>
          <li><a href="#features">SIRE Features</a></li>
          <li><a href="#whysire">Why SIRE ?</a></li>
          <li><a href="#products">SIRE Product</a></li>
          <li><a href="#howwork">How it Works?</a></li>
        </ul>
      </div>
      <div className="col-12 mobile-contacts">
        <div className="header-contact-upper d-flex align-items-center  w-100">
          <div className="header-contact">
            <img src="/assets/vectors/call-icon.svg" alt="call" />
            <span className="font-span" style={{color: 'var(--dark)'}}>0203 519 4420</span>
          </div>
          <div className="header-contact" style={{margin: '0px 0 15px 0'}}>
            <img src="/assets/vectors/envelop.svg" alt="envelop" />
            <span className="font-span" style={{color: 'var(--dark)'}}>info@solarinovatio.com</span>
          </div>
          <div className="header-contact">
            <span>
              <a className="text-white" style={{backgroundColor: 'var(--green)'}} href="javascript:void(0)">Contact Us</a></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Nav