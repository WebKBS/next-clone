import createConnection from '@/utils/sql_db';
import { NextResponse } from 'next/server';

export const GET = async (request) => {
  try {
    const connection = await createConnection();

    const url = new URL(request.url);
    const username = url.searchParams.get('username');

    let query = 'SELECT * FROM posts';
    let queryParams = [];

    if (username) {
      query += ' WHERE username = ?';
      queryParams.push(username);
    }

    const [rows, fields] = await connection.query(query, queryParams);

    // 데이터베이스 연결 해제
    connection.end();

    return new NextResponse(JSON.stringify(rows), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse('데이터베이스 에러', { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  try {
    const connection = await createConnection();

    const { title, description, image, content, username } = body;

    // SQL 쿼리 실행
    const query = 'INSERT INTO posts (title, description, image, content, username) VALUES (?, ?, ?, ?, ?)';
    const queryParams = [title, description, image, content, username];

    await connection.query(query, queryParams);

    // 데이터베이스 연결 해제
    connection.end();

    return new NextResponse('Post 성공!', { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse('데이터베이스 에러', { status: 500 });
  }
};

// 몽고 디비

// export const GET = async (request) => {
//   const url = new URL(request.url);

//   const username = url.searchParams.get("username");

//   try {
//     await connect();

//     const posts = await Post.find(username && { username });

//     return new NextResponse(JSON.stringify(posts), { status: 201 });
//   } catch (err) {
//     console.log(err);
//     return new NextResponse("데이터베이스 에러", { status: 500 });
//   }
// };

// export const POST = async (request) => {
//   const body = await request.json();

//   const newPost = new Post(body);
//   console.log(newPost);

//   try {
//     await connect();

//     await newPost.save();

//     return new NextResponse("Post 성공!", { status: 201 });
//   } catch (err) {
//     console.log(err);
//     return new NextResponse("데이터베이스 에러", { status: 500 });
//   }
// };
