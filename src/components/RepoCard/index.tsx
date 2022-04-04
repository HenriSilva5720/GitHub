import styles from "./repoCard.module.css";
import { BiShield, BiStar, BiGitRepoForked } from "react-icons/bi";
import { IRepoCardProps } from "../../types";

export default function RepoCard({ repository }: IRepoCardProps) {
  function setLanguage(language: string) {
    switch (language) {
      case "HTML":
        return styles.tagHTML;

      case "CSS":
        return styles.tagCSS;

      case "JavaScript":
        return styles.tagJS;

      case "TypeScript":
        return styles.tagTS;

      case "Python":
        return styles.tagPython;

      case "Rust":
        return styles.tagRust;

      case "Swift":
        return styles.tagSwift;

      case "Ruby":
        return styles.tagRuby;

      case "PHP":
        return styles.tagPHP;

      case "C++":
        return styles.tagCPlus;

      case "C#":
        return styles.tagCS;

      case "C":
        return styles.tagC;

      case "Java":
        return styles.tagJava;

      case "Go":
        return styles.tagGo;

      case "Kotlin":
        return styles.tagKotlin;

      case "Markdown":
        return styles.tagMD;

      default:
        return styles.tag;
    }
  }

  return (
    <a
      href={repository.html_url}
      className={styles.repoLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.repo}>
        <div className={styles.containerRepoInfo}>
          <h3 className={styles.repoTitle}>{repository.name}</h3>
          <span className={styles.repoVisibility}>{repository.visibility}</span>
        </div>
        <p className={styles.repoDescription}>{repository.description}</p>
        <div className={styles.containerTag}>
          {repository.language && (
            <span
              className={`${styles.tag} ${setLanguage(repository.language)}`}
            >
              {repository.language}
            </span>
          )}
          {repository.license && repository.license.spdx_id !== "NOASSERTION" && (
            <div className={styles.tag}>
              <BiShield className={styles.icon} />
              <span>{repository.license.spdx_id}</span>
            </div>
          )}
          <div className={styles.tag}>
            <BiStar className={styles.icon} />
            <span>{repository.stargazers_count}</span>
          </div>
          <div className={styles.tag}>
            <BiGitRepoForked className={styles.icon} />
            <span>{repository.forks_count}</span>
          </div>
        </div>
      </div>
    </a>
  );
}
