import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import Header from '../../components/appBar'
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
        <div className={styles.appHeading}>
          <img src="/images/timeRefine/icon.png" className={styles.logoImage} />
          <Typography variant="h4">
            記録タイマー
          </Typography>
        </div>
        <img src="/images/timeRefine/1.png" className={styles.mainImage}/>
      </main>
    </div>
  )
}