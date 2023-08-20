import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Post from "@/models/Post";

export const GET = async (request) => {
  const url = new URL(request.url);

  const username = url.searchParams.get("username");

  try {
    await connect();

    const posts = await Post.find(username && { username });

    return new NextResponse(JSON.stringify(posts), { status: 201 });
  } catch (err) {
    console.log(err);
    return new NextResponse("데이터베이스 에러", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newPost = new Post(body);
  console.log(newPost);

  try {
    await connect();

    await newPost.save();

    return new NextResponse("Post 성공!", { status: 201 });
  } catch (err) {
    console.log(err);
    return new NextResponse("데이터베이스 에러", { status: 500 });
  }
};
