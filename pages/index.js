//Jeg importerer "Head", fordi vi i Next.js ikke har et html-dokument med dette. 
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
    <Head>
      <title>My Coolest App | Home</title>
      <meta name="keywords" content="code-practice"></meta>
    </Head>

   <section>
     <h1 className={styles.title}>Mit test-projekt hvor jeg har eksperimenteret med:</h1>
     <ul className="list">
       <li>Next.js</li>
       <li>Routing</li>
       <li>Modules</li>
       <li>SQL Database post/get</li>
       <li>Fetching fra en API</li>
       <li>SCSS</li>
     </ul>
   </section>
   </>
  )
}
