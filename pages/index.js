import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from '../components/appBar'
import {
  Typography,
  Button
} from '@material-ui/core'

export default function Home() {
  return (
    <div>
      <Head>
        <title>TomoDev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <Typography variant="h4">
          これまで作ったサービス
        </Typography>
        <div className={styles.services}>
          <Link href="/timeRefine">
            <a className={styles.service}>
              <img src="/images/timeRefine/1.png" className={styles.serviceImage}/>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
