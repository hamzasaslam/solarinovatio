import React, { useEffect } from 'react';

const FAQ = () => {
  useEffect(() => {
    const handleAccordionClick = (event) => {
      const accordionItems = document.querySelectorAll('.custom-accordion-item');
      const currentItem = event.currentTarget.parentNode;
      
      if (currentItem.classList.contains('active')) {
        currentItem.classList.remove('active');
      } else {
        accordionItems.forEach((item) => {
          item.classList.remove('active');
        });
        currentItem.classList.add('active');
      }
    };

    const accordionHeaders = document.querySelectorAll('.custom-accordion-header');
    accordionHeaders.forEach((header) => {
      header.addEventListener('click', handleAccordionClick);
    });

    return () => {
      accordionHeaders.forEach((header) => {
        header.removeEventListener('click', handleAccordionClick);
      });
    };
  }, []);

  return (
    <>
      <div className="accordion-section-container-upper w-100" style={{ padding: '40px 0', position: 'relative', zIndex: 1 }}>
        <h1 className="section-heading text-center">Connettiti al sole anche tu</h1>
        <div className="container">
          <div className="custom-accordion">
            <div className="custom-accordion-item active">
              <div className="custom-accordion-header">
                <i className="fa fa-plus custom-icon" />
                <i className="fa fa-minus custom-icon2" style={{ fontSize: 0, visibility: 'hidden' }} />
                Dove si monta S.I.R.E.?
              </div>
              <div className="custom-accordion-content">
                <p>S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina,
                  porta,
                  finestra </p>
              </div>
            </div>
            <div className="custom-accordion-item">
              <div className="custom-accordion-header">
                <i className="fa fa-minus custom-icon2" style={{ fontSize: 0, visibility: 'hidden' }} />
                <i className="fa fa-plus custom-icon" />
                Quanto tempo impiega l’installazione?
              </div>
              <div className="custom-accordion-content">
                <p>Nulla ac ligula eu felis dapibus auctor vel vitae justo.</p>
              </div>
            </div>
            <div className="custom-accordion-item">
              <div className="custom-accordion-header">
                <i className="fa fa-minus custom-icon2" style={{ fontSize: 0, visibility: 'hidden' }} />
                <i className="fa fa-plus custom-icon" />
                Quanto tempo impiega l’installazione?
              </div>
              <div className="custom-accordion-content">
                <p>Etiam non justo vitae lectus ullamcorper vestibulum nec ac felis.</p>
              </div>
            </div>
            <div className="custom-accordion-item">
              <div className="custom-accordion-header">
                <i className="fa fa-minus custom-icon2" style={{ fontSize: 0, visibility: 'hidden' }} />
                <i className="fa fa-plus custom-icon" />
                Quanto tempo impiega l’installazione?
              </div>
              <div className="custom-accordion-content">
                <p>Etiam non justo vitae lectus ullamcorper vestibulum nec ac felis.</p>
              </div>
            </div>
            <div className="custom-accordion-item">
              <div className="custom-accordion-header">
                <i className="fa fa-minus custom-icon2" style={{ fontSize: 0, visibility: 'hidden' }} />
                <i className="fa fa-plus custom-icon" />
                Quanto tempo impiega l’installazione?
              </div>
              <div className="custom-accordion-content">
                <p>Etiam non justo vitae lectus ullamcorper vestibulum nec ac felis.</p>
              </div>
            </div>
            <div className="custom-accordion-item">
              <div className="custom-accordion-header">
                <i className="fa fa-minus custom-icon2" style={{ fontSize: 0, visibility: 'hidden' }} />
                <i className="fa fa-plus custom-icon" />
                Quanto tempo impiega l’installazione?
              </div>
              <div className="custom-accordion-content">
                <p>Etiam non justo vitae lectus ullamcorper vestibulum nec ac felis.</p>
              </div>
            </div>
            <div className="custom-accordion-item">
              <div className="custom-accordion-header">
                <i className="fa fa-minus custom-icon2" style={{ fontSize: 0, visibility: 'hidden' }} />
                <i className="fa fa-plus custom-icon" />
                Quanto tempo impiega l’installazione?
              </div>
              <div className="custom-accordion-content">
                <p>Etiam non justo vitae lectus ullamcorper vestibulum nec ac felis.</p>
              </div>
            </div>
          </div>
          <div className="action-button w-100 text-center mt-5 pt-3">
            <a className="text-white text-center" style={{ backgroundColor: 'var(--green)' }} href="javascript:void(0)">Collegati al sole</a>
          </div>
          <img src="/assets/vectors/Group 427324402.png" style={{ position: 'absolute', width: 162, bottom: '-11%', left: '7%', zIndex: 0 }} alt="" />
        </div>
      </div>
    </>
  );
};

export default FAQ;
