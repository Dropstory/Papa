import React, { useRef, useEffect ,useState} from 'react';
import TestimonialCard from './TestimonialCard'; // Import the reusable component 

const TestimonialSection = () => {
  const scrollContainerRef = useRef(null);
  const tesref = useRef(null);

  const [expandedIndex, setExpandedIndex] = useState(null); 

 

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 300;
    }
  };

  const handleTextClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += 1; // Scrolling speed
      }
    }, 10);

    return () => clearInterval(interval);
  }, []);



  const testimonials =[
    {text:"Mon premier ministre, Mon Père et mon grand frère tu as été pour moi un modèle. mon confident mais la mort t'a pris au moment où on s'attendait le moins..."
       , name:"Ton Petit frère bien aimé Somb Thomas"
    }, 
    {
        text:"Maître, Cher parrain, Tu as vécu une vie pleine et tu as marqué ton temps. Désolé que nous n'ayions pu aux moyens de la médecine la prolonger. De là haut tu continueras a veiller sur ta famille. Que ton âme repose en paix.",
        name:"Timnou Bekouti Jean"
    },
    {
        text:"Brii comme jaimais bien t'appeler je te pleurerais toute toute ma vie et que le seigneur accueille ton âme dans sa félicité céleste.",
        name:"Koumi ta mère"
    },
    {
        text:"Mon Tonton, je t'ai toujours appelé ainsi car pour moi tu étais un modèle, un papa amnbian ceur, la dernière fois que je tai appelé. tu m’as dit que tu rentrais bientôt et en forme, le seigneur en a décidé autrement, vas et reposes en paix mon Tonton.",
        name:"Ton Tonton Cyril",
    }, 
    {
        text:"Un être exceptionnel s'en est allé, laissant derrière lui un vide immense. À jamais dans mon coeur mon cher père", 
        name:"Ta fille chérie, Chou"
    }, 
    {
        text:"J'ai pas de mots pour exprimer ce que je ressens...!., j'ai du mal à parler de toi à l'imparfait. A tes côtés j'ai beaucoup appris: Tes conseils, ta froideur face aux situations, ton coeur de pardon., on dirait Jésus Christ, ton extrême charité et générosité, ta bonne humeur, ton amour non calculé envers nous tous(tu ne savais pas faire de distinction entre tes enfants que nous sommes ), toujours à lécoute des autres... Sont des enseignements que jai bien assimilés en marchant avec toi au quotidien.",
        name:"Sa Majesté le Chef de ta mère"
    },
    {
        text:"\"Agnès chérie\", comme tu m'appelait affectueusement. Ton départ de ce monde, je ne l'ai pas vu venir. J'ai gardé espoir jusqu'au à la dernière minute mais notre SEIGNEUR en a décidé autre ment que son nom soit glorifié. Je garde le toi quelqu'un de très joyeux. Je t'avais rarement vu en colère. Cette joie de vivre, nos multiples folies en famille vont vraiment me manquer. Vas et repose en paix dans la maison de ton père en qui tu as toujours cru", 
        name:"Agnès Monif"
    }, 
    {
        text:"Prési, BRIO C'est ainsi que nous t'appelions avec affection depuis 2006, lorsque tu as rejoint le groupe DISTINGUISHED LAWYERS. En 18 ans, tu as fait preuve dune humanité profonde, d'une générosi té immense et d'une foi solide. Toujours modéré et tolérant, tu savais nous guider avec sagesse. on départ soudain et brutal le 29 novembre 2024 laisse un vide immense au sein de notre famille DISTINGUISHED. Face à cette épreuve, nous nous résignons avec tristesse. Va en paix, cher Président. Tu resteras à jamais dans nos coeurs.",
        name:"Famille DISTINGUISHED"
    }, 
    {
        text:"Mon premier beau-fils, les mots me manquent pour exprimer ma tristesse. Tu étais un beau exemplaire, celui dont tout père souhaitait avoir comme gendre ; au fil des années tu es devenu mon premier fils. Tu t'en va précocement me laissant encore sur cette terre ... eh Bernard !! Mais sache qu'il ny a pas de date d'expiration pour l'anour entre un père et son enfant. Mon fils tu resteras à jamais dans mon coeur ce n'est qu'un au revoir va et repose en paix",
        name:"Ton beau-père M. Pierre SITSO"
    }, 
    {
        text:"Tonton, tu étais bien plus qu'un beau-frère pour moi. Ton courage face à la maladie et ta foi en Christ étaient inspirants. Tu me disais souvent: « Ça va aller petite fille », mais depuis que tu es parti, rien ne va. Je suis reconnaissante pour tous les moments partagés et tes conseils enmpreints de sagesse et d'amour. Tu étais un pilier pour nous tous. Malgré la douleur de ton absence, je trouve du réconfort en sachant que tu reposes auprès du Seigneur dans une paix éternelle. Repose en paix, tonton.", 
        name:"Ta belle-seur, Mme Florence TIEMENI"
    },
    {
        text:"Mon Amour de grand frère, mon avocat tu nous as laissé une grosse empreinte indélébile qui a marqué ton existence, ta joie de vivre, ta danse, ton amour envers ta amille ton entourage. Sache que je t'oublierai jamais mon SIRIKI nooooo tu vas me manquer va et repose en paix que la lumière sans fin brille sur toi. Je t'aime", 
        name:"Brigilte-Lumière"
    },
    {
        text:"Briault mon frère, cela fait environ 46 ans que nos vies se sont croisées, par la volonté de Dieu, à notre entrée en 6e au CES de Loum. Au-delà des années passées à l'école et à l'université, nous avons partagé bien plus : des moments de vie, des chambres, des rires, des débats. Tu étais un homme d'une grande envergure, avec une intelligence vive, un tempérament doux, un caractère ferme et une profonde empathie. Tu étais d'une grande sensibilité, allergique à l'injustice et toujours prêt à défendre l'humain. Tes relations étaient marquées par l'amour et le respect, influencées par ta foi chrétienne. Ta solidarité, ta loyauté et ton écoute nous ont tous touchés. Tu as toujours cherché à soutenir ceux dans le besoin. parfois jusqu'à partager ta chambre avec eux. Je me souviens encore de l'autel dans ta maison, un lieu dédié à la prière, où tu me disais quil fallait toujours réserver la meilleure place à Dieu dans nos vies et nos actions. Aujourd'hui, bien que nous pleurions ta perte, nous célébrons ta vie et ton héritage. Que le Dieu que tu as servi avec tant de dévotion t'accueille dans Sa lumière éternelle.",
        name:"Ton ami d'enfance Collinces"
    },
    {
        text:"Mon chéri, ton passage dans ma vie telle une étoile filante laisse un grand vide. Ton humilité, to générosité, ta gentillesse ton abandon inconditionnel à Dieu ont marqué ton existence Mon Mannequin adoré, mon métisse je sais que tu es dejá dans la joie de ton Dieu que tu as aujours aimé et servi et que les anges et toi êtes dans l'ambiance festive. Tu me manques.",
        name:"Ta femme kuiss"
    }
  ]

 
  return (
    <section className="testimonial-section" ref={tesref} id="testimonials">
      
      <div className="testimonial-headings">
              <h2>Témoignages</h2>
              <p>
                  Nous gardons de lui le souvenir d'un homme pieux, sage, patient et
                  bienveillant dont l'existence a enrichi ceux qui l'ont connu.
              </p>
              <button className="btn testimony-btn"
              onClick={()=>{
                window.open("https://docs.google.com/forms/d/e/1FAIpQLSeBbwUgJsRwLYfga5xjQQdnf4pl5HRJTeKSQd3IyqqNd7n9JA/viewform?usp=preview", '_blank');
              }}>Ajoutez votre témoignage</button>
        </div> 

      <div className="testimonial-card-scroll-container">
        <div className="testimonial-container">
          {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                text={testimonial.text} 
                name={testimonial.name}
              />
            ))}
            
        </div>
      </div>
      
    </section>
  );
};

export default TestimonialSection;
