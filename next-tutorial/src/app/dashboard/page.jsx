"use client";

// import { useEffect, useState } from "react";
import useSWR from "swr";

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

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts/",
    fetcher
  );
  console.log(data);

  return <div>Dashboard</div>;
}

export default Dashboard;
