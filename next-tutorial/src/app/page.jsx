import styles from "./page.module.css";
import Hero from "public/hero.png";
import Image from "next/image";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h1 className={styles.title}>Hi, I'm Kang</h1>
        <h2 className={styles.desc}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          I'm a full stack developer with a passion for building beautiful and
          functional websites.
        </h2>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} className={styles.img} alt="" />
      </div>
    </div>
  );
}
