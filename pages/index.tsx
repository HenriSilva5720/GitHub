import Image from "next/image";
import { useState } from "react";
import Header from "../components/header";
import styles from "./home.module.css";
import github_img from "../public/assets/github_img.svg";
import { useOrganization } from "../providers/Organization";

export default function HomePage() {
  const [input, setInput] = useState("");

  const { searchOrganization } = useOrganization();

  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.containerContent}>
          <h1 className={styles.title}>Search For Your Organization Here!</h1>
          <p className={styles.subtitle}>
            Millions of developers and companies build, ship, and maintain their
            software on GitHub—the largest and most advanced development
            platform in the world.
          </p>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              placeholder="Search your org"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className={styles.button}
              onClick={() => searchOrganization(input)}
            >
              Search
            </button>
          </div>
        </div>
        <div className={styles.containerImage}>
          <picture>
            <Image src={github_img} alt="github-image" />
          </picture>
        </div>
      </main>
    </>
  );
}
