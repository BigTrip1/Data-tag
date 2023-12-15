import '@/styles/globals.css'
import Header from '@/components/header'

import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Toaster position='top-center' gutter={12} />
      <Component {...pageProps} />
    </>
  )
}
