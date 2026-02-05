import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import LinkedInProvider from "next-auth/providers/linkedin";
import client from "@/lib/mongodb";

export const authOptions = {
  secret: process.env.PUBLIC_NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
  },
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

        const currentUser = await client
          .db("Next_Hero")
          .collection("allUsers")
          .findOne({ email: email });

        if (parseInt(currentUser.password) === parseInt(password)) {
          return currentUser;
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.PUBLIC_GITHUB_CLIENT_ID,
      clientSecret: process.env.PUBLIC_GITHUB_CLIENT_SECRET,
    }),
    LinkedInProvider({
      clientId: process.env.PUBLIC_LINKEDIN_ID,
      clientSecret: process.env.PUBLIC_LINKEDIN_SECRET,
    }),
  ],

  callback: {
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, user, token }) {
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
