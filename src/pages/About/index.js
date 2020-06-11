import React from "react";
import "./styles.css";

export default function About() {
  return (
    <div className="about">
      <div className="about-section">
        <p>
          Hi there! Welcome to my sushi store frontend website! I'm Adriano Yuji
          Sato de Vasconcelos, I'm a 22 years old soon to be computer engineer
          Frontend developer and this is my little personal project.
        </p>
        <p>
          This website was developed in order to challenge myself so I can
          improve my creativity, decision making and Frontend skills, feel free
          to test and play around this sushi online store!
        </p>
        <p>
          This website was developed with:
          <li>React Hooks</li>
          <li>React Context</li>
          <li>Bootstrap</li>
          <li>React Hook Forms</li>
          <li>FontAwesome Icons</li>
          <li>Firestore</li>
        </p>
        <p>
          <a href="https://github.com/adrianoyuji/sushi-store-website">
            Click here
          </a>{" "}
          to check the source code on GitHub.
        </p>
        <p>
          <a href="https://www.linkedin.com/in/adriano-yuji-sato-de-vasconcelos-034b09191/">
            Click here
          </a>{" "}
          to check my Linkedin profile, feel free to send me a message!
        </p>
        Email: adrianoyuji@gmail.com
      </div>
    </div>
  );
}
