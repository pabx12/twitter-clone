import NextAuth, { NextAuthOptions } from 'next-auth';

import { NextApiRequest, NextApiResponse } from 'next';
import { SanityAdapter, SanityCredentials } from 'next-auth-sanity';
import { sanityClient } from '../../../sanity';
import Google from "next-auth/providers/google";

const options: NextAuthOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID || '',
      clientSecret: process.env.GOOGLE_SECRET || '',
    }),
  ],

};

export default NextAuth(options);