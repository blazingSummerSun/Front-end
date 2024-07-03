import React from 'react';
import '../styles/Bio.css';

import gh from '../assets/github.png'
import tg from '../assets/telegram.png'
import mail from '../assets/gmail.png'
import loc from '../assets/location.png'

const Bio: React.FC = () => {
    return (
        <div className="bio-container">
            <div className="bio_name">
                <h1 className="bio__title">Adel Gaznanov</h1>
                <h2 className="bio__description">Software Developer</h2>
            </div>
            <a href={"https://github.com/blazingSummerSun"}>
                <img src={gh} alt="blazingSummerSun"/>
            </a>
            <a href={"https://t.me/eternald3spair"}>
                <img src={tg} alt="t.me/eternald3spair"/>
            </a>
            <a href={"mailto:eternalblessed99@gmail.com"}>
                <img src={mail} alt="eternalblessed99@gmail.com"/>
            </a>
            <a href={"https://www.google.com/maps/place/Innopolis"}>
                <img src={loc} alt="innopolis"/>
            </a>
            <div>
                <a href="mailto:eternalblessed99@gmail.com" id="email">
                    Email
                </a>
                <a href="https://t.me/eternald3spair" id="tg-link">
                    Telegram
                </a>
                <a href="https://github.com/blazingSummerSun" id="gh-link">
                    GitHub
                </a>
                <a href="https://www.google.com/maps/place/Innopolis" id="location">
                    Location
                </a>
            </div>
            <div className={"bio__description"}>
                First year undergraduate student at Innopolis University. Inspired by Elon Musk, Pavel Durov,
            </div>
            <div>
                and David Goggins. Live and breath for software developing. Addicted to gym, coding, skateboarding, and
                walking.
            </div>
            <h2>Education</h2>
            <ul id="education">
                <li>
                    Innopolis University, Russia. 2023-Present
                </li>
            </ul>
        </div>
    );
};

export default Bio;