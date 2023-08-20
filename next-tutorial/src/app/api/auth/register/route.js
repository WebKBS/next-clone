import connect from "@/utils/db";
import { NextResponse } from "next/server";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
  const { name, email, password } = await req.json();
  await connect();

  const hashedPassword = await bcrypt.hash(password, 12);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("회원가입 완료", { status: 201 });
  } catch (err) {
    console.log(err);
    return new NextResponse(err.message, { status: 500 });
  }
};
