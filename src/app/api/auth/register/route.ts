import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "userData.json");

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Read existing users
    let users = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, "utf-8") || "[]";
      users = JSON.parse(fileData);
    }

    // Check if user already exists
    if (users.find((u: any) => u.email === email)) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 });
    }

    // Add new user
    const newUser = { id: Date.now().toString(), name, email, password, role: "user" };
    users.push(newUser);

    // Save updated users list
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

    return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error in registration API:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
