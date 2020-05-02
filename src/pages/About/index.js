import React from "react";
import "./styles.css";

export default function About() {
  return (
    <div className="about">
      <div className="about-section">
        <p>
          Hi! This a Sushi Shop website that shows the restaurant's menu and the
          user is able to set up a cart with desired items.
        </p>
        <p>
          This website was developed using:
          <li>React Hooks</li>
          <li>React Context</li>
          <li>Bootstrap</li>
          <li>FontAwesome Icons</li>
          <li>Firebase's Firestore</li>
        </p>
        <p>
          <a href="https://github.com/adrianoyuji/sushi-store-website">
            Click here
          </a>{" "}
          to check out the source code on GitHub.
        </p>
        <p>
          <a href="https://www.linkedin.com/in/adriano-yuji-sato-de-vasconcelos-034b09191/">
            Click here
          </a>{" "}
          to check my profile and to contact me through Linkedin.
        </p>
        Email: adrianoyuji@gmail.com
      </div>
    </div>
  );
}
