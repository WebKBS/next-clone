// import connect from "@/utils/db";
import { NextResponse } from 'next/server';
// import User from "@/models/User";
import bcrypt from 'bcryptjs';
import createConnection from '@/utils/sql_db';

export const POST = async (req) => {
  const { name, email, password } = await req.json();

  const hashedPassword = await bcrypt.hash(password, 12);

  try {
    const connection = await createConnection();
    // SQL 쿼리 실행
    const query = 'INSERT INTO user (name, email, password) VALUES (?, ?, ?)';
    const queryParams = [name, email, hashedPassword];

    await connection.query(query, queryParams);

    // 데이터베이스 연결 해제
    connection.end();

    return new NextResponse('회원가입 완료', { status: 201 });
  } catch (err) {
    console.log(err);
    return new NextResponse(err.message, { status: 500 });
  }
};
