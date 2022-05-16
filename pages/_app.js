import '../styles/globals.scss'
import Layout from '/components/Layout'
import '../styles/navbar.scss'
import '../styles/footer.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  )
}

export default MyApp
