import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/layout.module.css'

export default function Communication() {
    return (
        <Layout >
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <main className={styles.main}>
        <div className={utilStyles.textgauche}>
            <h1 className={styles.main} >Communication</h1>
          
            <p>La commission travaille sur le site web</p> 
        </div>
        
  
      </main>
      </Layout>
    )
  }