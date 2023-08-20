import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Post from "@/models/Post";

export const GET = async (request) => {
  try {
    await connect();

    const posts = await Post.find();

    return new NextResponse(JSON.stringify(posts), { status: 201 });
  } catch (err) {
    console.log(err);
    return new NextResponse("데이터베이스 에러", { status: 500 });
  }
};
