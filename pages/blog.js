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
        <p>Retrouvez sur cette page les dernières nouvelles du conseil de quartier Jean Moulin - Porte d’Orléans et de l’ensemble de ses commissions.</p>
      </main>
      </Layout>
    )
  }
  