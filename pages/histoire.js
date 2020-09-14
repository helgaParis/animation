import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Histoire() {
    return (
        <Layout >
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <main className={styles.main}>
        
        <h1 className={styles.title}>L'histoire des Conseils de Quartier</h1>
        <p>Ici vous trouverez le dévelopement historique du concept...</p>
        
      </main>
      </Layout>
    )
  }
  