import '../styles/Skills.css'
import React from "react";

const Skills = () => {
    return (
        <div>
            <h2 className={"title"}>
                Skills
            </h2>
            <ul className={"skills-container"}>
                <li>
                    Java, Spring
                </li>
                <li>
                    Golang
                </li>
                <li>
                    C/C++
                </li>
                <li>
                    Python, PyGame, Aiogram
                </li>
                <li>
                    HTML, CSS, JavaScript
                </li>
                <li>
                    English level 5.5 IELTS
                </li>
            </ul>
        </div>
    );
};

export default Skills;