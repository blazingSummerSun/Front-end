import React from 'react';
import '../styles/Projects.css'

const Projects = () => {
    return (
        <div className="title">
            <h2>Projects</h2>
            <div className={"project-container"}>
                <ul>
                    <li>
                        <div>
                            RPG game in C++ with interactions through console. In the game the following characters were
                            implemented:
                            Fighter, Archer, and Wizard.
                        </div>
                        <div>
                            Fighters can either perform melee attacks or use medkits. Archers can perform melee attacks,
                            cast spells,
                            or use medkits. Wizards
                        </div>
                        <div>
                            can either cast spells or use medkits. Each fighter can have at most 5 weapons and 3
                            medkits.
                            Each archer can have at most 10 weapons,
                        </div>
                        <div>
                            10 medkits, and 5 spells. Each wizard can have at most 10 spells and 10 medkits.
                            The game implemented the following mechanics:
                        </div>
                        <div>
                            inventory, creation/destruction items, healing/decreasing HP, and duels.
                            <a href="https://github.com/blazingSummerSun/SSAD/blob/main/Assignment_2.cpp"
                               className={"project-link"}>Link
                                on GitHub</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            Telegram bot on Golang storing some links for saved sources. A user sends the link he wants
                            to save, and
                            during the time the bot sends a
                        </div>
                        <div>
                            random link back as a reminder for a user that 'Hey, here is a link you saved once. Don't
                            forget to visit
                            it!'.
                            This can be useful for users who
                        </div>
                        <div>
                            often save links but forget to read them after a while.
                            <a href="https://github.com/blazingSummerSun/Go-projects/tree/main/Telegram%20Bots/URL%20reminder"
                               className={"project-link"}>
                                Link on GitHub </a>
                        </div>
                    </li>
                    <li>
                        <div>
                            Parser on Python parsing the website with information about all dishes (amounts of protein,
                            calories,
                            fats, and carbohydrates) in .csv format.
                        </div>
                        <div>
                            It could be useful for those who don't want to waste their time on searching for specific
                            dishes to count the amount of proteins/calories there.
                        </div>
                        <div>
                            <a href="https://github.com/blazingSummerSun/Python-projects/blob/main/Parsers/diet.py"
                               className={"project-link-last"}>Link on GitHub</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Projects;