// "use client";

// import { SessionProvider, useSession, signIn, signOut } from "next-auth/react";

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//   return <SessionProvider>{children}</SessionProvider>;
// }

// export function useAuth() {
//   const { data: session } = useSession();

//   return {
//     user: session?.user,
//     login: async (email: string, password: string) => {
//       try {
//         const res = await signIn("credentials", { email, password, redirect: false });
//         return !res?.error;
//       } catch (error) {
//         console.error("Login error:", error);
//         return false;
//       }
//     },
//     logout: () => signOut(),
//   };
// }
