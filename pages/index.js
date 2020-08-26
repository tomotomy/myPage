import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/appBar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>TomoDev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
      </main>
    </div>
  )
}
