import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'



export default function Mentions() {
    return (
        <Layout >
        <Head>
          <title>Mentions légales</title>
          <meta
          name="keywords"
          content="Mentions légales, hébergement, rédaction, domain, contact"
        />
        </Head>
        <main className={styles.main}>
        
        <h1 className={styles.title}>Mentions légales</h1>
        <p>Version de travail du site</p>
        <p>Le site est hébergé par Vercel (contenu et nom de domaine provisoire) et OVH (nom défnitif)</p>
        <p>Nous contacter: à suivre</p>
     
      </main>
      </Layout>
    );
  }