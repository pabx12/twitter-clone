import NextAuth, { NextAuthOptions } from 'next-auth';

import { NextApiRequest, NextApiResponse } from 'next';
import { SanityAdapter } from 'next-auth-sanity';
import { client } from '../../../sanity';
import Google from "next-auth/providers/google";

const options: NextAuthOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID || '',
      clientSecret: process.env.GOOGLE_SECRET || '',
    })
  ],
  session: {
    strategy: 'jwt'
  },
  adapter: SanityAdapter(client)

};

export default NextAuth(options);