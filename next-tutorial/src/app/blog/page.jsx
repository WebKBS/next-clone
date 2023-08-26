import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { getData } from "@/components/Fetch/fetchData";

export const runtime = "edge"; // 'nodejs' (default) | 'edge'
// async function getData() {
//   const res = await fetch(`/api/posts`, {
//     // next: { revalidate: 10 },
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error(`Could not fetch ${res.status}`);
//   }

//   return res.json();
// }

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link
          href={"/blog/" + item.id}
          className={styles.container}
          key={item.id}
        >
          <div className={styles.imageContainer}>
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={250}
              className={styles.image}
              unoptimized
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
