// types/user.ts
export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
  }
  
  export interface UserData extends User {
    password: string; // Hashed password
  }
  
  // types/auth.ts
  import { DefaultSession } from "next-auth";
  
  declare module "next-auth" {
    interface Session extends DefaultSession {
      user: {
        id: string;
        name: string;
        email: string;
        role: string;
      } & DefaultSession["user"];
    }
  }
  
  declare module "next-auth/jwt" {
    interface JWT {
      id: string;
      role: string;
    }
  }