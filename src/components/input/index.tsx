import { useState } from "react";
import { useOrganization } from "../../providers/Organization";
import styles from "./input.module.css";
import { ImCross } from "react-icons/im";

interface IInputProps {
  setShowInput: (bool: boolean) => void;
}

export default function Input({ setShowInput }: IInputProps) {
  const { searchOrganization } = useOrganization();

  const [input, setInput] = useState("");

  async function handleSubmit() {
    if (!input) return;

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
