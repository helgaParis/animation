import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'



export default function Urbanisme() {
    return (
        <Layout >
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <main className={styles.main}>
        
        <h1 className={styles.title}> La Commission Urbanisme </h1>
            {/* un module qui prend des infos standard d'un api? */}
            <p>Membres : ...</p>
            <p>Réferent : ...</p>
            <p>Prochaine Réunion : ...</p>
            <p>nous contacter : </p>
        <h1> Projet Porte d'Orléans</h1>
        <p> ;;;;</p>
        </main>
        </Layout>
    )
}