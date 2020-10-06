import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'
//import React from 'react'
//import Collection from './api/add-to-db.js'
const email='conseil14@asf-web.fr'

export default function Contribuer() {


    return (
        <Layout >
        <Head>
          <title>Contribuer - {siteTitle}</title>
        </Head>
        <main className={styles.main}>
        
        <h1 className={styles.title}>Participer au travail du Conseil de Quartier</h1>
        <p>Vous pouvez nous envoyer vos propositons ou vous inscrire sur notre liste de communication</p>
        <h4><a href={`mailto:${email}?subject=Contributions - Conseil de Quartier JM PO&body=Ma contribution : `}>Email : conseil14@asf-web.fr</a></h4>
        <p>Si le lien n'ouvre pas votre messagerie, vous pouvez copier l'adresse mail : conseil14@asf-web.fr</p>
      
      </main>
      </Layout>
    )
  }