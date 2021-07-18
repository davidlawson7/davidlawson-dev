import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>davidlawson.dev</title>
        <meta name="description" content="A Next.js app" />
        <meta name="viewport" content="width=device-width, initial-scale=1 maximum-scale=5.0, minimum-scale=1.0, user-scalable=yes"></meta>
        <meta name="theme-color" content="#201E2C" />

        <link rel="icon" href="/favicon.ico" />

        {/* Other */}
        <link rel="icon" type="image/png" href="/favicon-32x32.png"sizes="32x32" />
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />

        {/* i0s */}
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />

        {/* Android */}
        <link href="/android-chrome-192x192.png" rel="icon" sizes="192x192" />
        <link href="/android-chrome-512x512.png" rel="icon" sizes="512x512" />

        {/* Site Manifest */}
        <link rel="manifest" href="/site.webmanifest" />

      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          davidlawson.<a className={styles.titleLink} href="https://davidlawson.dev">dev</a>
        </h1>

        <h2 className={styles.headingTwo}>
          Under construction. Watch this space!
        </h2>

      </main>
    </div>
  )
}
