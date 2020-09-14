// pages/404.js
import Layout, { siteTitle } from '../components/layout'
import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Custom404() {
    return (
        <Layout>
     <Head>
          <title>Error 404 site CQ</title>
        </Head>
        <main className={styles.main}>
        
        <h1 className={styles.title}>404 - Page introuvable</h1>
    <p>Le serveur n'a pas trovué la page demandée</p>
    </main>
    </Layout>
    )
  }