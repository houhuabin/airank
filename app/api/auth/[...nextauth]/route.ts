import NextAuth from "next-auth/next";

import authOptions from "./authOptions";
{
  /* CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email', placeholder: "Email" },
                password: { label: 'Password', type: 'password', placeholder: "Password" }
            },
            async authorize(credentials, req) {
                if (!credentials?.email || !credentials.password) return null;
                const user = prisma.user.findUnique({ where: { email: credentials.email } });
                if (!user) return null;;
                //const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword!);

                //return passwordMatch ? user : null;
                return user;
            }

        }),
    */
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
