import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { serverEnv } from "../../../constants";
import clientPromise from "../../../lib/db";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: serverEnv.clientId,
      clientSecret: serverEnv.clientSecret,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  session: { jwt: true },
  secret: "12345",
  // ! use the callbacks to customize what each function returns to the next one
  callbacks: {
    // * whatever is returned from the jwt callback only will be available as token to the session callback
    // ! jwt callback is called only when we are not storing the sessions in the db
    // * try commenting the adapter key-value and see the console.log in terminal
    jwt: async ({ token, user }) => {
      console.log("jwt before token =>", token);
      console.log("jwt before user =>", user);

      if (user) {
        token.id = user.id;
      }
      console.log("after token ===>", token);
      console.log("------------------------------------------");
      return token;
    },
    // * the returned data from this session callback is what will be available
    // * in the data property from the useSession() in jsx
    // ! token will be undefined if the adapter is enabled
    session: async ({ session, token, user }) => {
      console.log("session before session =>", session);
      console.log("session before token =>", token);
      console.log("session before user =>", user);

      if (session.user && user) {
        session.user.id = user.id;
      }

      console.log("session after session =>", session);
      console.log("#############################################");
      return session;
    },
  },
});
