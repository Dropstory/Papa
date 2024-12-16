 import React, { useRef} from 'react';


const ProgramCard = () => {
  const tesref = useRef(null);
  return (
    <div className="program-card" ref={tesref} id="program">
      <div className="left-program">
        <img src={require("../assets/papahero.jpeg")} alt="" className="program-image"  />
        <div className="insigna">
          <h1 className="name font-great-vibes">Me. Misselel Bernard</h1>
          <p className="dates">
            <span>1967</span>
            <span className="separator">—</span>
            <span>2024</span>
          </p>
        </div>
      </div>
      <div className="right-program">
      <div className="program-headings">
        <h2 className="heading">Programme</h2>
        <small className="homage">
              Hommage à Sa Majesté Maître Bernard MISSELEL Douala du 03 au 04 Janvier
              2024
          </small>
      </div>
      <div className="day-sections">
        {/* Day 1 */}
      <div className="day-section">
        <div className="date"><p className="date-text">03<br/>-<br/>01<br/>-<br/>2025</p></div>
        <div className="day-events">
        <div className="event">
          <span className="time">10:00</span>
          <span className="description">Levée de corps (cliniques)</span>
        </div>
        <div className="event">
          <span className="time">11:30</span>
          <span className="description">Hommage judiciaire à la Cour d'Appel</span>
        </div>
        <div className="event">
          <span className="time">15:30</span>
          <span className="description">
            Arrivée au domicile de Sa Majesté Bernard Misselel
          </span>
        </div>
        <div className="event">
          <span className="time">20:00</span>
          <span className="description">
            Messe, témoignages et animations culturelles
          </span>
        </div>
        </div>
      </div>

      {/* Day 2 */}
      <div className="day-section">
      <div className="date"><p className="date-text">04<br/>-<br/>01<br/>-<br/>2025</p></div>
        <div className="day-events">
        <div className="event">
          <span className="time">10:00</span>
          <span className="description">
            Messe à la cathédrale St. Pierre et Paul
          </span>
        </div>
        <div className="event">
          <span className="time">13:00</span>
          <span className="description">Départ pour l'enterrement</span>
        </div>
        <div className="event">
          <span className="time">16:00</span>
          <span className="description">Collation</span>
        </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default ProgramCard;
