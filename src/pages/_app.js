import Layout from '../components/layout/Layout'
import ScrollToTop from '../components/scrollTopButton/ScrollToTop'
import '../styles/globals.css'
import '../styles/fonts.css'
import '@fontsource/grenze'
import '@fontsource/inter'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <ScrollToTop />
    </Layout>
  )
}

export default MyApp
