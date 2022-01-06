import React from "react";

const About = () => {
    return (
        <article className="about">
            <h2 className="about-header">About this playlist</h2>
            <p>Deze playlist is geschreven in React in combinatie met Vanilla JS, met Redux voor state management. Dit is de eerste keer dat ik Redux gebruik. Erg veel boilerplate om het aan de gang te krijgen, maar ontzettend handig als je dezelfde informatie in meerdere componenten wilt gebruiken. De Redux Toolkit (RTK) maakt het allemaal nog eenvoudiger. Daar ga ik in latere opdrachten mee aan de slag.</p>

            <p>Een belangrijk verbeterpunt is de mappenstructuur. Nu staan alle componenten door elkaar en is er één stylesheet waar alle rulesets bij elkaar geplempt staan. Voor een klein project als dit maakt dat niet heel veel uit, maar voor grotere projecten is het belangrijk om afzonderlijke mappen te creëren voor alle componenten of herbruikbare componentgroepen. Daarnaast is het handig om action constants te maken zodat je meteen kunt zien welke action types je hebt. Dit is opnieuw niet per se nodig voor dit kleine project, maar in grotere codebases is dat wel een must.</p>
        </article>
    )
}

export default About