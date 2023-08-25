'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
// import { useEffect, useState } from "react";
import useSWR from 'swr';

import styles from './page.module.css';
import Image from 'next/image';
import { useEffect } from 'react';

function Dashboard() {
  // useEffect는 더이상 쓰지말자.
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   async function getData() {
  //     setIsLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts/", {
  //       // next: { revalidate: 10 },
  //       cache: "no-store",
  //     });

  //     if (!res.ok) {
  //       setErr(true);
  //     }

  //     const data = await res.json();

  //     setData(data);
  //     setIsLoading(false);
  //   }

  //   getData();
  // }, []);

  // console.log(data);

  const session = useSession();
  // console.log(session);
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher);

  // console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const description = e.target[1].value;
    const image = e.target[2].value;
    const content = e.target[3].value;

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          title,
          description,
          image,
          content,
          username: session?.data?.user.name,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const responseData = await response.json();

      if (!response.ok) {
        return alert(responseData.message);
      }

      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  // console.log('라우터', router);
  useEffect(() => {
    if (session.status === 'unauthenticated') {
      // window.location.href = '/dashboard/login';
      router.push('/dashboard/login');
    }
  }, [session, router]);

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });

      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === 'loading') {
    return <p>Loading....</p>;
  }

  if (session.status === 'authenticated') {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? 'loading...'
            : data?.map((post) => (
                <div className={styles.post} key={post.id}>
                  <div className={styles.imgContainer}>
                    <Image src={post.image} alt={post.title} width={200} height={100} unoptimized />
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <span className={styles.delete} onClick={() => handleDelete(post.id)}>
                    X
                  </span>
                </div>
              ))}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input type="text" placeholder="Desc" className={styles.input} />
          <input type="text" placeholder="Image" className={styles.input} />
          <textarea placeholder="Content" className={styles.textArea} cols="30" rows="10"></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }
}

export default Dashboard;
