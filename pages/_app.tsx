import '<Next-project>/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from './Components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Navbar></Navbar>
  <Component {...pageProps} />
  </>
}
