import Image from "next/image";
import { useRouter } from "next/router";
import github_icon from "../../../public/github_icon.svg";
import styles from "./header.module.css";

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={() => router.push("/")}>
          <picture className={styles.image}>
            <Image src={github_icon} alt="github-logo" />
          </picture>
          <span className={styles.title}>GitHub</span>
        </div>
      </div>
    </header>
  );
}
