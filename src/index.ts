import {formatDistanceToNow} from 'date-fns'

interface IdentifierResponse {
    id: string;
}
``
interface ComicResponse {
    img: string;
    year: number;
    month: number;
    safe_title: string;
    alt: string;
    day: number;
}

document.addEventListener('DOMContentLoaded', () => {

    const getComicButton: HTMLButtonElement = document.getElementById('comic-button') as HTMLButtonElement;

    getComicButton.addEventListener('click', async (): Promise<void> => {
        const idResponse: Response = await fetch('https://fwd.innopolis.university/api/hw2?email=a.gaznanov@innopolis.university');
        const idJson: number = await idResponse.json();
        const identifierData: IdentifierResponse = {id: idJson.toString()}
        const params: URLSearchParams = new URLSearchParams()
        params.append('id', identifierData.id)

        const comicResponse: Response = await fetch('https://fwd.innopolis.university/api/comic?' + params.toString())
        const comicData: ComicResponse = await comicResponse.json()

        const closeComicButton: HTMLButtonElement = document.createElement('button') as HTMLButtonElement
        closeComicButton.id = 'close-button';



        const container: HTMLElement | null = document.getElementById('image-container');
        if (container) {
            const comicPage: HTMLImageElement = document.createElement('img');
            comicPage.id = "comic-page-display";

            const releaseDate: Date = new Date(comicData.year, comicData.month - 1, comicData.day)
            const timeAgo: string = formatDistanceToNow(releaseDate);
            const timeAgoElement: HTMLParagraphElement = document.createElement('p');
            timeAgoElement.id = "comic-date";
            timeAgoElement.textContent = `The comic was published ${timeAgo} ago`;

            const comicTitle: HTMLParagraphElement = document.createElement('p');
            comicTitle.id = "comic-title";
            comicTitle.textContent = comicData.safe_title;

            comicPage.src = comicData.img;
            console.log(comicData.img);
            comicPage.alt = comicData.alt;
            comicPage.style.visibility = 'visible'

            container.appendChild(comicPage);
            container.appendChild(timeAgoElement)
            container.appendChild(comicTitle);
            container.appendChild(closeComicButton);

            closeComicButton.addEventListener('click', function(){
                comicPage.style.visibility = 'hidden';
                timeAgoElement.style.visibility = 'hidden';
                comicTitle.style.visibility = 'hidden';
                closeComicButton.style.visibility = 'hidden';
            })
        }
    });
});