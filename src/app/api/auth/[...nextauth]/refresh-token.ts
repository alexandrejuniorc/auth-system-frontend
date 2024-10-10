import { JWT } from "next-auth/jwt";

export async function refreshToken(token: JWT): Promise<JWT> {
  const res = await fetch("http://localhost:3000/auth/refresh-token", {
    method: "POST",
    headers: {
      authorization: `Refresh ${token.tokens.refreshToken}`,
    },
  });
  console.log("refreshed");

  const response = await res.json();

  return {
    ...token,
    tokens: response,
  };
}
