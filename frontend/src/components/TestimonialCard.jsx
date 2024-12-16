import React from 'react'; 

const TestimonialCard = ({ text, name, expanded }) => {
  return (
    <div className={`testimonial-card ${expanded ? 'expanded' : ''}`}>
      <p className="testimonial-text">{text}</p>
      <div className="testimonial-content"> 
        <p className="testimonial-name">{name}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
