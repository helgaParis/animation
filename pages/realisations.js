import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/layout.module.css'
const email='conseil14@asf-web.fr'

export default function Realisations() {

    return (
        <Layout >
        <Head>
          <title>Réalisations - {siteTitle}</title>
        </Head>
        <main className={styles.main}>
        
        <h1 className={styles.title}>Nos réalisations </h1>
     
        <p>Retrouvez bientôt sur cette page la liste détaillée des projets menés à bien par le conseil de quartier Jean Moulin - Porte d’Orléans ces dernières années. </p>
        <p>Si vous avez, par le passé, contribué à la réalisation d’un projet dans le cadre du conseil de quartier, et souhaitez nous en faire part, contactez-nous à l’adresse suivante : {""} 
          <a href={`mailto:${email}?subject=Réalisations du Conseil de Quartier JM PO&body= `}>conseil14@asf-web.fr</a></p>
          <p>Notre rédaction n’ayant pas accès à l’ensemble des archives du Conseil de quartier, vos contributions et témoignages sont les bienvenus.
  </p>
            
             
        
      </main>
      </Layout>
    )
  }