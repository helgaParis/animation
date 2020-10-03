import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Blog() {
    return (
        <Layout >
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <main className={styles.main}>
        
        <h1 className={styles.title}>Les Actualités</h1>
        <p>Ici vous trouverez les dernières nouvelles du conseil de quartier et des commissios ...</p>
        <p>Ce chapitre apparaîtra en forme de blog dans une prochaine étape.</p>
      </main>
      </Layout>
    )
  }
  