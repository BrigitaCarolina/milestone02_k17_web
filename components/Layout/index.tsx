import { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <div className="justify-center">
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
}
