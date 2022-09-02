import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.container}>
      <a href="/" className="flex h-[30px] w-auto"><img src="/logo-SAH.png" alt="profile" /></a>
      <div className="align-middle ">
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/">
              <a className="text-sm md:text-xl font-[700] text-[#2F1C53] font-roboto drop-shadow-xl hover:underline">HOME</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/chatbot">
              <a className="text-sm md:text-xl font-[700] text-[#2F1C53] font-roboto drop-shadow-xl hover:underline">CHATBOT</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/about">
              <a className="text-sm md:text-xl font-[700] text-[#2F1C53] font-roboto drop-shadow-xl hover:underline">ABOUT</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
