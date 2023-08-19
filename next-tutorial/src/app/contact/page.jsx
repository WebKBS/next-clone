import Button from "@/components/Button/Button";
import styles from "./page.module.css";
import Image from "next/image";

function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt="contact"
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="text" placeholder="Email" className={styles.input} />
          <textarea
            placeholder="Message"
            className={styles.textArea}
            cols="30"
            rows="10"
          />
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
