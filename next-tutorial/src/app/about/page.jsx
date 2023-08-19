import Button from "@/components/Button/Button";
import styles from "./page.module.css";
import Image from "next/image";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.unsplash.com/photo-1692128032393-f7a70d80bd1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Lorem ipsum dolor sit amet</h1>
          <h2 className={styles.imgDesc}>Lorem ipsum dolor sit amet</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h2 className={styles.title}>Who Are we?</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consectetur, nunc sit amet ultricies sodales, eros lectus gravida
            nunc, at pretium nunc odio sit amet nunc.
          </p>
        </div>
        <div className={styles.item}>
          <h2 className={styles.title}>Who Are we?</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consectetur, nunc sit amet ultricies sodales, eros lectus gravida
            nunc, at pretium nunc odio sit amet nunc.
          </p>
          <Button url="contact" text="Contact" />
        </div>
      </div>
    </div>
  );
}

export default About;
