import React from "react"; 

const MajestyCard = () => {
  return (
    <div className="hero-section">
      {/* Background Image */}
      <img
        src={require("../assets/heropapa.jpeg")}
        alt="Background"
        className="background-image"
      />

      {/* Content on top of the image */}
      <div className="content">
        <p className="title">Sa Majesté Maître</p>
        <h1 className="name font-great-vibes">Misselel Bernard</h1>
        <p className="dates">
          <span>1967</span>
          <span className="separator">—</span>
          <span>2024</span>
        </p>
        

        <div className="buttons">
          <button className="btn program" onClick={()=>{
                const rsvpSection = document.getElementById('program');
                rsvpSection.scrollIntoView({ behavior: 'smooth' });
            }} >Programme</button>
          <button className="btn testimony" onClick={()=>{
                const rsvpSection = document.getElementById('testimonials');
                rsvpSection.scrollIntoView({ behavior: 'smooth' });
            }}>Témoignage</button>
        </div>

        <div className="verse">
          <small className="bible-verse my-6">
            Cet homme jamais ne tombera, toujours on fera mémoire du juste.
            <span className="reference"> Psaumes 111:6</span>
          </small>
          
        </div>

      </div>
    </div>
  );
};

export default MajestyCard;
