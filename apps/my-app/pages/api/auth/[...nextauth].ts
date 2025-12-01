import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'username' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Add your authentication logic here
        // This is a simple example - replace with your actual authentication logic
        if (!credentials?.username || !credentials?.password) {
          return null;
        }

        // Example: Simple hardcoded check (replace with database lookup, API call, etc.)
        // In production, you should:
        // 1. Query your database to find the user
        // 2. Verify the password (using bcrypt, argon2, etc.)
        // 3. Return user object if valid, null if invalid

        if (
          credentials.username === 'admin' &&
          credentials.password === 'password'
        ) {
          return {
            id: '1',
            name: 'Admin User',
            email: 'admin@example.com',
          };
        }

        // If credentials are invalid, return null
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Persist the user id to the token right after signin
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client
      if (session.user && token) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
};

export default NextAuth(authOptions);

