import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";

function Portfolio() {
  return (
    <div>
      <Image src={Hero} className={styles.img} alt="" />
    </div>
  );
}

export default Portfolio;
