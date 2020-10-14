import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/layout.module.css'

export default function Poincon() {
    return (
        <Layout >
        <Head>
          <title>Poinçon - {siteTitle}</title>
        </Head>
        <main className={styles.main}>
        <div className={utilStyles.textgauche}>
            <h1 className={styles.title} >Poinçon</h1>
          
            <p>à suivre : les infos sur le Poinçon, l'ancienne petite gare de la petite ceinture</p> 
        </div>
        
  
      </main>
      </Layout>
    )
  }