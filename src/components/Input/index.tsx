import { useState } from "react";
import { useOrganization } from "../../providers/Organization";
import { usePage } from "../../providers/Pagination";
import styles from "./input.module.css";
import { ImCross } from "react-icons/im";
import { IInputProps } from "../../types";

export default function Input({ setShowInput }: IInputProps) {
  const { searchOrganization } = useOrganization();

  const { setPage } = usePage();

  const [input, setInput] = useState("");

  async function handleSubmit() {
    if (!input) return;

    setPage(1);

    await searchOrganization(input);

    setInput("");

    setShowInput(false);
  }

  return (
    <div className={styles.container}>
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
      <ImCross className={styles.icon} onClick={() => setShowInput(false)} />
    </div>
  );
}
