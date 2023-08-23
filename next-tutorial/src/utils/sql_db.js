import mysql from 'mysql2/promise'; // mysql2/promise를 사용하여 프로미스 기반으로 작성

const createConnection = async () => {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });

  try {
    await connection.connect();
    console.log('MySQL 데이터베이스에 연결되었습니다.');
    return connection;
  } catch (error) {
    console.error('MySQL 연결 실패:', error);
    throw new Error('데이터베이스 연결 실패');
  }
};

export default createConnection;
