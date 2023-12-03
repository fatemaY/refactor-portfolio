import React from "react";
import "./Cards.css";
import Card from "./Card";
import minecraft from "../../assets/images/minecraft.png";
import amazon from "../../assets/images/amazon.png";
import rolldice from "../../assets/images/rolldice.png";
export default function Cards() {
    return (
        <main id="projects">
            <h1>Latest <b className="purple"> Projects</b></h1>
            <section className="cards-container">
                <Card
                    title="MineCraft 2D"
                    imgsrc={minecraft}
                    desc="MineCraft Game in 2D - built using HTML CSS JS"
                    link1="https://minecraft-game-fatema.netlify.app/"
                />
                <Card
                    title="AMAZON"
                    imgsrc={amazon}
                    desc="AMAZON Website, you can search add and buy "
                    link1="https://mickeyamazon-appleseeds.netlify.app/"
                />
                <Card
                    title="Roll The Dice"
                    imgsrc={rolldice}
                    desc="Roll The Dice multiplayer game first player to achieve target score wins"
                    link1="https://dicerollassignment.netlify.app/"
                />
            </section>
        </main>
    );
}
