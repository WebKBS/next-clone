import { notFound } from "next/navigation"; // 에러페이지

export async function getData() {
  const res = await fetch(`${process.env.API_URL}/api/posts`, {
    // next: { revalidate: 10 },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Could not fetch ${res.status}`);
  }

  return res.json();
}

export async function getData2(id) {
  const res = await fetch(`${process.env.API_URL}/api/posts/${id}`, {
    // next: { revalidate: 10 },
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}
