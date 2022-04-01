import Image from "next/image";
import github_icon from "../public/assets/github_icon.svg";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <picture className={styles.image}>
          <Image src={github_icon} alt="github-logo" />
        </picture>
        <h1 className={styles.title}>GitHub</h1>
      </div>
    </header>
  );
}
