import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { lightTheme } from '../themes'
import {  ThemeProvider ,CssBaseline} from '@mui/material'
import { SWRConfig } from 'swr'
import { CartProvider, UiProvider } from '../context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <SWRConfig 
    value={{
      // refreshInterval: 3000,
      fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
    }}
  >
    <CartProvider>
  <UiProvider>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline/>
      <Component {...pageProps} />
      </ThemeProvider>
  </UiProvider>
  </CartProvider>
  </SWRConfig>
  )
}

export default MyApp
