import React from "react";
import './Portfolio.css';
import imagename from "./images/DP.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
     faLinkedinIn
  } from "@fortawesome/free-brands-svg-icons";

function Portfolio(){
    return(
        <section>
            <div class="text-container">
                <h1>I'M ANKUSH</h1>
                <img className="dp-img" src={imagename}/>
                <h2>I am a Full Stack Web Developer</h2>
                <p>Current Company: Cognizant</p>
                <a href="https://www.linkedin.com/in/ankush-mishra-39455a166/" className="youtube social">
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                </a>
            </div>
        </section>
    )
}

export default Portfolio;