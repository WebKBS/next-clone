import mongoose from "mongoose";

let UserModel;

try {
  // 이미 모델이 컴파일되었는지 확인
  UserModel = mongoose.model("User");
} catch (error) {
  // 모델이 없는 경우 컴파일
  const { Schema } = mongoose;

  const userSchema = new Schema(
    {
      name: {
        type: String,
        unique: true,
        required: true,
      },

      email: {
        type: String,
        unique: true,
        required: true,
      },

      password: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );

  UserModel = mongoose.model("User", userSchema);
}
export default UserModel;
