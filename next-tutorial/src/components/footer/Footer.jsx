import Image from "next/image";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div>&copy;2023 Kang All rights reserved.</div>
      <div>
        <div className={styles.social}>
          <Image
            src="/1.png"
            width={15}
            height={15}
            className={styles.icon}
            alt="facebook"
          />
          <Image
            src="/2.png"
            width={15}
            height={15}
            className={styles.icon}
            alt="insta"
          />
          <Image
            src="/3.png"
            width={15}
            height={15}
            className={styles.icon}
            alt="tweeter"
          />
          <Image
            src="/4.png"
            width={15}
            height={15}
            className={styles.icon}
            alt="youtube"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
