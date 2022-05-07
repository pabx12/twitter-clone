import '../styles/globals.css'
import type { AppProps } from 'next/app'
import TimeAgo from 'javascript-time-ago'

import fr from 'javascript-time-ago/locale/fr.json'

TimeAgo.addDefaultLocale(fr)

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
