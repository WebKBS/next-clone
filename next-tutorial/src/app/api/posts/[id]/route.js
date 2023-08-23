import createConnection from '@/utils/sql_db';
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    const connection = await createConnection();

    const [rows, fields] = await connection.query('SELECT * FROM posts WHERE id = ?', [id]);

    // 데이터베이스 연결 해제
    connection.end();

    return new NextResponse(JSON.stringify(rows[0]), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse('데이터베이스 에러', { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;
  try {
    const connection = await createConnection();

    await connection.query('DELETE FROM posts WHERE id = ?', [id]);

    // 데이터베이스 연결 해제
    connection.end();

    return new NextResponse('Delete!!', { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse('데이터베이스 에러', { status: 500 });
  }
};

// import connect from "@/utils/db";
// import { NextResponse } from "next/server";
// import Post from "@/models/Post";

// export const GET = async (request, { params }) => {
//   const { id } = params;
//   try {
//     await connect();

//     const post = await Post.findById(id);

//     return new NextResponse(JSON.stringify(post), { status: 201 });
//   } catch (err) {
//     console.log(err);
//     return new NextResponse("데이터베이스 에러", { status: 500 });
//   }
// };

// export const DELETE = async (request, { params }) => {
//   const { id } = params;
//   try {
//     await connect();

//     await Post.findByIdAndDelete(id);

//     return new NextResponse("Delete!!", { status: 201 });
//   } catch (err) {
//     console.log(err);
//     return new NextResponse("데이터베이스 에러", { status: 500 });
//   }
// };
