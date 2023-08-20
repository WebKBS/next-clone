import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Post from "@/models/Post";

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    await connect();

    const post = await Post.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 201 });
  } catch (err) {
    console.log(err);
    return new NextResponse("데이터베이스 에러", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;
  try {
    await connect();

    await Post.findByIdAndDelete(id);

    return new NextResponse("Delete!!", { status: 201 });
  } catch (err) {
    console.log(err);
    return new NextResponse("데이터베이스 에러", { status: 500 });
  }
};
