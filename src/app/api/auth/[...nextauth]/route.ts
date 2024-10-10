import NextAuth from "next-auth";
import { CredentialsProvider } from "./providers/credentials";
import { refreshToken } from "./refresh-token";

const handler = NextAuth({
  pages: { signIn: "/" },
  providers: [CredentialsProvider],
  callbacks: {
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };
      const isTokenExpired = new Date().getTime() < token.tokens.expiresIn;
      if (isTokenExpired) return token;
      return await refreshToken(token);
    },
    async session({ token, session }) {
      session.user = token.user;
      session.tokens = token.tokens;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
