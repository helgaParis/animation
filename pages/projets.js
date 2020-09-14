import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/layout.module.css'

export default function Climat() {
    return (
        <Layout >
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <main className={styles.main}>
        <div className={utilStyles.textgauche}>
            <h1 className={styles.main} >Projets et Idées</h1>
            <h3>Ces Idées font un appel à votre participation</h3>
            <p>Si vous souhaitez participer à un de ces projets, contactez nous, en direct, si un contact est indiqué, soit via le mail en fin de page !  </p>
            <li>Le projet de ce site Internet: redaction et technique</li>
            <li>La communication</li>
          
            <li>... etc</li>
            <p>Contactez-nous pour participer:   lien à faire</p> 
        </div>
        
  
      </main>
      </Layout>
    )
  }