import React, {ReactNode} from 'react';
import Link from 'next/link';
import './globals.css';
import styles from './layout.module.css';
import Image from "next/image";

interface LayoutProps {
    children: ReactNode;
}

export default function RootLayout({children}: LayoutProps) {

    return (
        <html>
        <body>
        <header>
            <nav>
                <Link href="./about" passHref>
                    <button className={styles.bioButton}>About Me</button>
                </Link>
                <Link href="./projects" passHref>
                    <button className={styles.projectsButton}>Projects</button>
                </Link>
                <Link href="./comic" passHref>
                    <button className={styles.comicButton}>Comic</button>
                </Link>
            </nav>
        </header>

        <main>{children}</main>


        <footer className={styles.footerDescription}>
            <a href={"https://github.com/blazingSummerSun"} >
                <Image src={'./assets/github.png'} alt={"blazingSummerSun"} width={100} height={100}></Image>
            </a>
            <a href={"https://t.me/eternald3spair"}>
                <Image src={'./assets/telegram.png'} alt={"t.me/eternald3spair"} width={100} height={100}></Image>
            </a>
            <a href={"mailto:eternalblessed99@gmail.com"}>
                <Image src={'./assets/gmail.png'} alt={"eternalblessed99@gmail.com"} width={100} height={100}></Image>
            </a>
            <a href={"https://www.google.com/maps/place/Innopolis"}>
                <Image src={'./assets/location.png'} alt={"innopolis"} width={100} height={100}></Image>
            </a>
        </footer>
        </body>
        </html>
    );
}
