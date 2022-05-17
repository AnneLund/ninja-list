//Jeg importerer "Head", fordi vi i Next.js ikke har et html-dokument med dette. 
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="Ninjas"></meta>
    </Head>

   <section>
     <h1 className={styles.title}>Min helt nye Next-app!</h1>
     <p className={styles.text}>lorem ipsum dolor sit amet, consectetur adip</p>
      <p className={styles.text}>lorem ipsum dolor sit amet, consectetur adip</p>
    <Link href="/ninjas">
     <a className={styles.btn}>See a Ninja Listing</a>
     </Link>
   </section>
   </>
  )
}
