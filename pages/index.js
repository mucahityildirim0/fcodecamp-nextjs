import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Events App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <img />
          <a href="/">Home</a>
          <a href="/events">Events</a>
          <a href="/about-us">About Us</a>
        </nav>
      </header>
      <main className={styles.main}>
        <a>
          <img />
          <h2>Events in London</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            illo quos voluptatum tempora, molestiae inventore fuga corrupti
            placeat est reiciendis fugiat hic voluptatibus repellendus amet
            porro beatae natus expedita praesentium officiis vel dolore
            consectetur obcaecati modi eos. Odio, expedita quo.
          </p>
        </a>
        <a>
          <img />
          <h2>Events in San Francisco</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            illo quos voluptatum tempora, molestiae inventore fuga corrupti
            placeat est reiciendis fugiat hic voluptatibus repellendus amet
            porro beatae natus expedita praesentium officiis vel dolore
            consectetur obcaecati modi eos. Odio, expedita quo.
          </p>
        </a>
        <a>
          <img />
          <h2>Events in Barcelona</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            illo quos voluptatum tempora, molestiae inventore fuga corrupti
            placeat est reiciendis fugiat hic voluptatibus repellendus amet
            porro beatae natus expedita praesentium officiis vel dolore
            consectetur obcaecati modi eos. Odio, expedita quo.
          </p>
        </a>
      </main>
      <footer className={styles.footer}></footer>
    </>
  );
}
