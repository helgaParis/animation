import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/layout.module.css'

export default function Realisations() {

    return (
        <Layout >
        <Head>
          <title>Réalisations - {siteTitle}</title>
        </Head>
        <main className={styles.main}>
        
        <h1 className={styles.title}>Nos réalisations, idées et contributions</h1>
        <h2>Projets et idées actuelles </h2>
        <p>page provisoire</p>
        <p>Vous trouverez ici des projects de notre quartier, que le conseil de quartier a initié ou traité.. 
            Vous pouvez soumettre vos souhaits et idées. Ils seront discutées, eventuellement établies comme projets, 
            les projets soumis au vote et proposés à la mairie. La mairie decide de leur réalisation. 
            En fonction du calendrier, hors situation exceptionnelle comme un pandemie, les realisations 
            (ou le refus du projet) arrivent environ 18 mois après la discussion de l'idée.
            
  </p>
  <p>...</p>
  <h2>Projets réalisés dans notre quartier</h2>
  <p>Vous trouverez ici les projets réalisés. 
      Si vous avez contribué à un projet pas mentionné ou si vous souhaitez nous indiquer un, 
      contactez-nous via email ou formulaire. Suite à un changement de site, notre rédaction n'a pas 
      accès à toutes les archives.</p>
                
               
             
        
      </main>
      </Layout>
    )
  }