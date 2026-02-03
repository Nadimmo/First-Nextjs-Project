import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          required: true,
        },
        password: {
          label: "Password",
          type: "password",
          required: true,
        },
      },

      async authorize(credentials) {
        if (!credentials) return null;

        const { email, password } = credentials;

        const currentUser = users.find((u) => u.email === email);
        if (!currentUser) return null;

        if (currentUser.password !== Number(password)) return null;

        return {
          id: currentUser.id,
          name: currentUser.name,
          email: currentUser.email,
        };
      },
    }),
  ],

  secret: process.env.PUBLIC_NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

const users = [
  {
    id: 1,
    name: "Nadim Mostofa",
    email: "nadimmostafa334@gmail.com",
    password: 1969120,
  },
  { id: 2, name: "alex", email: "alex@gmail.com", password: 1969120 },
];
