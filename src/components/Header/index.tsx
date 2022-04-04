import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Input from "../Input";
import github_icon from "../../../public/github_icon.svg";
import styles from "./header.module.css";
import { BiSearchAlt } from "react-icons/bi";
import { IHeaderProps } from "../../types";

export default function Header({ search }: IHeaderProps) {
  const router = useRouter();

  const [showInput, setShowInput] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={() => router.push("/")}>
          <picture className={styles.image}>
            <Image src={github_icon} alt="github-logo" />
          </picture>
          <span className={styles.title}>GitHub</span>
        </div>
        {search && (
          <div>
            <BiSearchAlt
              className={styles.search}
              onClick={() => setShowInput(true)}
            />
          </div>
        )}
        {showInput && <Input setShowInput={setShowInput} />}
      </div>
    </header>
  );
}
