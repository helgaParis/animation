import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/layout.module.css'
const email='conseil14@asf-web.fr'

export default function Climat() {
    return (
        <Layout >
        <Head>
          <title>Projets - {siteTitle}</title>
        </Head>
        <main className={styles.main}>
        <div className={utilStyles.textgauche}>
            <h1 className={styles.title} >Projets et Idées</h1>
            <h2 className={styles.subtitle}>Ces Idées font un appel à votre participation</h2>
            <p>Si vous souhaitez participer à un de ces projets, contactez nous, en direct, si un contact est indiqué, soit via le mail en fin de page !  </p>
            <ul>
            <li>Le projet de ce site Internet: redaction et technique</li>
            <li>La communication</li>
          
            <li>... etc</li>
            </ul>
            <p>Contactez-nous pour participer:   {" "}
            <a href={`mailto:${email}?subject=Plenière du Conseil de Quartier JM PO&body= Mes Propositions :`}>propositions par email</a></p>
        </div>
        
  
      </main>
      </Layout>
    )
  }