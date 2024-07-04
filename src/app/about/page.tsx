import React from 'react';
import styles from '../styles/about.module.css'

const AboutPage = () => {
    return (
        <div className={styles.aboutText}>
            <h1>Adel Gaznanov</h1>
            <h2>Software Developer</h2>
            <div>
                First year undergraduate student at Innopolis University. Inspired by Elon Musk, Pavel Durov,
            </div>
            <div>
                and David Goggins. Live and breath for software developing. Addicted to gym, coding, skateboarding, and
                walking.
            </div>
            <h2>Education</h2>
            <ul className={styles.education}>
                <li>
                    Innopolis University, Russia. 2023-Present
                </li>
            </ul>
            <h2>
                Skills
            </h2>

            <ul className={styles.skillsContainer}>
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
                    HTML, CSS, JavaScript, React, Next.js
                </li>
                <li>
                    English 5.5 IELTS
                </li>
            </ul>
        </div>
    );
};

export default AboutPage;
