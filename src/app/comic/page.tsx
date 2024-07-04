"use client";

import React, {useState, useEffect} from 'react';
import {formatDistanceToNow} from 'date-fns';
import styles from '../styles/comic.module.css';

interface IdentifierResponse {
    id: string;
}

interface ComicResponse {
    img: string;
    year: number;
    month: number;
    safe_title: string;
    alt: string;
    day: number;
}

const Comic: React.FC = () => {
    const [comicData, setComicData] = useState<ComicResponse | null>(null);
    let flag = false

    const fetchComic = async () => {
        const idResponse = await fetch('https://fwd.innopolis.university/api/hw2?email=a.gaznanov@innopolis.university');
        const idJson = await idResponse.json();
        const identifierData: IdentifierResponse = {id: idJson.toString()};
        const params: URLSearchParams = new URLSearchParams();
        params.append('id', identifierData.id);

        const comicResponse = await fetch('https://fwd.innopolis.university/api/comic?' + params.toString());
        const comicData: ComicResponse = await comicResponse.json();
        flag = true;

        setComicData(comicData);

    };


    useEffect(() => {
        fetchComic();
    });

    return (
        <div className={styles.comicContainer}>
            {comicData && (
                <div id="image-container">
                    <img id={styles.comicPage} src={comicData.img} alt={comicData.alt}/>
                    <p id={styles.comicTitle}>{comicData.safe_title}</p>
                    <p id={styles.comicDate}>The comic was
                        published {formatDistanceToNow(new Date(comicData.year, comicData.month - 1, comicData.day))} ago</p>
                </div>
            )}
        </div>
    );

};

export default Comic;
