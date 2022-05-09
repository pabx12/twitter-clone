import '../styles/globals.css'
import type { AppProps } from 'next/app'
import TimeAgo from 'javascript-time-ago'

import fr from 'javascript-time-ago/locale/fr.json'
import { SessionProvider } from "next-auth/react"

TimeAgo.addDefaultLocale(fr)

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
