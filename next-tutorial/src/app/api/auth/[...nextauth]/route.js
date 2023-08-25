import NextAuth from 'next-auth';
import GoggleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
// import User from "@/models/User";
import createConnection from '@/utils/sql_db';
import bcrypt from 'bcryptjs';

const handler = NextAuth({
  providers: [
    GoggleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'credentials',
      async authorize(credentials) {
        try {
          const connection = await createConnection(); // MySQL 데이터베이스 연결

          const [rows] = await connection.query('SELECT * FROM user WHERE email = ?', [credentials.email]);
          const user = rows[0]; // 첫 번째 결과만 사용

          if (user) {
            // 비밀번호 체크
            const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

            if (isPasswordCorrect) {
              connection.end(); // 연결 종료
              console.log('데이터베이스 연결이 종료되었습니다.');

              return user;
            } else {
              connection.end(); // 연결 종료
              console.log('데이터베이스 연결이 종료되었습니다.');
              throw new Error('비밀번호가 일치하지 않습니다.');
            }
          } else {
            console.log('데이터베이스 연결이 종료되었습니다.');
            connection.end(); // 연결 종료
            throw new Error('유저가 없습니다.');
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
  ],
  session: {
    // 세션 옵션 설정
    maxAge: 60 * 60,
  },
  pages: {
    error: '/dashboard/login',
  },
});

export { handler as GET, handler as POST };
