import React from "react";
import "./Social.css";
import { SiGithub } from "react-icons/si";
import { GrLinkedin } from "react-icons/gr";
import { TiSocialTwitter } from "react-icons/ti";

export default function Social() {
    return (
        <section>
        <h1 className="follow" >Follow <b className="purple">Me..</b></h1>
        <section className="social" id="social">
            <a href="https://github.com/fatemaY" target="_blank">
                <SiGithub className="icon" />
            </a>
            <a
                href="https://www.linkedin.com/in/fatema-yasen-460b96213/"
                target="_blank"
            >
                <GrLinkedin className="icon" />
            </a>
            <a href="https://twitter.com/fatemayas" target="_blank">
                <TiSocialTwitter className="icon" />
            </a>
        </section>
        </section>
    );
}
