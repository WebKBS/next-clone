import mongoose from "mongoose";

let PostModel;

try {
  // 이미 모델이 컴파일되었는지 확인
  PostModel = mongoose.model("Post");
} catch (error) {
  // 모델이 없는 경우 컴파일
  const { Schema } = mongoose;

  const postSchema = new Schema(
    {
      title: {
        type: String,
        unique: true,
        required: true,
      },

      desc: {
        type: String,
        unique: true,
        required: true,
      },

      image: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );

  PostModel = mongoose.model("Post", postSchema);
}

export default PostModel;
