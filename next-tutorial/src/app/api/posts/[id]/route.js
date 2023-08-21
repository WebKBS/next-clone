import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

const createConnection = async () => {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });

  try {
    await connection.connect();
    console.log("MySQL 데이터베이스에 연결되었습니다.");
    return connection;
  } catch (error) {
    console.error("MySQL 연결 실패:", error);
    throw new Error("데이터베이스 연결 실패");
  }
};

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    const connection = await createConnection();

    const [rows, fields] = await connection.query(
      "SELECT * FROM posts WHERE id = ?",
      [id]
    );

    // 데이터베이스 연결 해제
    connection.end();

    return new NextResponse(JSON.stringify(rows[0]), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("데이터베이스 에러", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;
  try {
    const connection = await createConnection();

    await connection.query("DELETE FROM posts WHERE id = ?", [id]);

    // 데이터베이스 연결 해제
    connection.end();

    return new NextResponse("Delete!!", { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse("데이터베이스 에러", { status: 500 });
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
