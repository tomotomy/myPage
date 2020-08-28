import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import Header from '../../components/appBar'
import ReactMarkdown from 'react-markdown'
import CopyrightIcon from '@material-ui/icons/Copyright'
import {
  Typography,
  Button,
  AppBar,
  Toolbar,
} from '@material-ui/core'

const input = `
========【本アプリの特徴】========

シンプルな3ステップで時間を記録できます


- 名前を設定してタイマーを起動して自分の作業に取り掛かろう！

　
- 作業が終わったら時間の使い方を評価してタイマーをストップ！


- ご自身のGoogle アカウントと連携してGoogleカレンダーに記録！　　

　※タイマーの開始時間と終了時間に合わせてカレンダーに追加されます。




自分の時間をどのように使っているのかということを知ることで、自分の時間をより有効的に使うことができます。

自分の時間の記録・評価のサイクルを繰り返してより充実した時間を過ごせるようにしていきましょう！
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>TomoDev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar>
        <Toolbar>
          <Typography>
            記録タイマー
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={styles.main}>
        <div className={styles.appHeading}>
          <img src="/images/timeRefine/icon.png" className={styles.logoImage} />
          <Typography variant="h4">
            記録タイマー
          </Typography>
        </div>
        <img src="/images/timeRefine/1.png" className={styles.mainImage}/>
        <div className={styles.mainContent}>
          <Typography variant="h4">
            記録タイマー
          </Typography>
          <ReactMarkdown source={input}/>
          <Link href="timeRefine/privacy">
            <a>プライバシーポリシーはこちら</a>
          </Link>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerLogo}>
          <img src="/images/timeRefine/icon.png" className={styles.footerLogoImage}></img>
          <Typography variant="h6">記録タイマー</Typography>
        </div>
        <div className={styles.copyRight}>
          <CopyrightIcon/>
          <Typography>Copyright 2020 TomDev. All Rights Reserved.</Typography>
        </div>
      </footer>
    </div>
  )
}