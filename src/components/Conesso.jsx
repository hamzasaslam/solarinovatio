import React from "react";
import Group427324404 from "./assets/vectors/Group 427324404.png"
import Group427324379 from "./assets/vectors/Group 427324379.png"
import Group427324405 from "./assets/vectors/Group 427324405.png"
import Group427324406 from "./assets/vectors/Group 427324406.png"
import Group427324407 from "./assets/vectors/Group 427324407.png"
import Group427324408 from "./assets/vectors/Group 427324408.png"
const Conesso = () => {
  return (
    <>
      <div
        className="connesso-container-upper w-100"
        style={{ padding: "40px 0" }}
      >
        <div className="container">
          <h1 className="section-heading text-center conesso-heading">
            Connesso, Intelligente, Resistente
          </h1>
          <div className="row" style={{ marginTop: 100 }}>
            <div className="col-lg-6 col-md-12 d-flex">
              <div className="conesso-img">
                <img src={Group427324404} alt="conessoo" />
              </div>
              <div className="conesso-content">
                <h2>Versatile</h2>
                <p className="lg-font-span">
                  Installabile in qualsiasi balcone anche all'interno del
                  condominio. Non richiede autorizzazioni ne opere murarie.
                  Utile anche come schermatura solare
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 d-flex">
              <div className="conesso-img">
                <img src={Group427324379} alt="conessoo" />
              </div>
              <div className="conesso-content">
                <h2>Indipendente e Green</h2>
                <p className="lg-font-span">
                  dalle fonte non rinnovabili non è più un’utopia. S.i.r.e.
                  fornisce l’accesso a fonti energetiche green anche a chi non
                  ha un tetto di proprietà.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
    
            <div className="col-lg-6 col-md-12 d-flex">
              <div className="conesso-img">
                <img src={Group427324405} alt="conesoo" />
              </div>
              <div className="conesso-content">
                <h2>Automatizzato</h2>
                <p className="lg-font-span">
                  Totalmente automatico e retraibile, S.I.R.E regola la quantità
                  di sole in casa in base alle necessità. Un perfetto connubio
                  tra sole e ombra. I suoi sensori regolano l'esposizione in
                  base alle condizioni atmosferiche.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 d-flex">
              <div className="conesso-img">
                <img src={Group427324406} alt />
              </div>
              <div className="conesso-content">
                <h2>Connesso</h2>
                <p className="lg-font-span">
                  Il sistema si connette ai dispositivi Alexa, Google,
                  elettrodomestici 2.0 wi-fi. Tramite l’app accedi ai dati di
                  produzione dell’energia e ricevi notifiche e suggerimenti per
                  l’utilizzo ottimale dell’energia autoprodotta.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 d-flex">
              <div className="conesso-img">
                <img src={Group427324407} alt />
              </div>
              <div className="conesso-content">
                <h2>Efficiente</h2>
                <p className="lg-font-span">
                  Il sistema di accumulo permette di conservare l’energia
                  generata in eccesso e renderla disponibile quando serve, per
                  esempio di sera o in giornate nuvolose.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 d-flex">
              <div className="conesso-img">
                <img src={Group427324408} alt />
              </div>
              <div className="conesso-content">
                <h2>Resistente</h2>
                <p className="lg-font-span">
                  Il sistema è realizzato con un rivestimento protettivo,
                  impermeabile, isolante e resistente a fenomeni atmosferici
                  aggressivi, all’abrasione, urti e graffi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Conesso;
