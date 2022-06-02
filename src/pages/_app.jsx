import styles from '../../styles/globals.css'
import Head from 'next/head'
import Footer from '../components/Footer'
function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.content}>
      <Head>
        <title>Doguinhos API</title>
        <link rel="shortcut icon" href="/dog-icon.png" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
