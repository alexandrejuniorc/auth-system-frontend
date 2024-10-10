import CredentialsProviderAuth from "next-auth/providers/credentials";

export const CredentialsProvider = CredentialsProviderAuth({
  name: "Credentials",
  credentials: {
    email: { label: "E-mail", type: "email", placeholder: "john@doe.com" },
    password: { label: "Password", type: "password" },
  },
  async authorize(credentials, req) {
    if (!credentials) return null;
    const { email, password } = credentials;
    const res = await fetch("http://localhost:3000/auth/sign-in", {
      method: "POST",
      body: JSON.stringify({ username: email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (res.status == 401) {
      console.log(res.statusText);
      return null;
    }
    const user = await res.json();
    return user;
  },
});
