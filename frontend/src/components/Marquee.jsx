import { useState, useEffect, useRef } from 'react';

export default function MarqueeSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRefs = useRef([]);
 
 
  return (
    <section className="marquee-section my-5">
          <div className='marquee-header'>
          <h2 className="font-great-vibes">à jamais dans nos cœurs</h2>
          <p className="">le Seigneur, dans sa sagesse, a choisi de nous donner plus de qualité que de quantité. Que son nom soit loué à jamais.</p>
          </div> 
          <div className="marquee"> 
            <img src={require("../assets/image5.png")} alt="Image 2" className='item animation-class item1'/>
            <img src={require("../assets/image8.png")} alt="Image 3" className='item animation-class item2'/>
            <img src={require("../assets/image7.png")} alt="Image 5" className='item animation-class item3'/> 
            <img src={require("../assets/image2.png")} alt="Image 5" className='item animation-class item4'/> 
            <img src={require("../assets/image5.png")} alt="Image 4" className='item animation-class item3'/>
            <img src={require("../assets/image4.png")} alt="Image 2" className='item animation-class item5'/>
            <img src={require("../assets/image3.png")} alt="Image 3" className='item animation-class item6'/>
            <img src={require("../assets/image6.png")} alt="Image 4" className='item animation-class item7'/>
            <img src={require("../assets/image1.png")} alt="Image 5" className='item animation-class item8'/>
          </div>  
          <small className="my-5">© 2024 Dropstory, Inc. All rights reserved.</small>
        </section>
  );
}