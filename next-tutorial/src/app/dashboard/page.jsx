"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
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

  const session = useSession();
  console.log(session);
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  console.log(data);

  if (session.status === "loading") {
    return <p>Loading....</p>;
  }

  if (session.status === "unauthenticated") {
    return router?.push("/dashboard/login");
  }

  if (session.status === "authenticated") {
    return <div>Dashboard</div>;
  }
}

export default Dashboard;
