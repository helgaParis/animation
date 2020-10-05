import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import styles from '../../styles/Home.module.css'

import Nav1anim from '../../components/nav1anim'

export default function Cra3() {
    return (
        <Layout >
        <Head>
          <title>Comité d'Animation - Conseil de quartier JMPO</title>
        </Head>
        <main className={styles.main}>
            <Nav1anim></Nav1anim>
            <h1 className={styles.title}>Comité d’animation, réunion  du 14 12 2019</h1>
            <p>4 membres présents </p>
            
            <p>Avant d’ouvrir la séance, le Comité d’animation accueille Chantal Godinot qui vient s’expliquer sur les factures réglées au Poinçon au titre du Festival Jean Rouch. Elle indique qu’elle n’a jamais donné son accord pour un tel règlement.</p>
            <p>La séance se poursuit avec les 4 membres présents, qui regrettent le nombre d’absents. Un seul membre excusé.</p>
            <p>Devant cette situation un peu paralysante, le Comité considère qu’il n’est pas en mesure d’instruire valablement l’ordre du jour, et se limite à fixer un calendrier pour le conseil de quartier :</p>
            <ul>
            <li>
            Réunion des conseillers le mardi 7 janvier à 19h au 50 Bd Jourdan</li>
            <li>Réunion plénière le mardi 28 à 19h (lieu précisé ultérieurement)</li>
            </ul>
                          
            
        </main>
        </Layout>
    )
  }