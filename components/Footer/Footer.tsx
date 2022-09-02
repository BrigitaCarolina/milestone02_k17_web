import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className="absolute bottom-0 w-full flex py-1 justify-center text-center bg-gray-100 font-roboto font-[700]">
      <p className={styles.title}>MADE WITH LOVE BY @milestonek17</p>
    </div>
  )
}
