import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    console.log(error);
    throw new Error("데이터베이스 연결 실패");
  }
};

export default connect;
