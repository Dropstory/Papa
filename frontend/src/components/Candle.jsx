import React from 'react'; 
import "../sasses/candlesass.css";

const BurningCandle = () => {
  return (
    <div class="holder">
        <div class="candle">
            <div class="blinking-glow"></div>
            <div class="thread"></div>
            <div class="glow"></div>
            <div class="flame"></div>
        </div>
    </div>
  );
};

export default BurningCandle;

