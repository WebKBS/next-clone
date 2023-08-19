import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = async ({ params }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Description</p>
          <div className={styles.author}>
            <Image
              src={""}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Name</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={""} alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          reprehenderit obcaecati ullam optio? Suscipit eligendi enim
          voluptatibus repellendus repellat tempore! Laudantium, quibusdam
          accusantium maiores et aut sit labore facilis vel.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
