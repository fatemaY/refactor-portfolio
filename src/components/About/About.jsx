import React from "react";
import './About.css'
import profilepic from "../../assets/images/avatar.png"
import TechSkills from "./TechSkills";

export default function About() {
    return ( 
        <section >
            <section className="about" id="about">
            <div className="about-me">
              <h1 className="title1"> Who <b className="purple"> I am</b></h1>
              <img className="profile-pic" src={profilepic} alt="profile picture" />
                <p>
                Hi, I am Fatema,
                self-driven, passionate learner and developer focusing on Html, React, Javascript, Node,
                and Java Technologies. Looking forward to working with ingenious teams on challenging 
                projects.
                I’m an easy going person that works well with everyone. 
                I enjoy being around different types of people and I like to always 
                challenge myself to improve at everything I do.
                I have a great passion for learning languages and exploring the world and also programming.
                I have always loved technology and programming. And this is my profession now.
                </p>
            </div>
            </section>
            <div className="skills">
               <TechSkills />
            </div>
            
        </section>
    );
}
