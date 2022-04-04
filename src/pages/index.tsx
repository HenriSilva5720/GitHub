import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Header from "../components/Header";
import styles from "./home.module.css";
import github_img from "../../public/github_img.svg";
import { useOrganization } from "../providers/Organization";

export default function HomePage() {
  const { searchOrganization } = useOrganization();

  const [input, setInput] = useState("");

  async function handleSubmit() {
    if (!input) return;

    await searchOrganization(input);

    setInput("");
  }

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/github_favicon.svg" />
        <title>GitHub</title>
      </Head>
      <Header />
      <main className={styles.container}>
        <div className={styles.containerContent}>
          <h1 className={styles.title}>Search For Your Organization Here!</h1>
          <p className={styles.subtitle}>
            Millions of developers and companies build, ship, and maintain their
            software on GitHub — the largest and most advanced development
            platform in the world.
          </p>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              placeholder="Search your org"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyUp={(e) => {
                if (e.key !== "Enter") return;

                handleSubmit();
              }}
            />
            <button className={styles.button} onClick={handleSubmit}>
              Search
            </button>
          </div>
        </div>
        <div className={styles.containerImage}>
          <picture>
            <Image
              src={github_img}
              alt="github-image"
              priority={true}
              placeholder="blur"
              blurDataURL={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII="
              }
            />
          </picture>
        </div>
      </main>
    </>
  );
}
