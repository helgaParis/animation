import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import styles from '../../styles/Home.module.css'

export default function ForumUrbain() {
    return (
        <Layout >
        <Head>
          <title>Forum Urbain - {siteTitle}</title>
        </Head>
      
            <h1 className={styles.title} >Forum Urbain du 6 juin 2021 </h1>
          <div className={styles.encadreiframe}>
            
           <iframe 
          className={styles.iframe }
          title="Forum Urbain du 6 juin 2021" 
          src="/forum-urbain-060621.pdf"
           >
           </iframe>
        
        </div>
  
      
      </Layout>
    )
  }