const Biographie = () =>{
    const biosecs= [
        {
            "section":"Origines et enfance", 
            "text":"Né le 13 décembre 1967. Sa Majesté Me. Bernard MISSELEL grandit dans le Moungo plus précisément à Loum chantier kmg9, au sein d'une famille d'agriculteurs. Malgré une santé fragile à sa naissance et les pertes douloureuses de proches notammnent sa petite sSur Marie alors qu'il n'avait que 6 ans, il se démarque dès son jeune âge par son altruisme, sa maturité et une foi profonde. Il promet à sa mère de vivre pour la soutenir, une promesse qu'il honore tout au long de sa vie."
        },
        {
            "section":"Formation et vocation", 
            "text":"Après son baccalauréat, il envisage la prêtrise mais découvre que son appel réside dans le service de son prochain. Il finance ses études en droit privé francophone grâce à un dur labeur dans les champs. En 1996, il obtient sa licence et est pris sous l'aile de Me Singha, un génie du droit privé francophone qui lui transmet les valeurs du métier."
        }, 
        {
            "section":"Vie de famille et engagements spirituels",
            "text":"Le 14 juin 2003. il épouse l'amour de sa vie, bâtissant une famille de cing enfants et accueillant avec joie deux petits-enfants. En 2009, il devient ancien de son église, un role qui reflète son dévouement à sa foi et à sa communauté."
        },
        {
            "section":"Carrière, leadership et impact",
            "text":"Avocat respecté, il consacre sa vie à défendre les opprimés età soutenir les plus démunis, notamment les orphelins et les veuves. Il était également un chef traditionnel du 3e degré, profondément engagé pour le développement de la communauté Banen, contribuant à son épanouissement et à la préservation de ses valeurs. Il considérait son succès comme un don de Dieu, qu'il metait fièrement au service des autres."
        },
        {
            "section":"Héritage spirituel et humain",
            "text":"Homme de foi et d'humilitil incarne le courage, la persévérance et l'amour inconditionnel. Son impact dépasse sa propre vie, et il lègue à ceux qui l'ont connu un appel à poursuivre son euvre d'amour et de solidarité, avec pour guide Jésus-Christ."
        },
        {
            "section":"Conchusion", 
            "text":"Même dans la tragédie de sa perte, Sa Majesté Me. Bernard MISSELEL demeure notre rempart. Son exemple de foi, de courage et d'altruisme continue de nous guider et de nous pro téger. Il vit à travers les valeurs qu'il a semées en nous, et son héritage demeure un phare dans nos vies. Que son esprit de dévouement et son amour infini pour les autres nous inspirent chaque jour à poursuivre son Suvre. Il est, et restera, notre force et notre référence."
        }
    ]; 

    return(
        <section className="biographie">
            <div className="bio-heading">
                <h2 className="font-great-vibes">Biographie</h2>
                <p className="">le parcours d'un père, d'un chrétien et d'un défenseur de la vérité</p>
            </div>
            <div className="bio-content">
                <div className="bio-content_section">
                    {
                        biosecs.map((item, index)=>(
                            <div className="bio-content_section-item">
                                <h3 className="font-great-vibes">{item.section}</h3>
                                <p className="">{item.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Biographie; 