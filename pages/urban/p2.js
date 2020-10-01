import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import styles from '../../styles/Home.module.css'

import Nav2urban from '../../components/nav2urban'

export default function P2() {
    return (
        <Layout >
        <Head>
          <title> Conseil de quartier JMPO – Commission urbanisme - Interview</title>
        </Head>
        <main className={styles.main}>
            <Nav2urban></Nav2urban>
            <h1 className={styles.title}>Interview</h1>
            
        </main>
        </Layout>
    )
  }