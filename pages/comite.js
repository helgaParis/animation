import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'
// import Link from 'next/link'
import Menu1 from '../components/part1anim'

export default function Commite() {
    return (
    <Layout >
      <Head>
        <title>Comitée - {siteTitle} </title>
      </Head>
      <main className={styles.main}>
        
        <h1 className={styles.title}>Le Comité d'Animation</h1>
        <p>Réferent: Eric Bouchaud</p>
        <p>Liste des membres du comité d'animation voir sur le site de la mairie: </p>
        <p>
            
        <a href="https://www.mairie14.paris.fr/vie-citoyenne/les-conseils-de-quartier/le-conseil-de-quartier-jean-moulin-porte-d-orleans-226" rel="noopener" target="_blank"> Page de la mairie: Les membres des commitées d'animation </a> 
        </p>
        <h2>Les comptes rendus de nos réunions</h2>
        <p>Liste pas complète</p>
             <Menu1></Menu1>
         
        </main>
    </Layout>
     
    )
  }