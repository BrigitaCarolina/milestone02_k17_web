import Link from "next/Link";
import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.container}>
      <Image src="/16521326.png" width={30} height={30} alt="profile" />
      <div className="align-middle ">
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/">
              <a className="text-xl hover:underline">Home</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/help">
              <a className="text-xl hover:underline">Help</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/about">
              <a className="text-xl hover:underline">About</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
