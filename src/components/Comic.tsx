import React, {useState} from 'react';
import {formatDistanceToNow} from 'date-fns';
import '../styles/Comic.css'

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

    const fetchComic = async () => {

            const idResponse = await fetch('https://fwd.innopolis.university/api/hw2?email=a.gaznanov@innopolis.university');
            const idJson = await idResponse.json();
            const identifierData: IdentifierResponse = { id: idJson.toString() };
            const params: URLSearchParams = new URLSearchParams();
            params.append('id', identifierData.id);

            const comicResponse = await fetch('https://fwd.innopolis.university/api/comic?' + params.toString());
            const comicData: ComicResponse = await comicResponse.json();

            setComicData(comicData);

    };

    return (
        <div>
            <button onClick={fetchComic}>Get Comic</button>
            {comicData && (
                <div id="image-container">
                    <img id="comic-page-display" src={comicData.img} alt={comicData.alt}/>
                    <p id="comic-title">{comicData.safe_title}</p>
                    <p id="comic-date">The comic was
                        published {formatDistanceToNow(new Date(comicData.year, comicData.month - 1, comicData.day))} ago</p>
                    <button id="close-button" onClick={() => setComicData(null)}></button>
                </div>
            )}
        </div>
    );
};

export default Comic;