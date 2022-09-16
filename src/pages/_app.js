import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/layout/Layout'
import ScrollToTop from '../components/scrollTopButton/ScrollToTop'
import '../styles/globals.css'
import '../styles/fonts.css'
import '@fontsource/grenze'
import '@fontsource/inter'
import * as ga from '../lib/ga'

function MyApp({ Component, pageProps }) {
  const router  = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <Layout>
      <Component {...pageProps} />
      <ScrollToTop />
    </Layout>
  )
}

export default MyApp
