import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'
// import Link from 'next/link'
import Menu1 from '../components/part1anim'
import Menu2 from '../components/ancienanim'

export default function Comite() {
    return (
    <Layout >
      <Head>
        <title>Comité - {siteTitle} </title>
      </Head>
      <main className={styles.main}>
        
        <h1 className={styles.title}>Le Comité d'Animation</h1>
        <p>Réferent: Eric Bouchaud</p>
        <p>Liste des membres du comité d'animation voir sur le site de la mairie: </p>
        <p>    
        <a href="https://www.mairie14.paris.fr/vie-citoyenne/les-conseils-de-quartier/le-conseil-de-quartier-jean-moulin-porte-d-orleans-226" rel="noopener" target="_blank"> Page de la mairie: Les membres des commitées d'animation </a> 
        </p>
        
        <h2 className={styles.subtitle} >Evénements à venir</h2>
        <ul>
        <li>Plenière du vendredi 5 février 2021</li>
       </ul>
        
        <nav  aria-label="navigation liste des comptes-rendus récents du comité">
        <h2 className={styles.subtitle} id="navigation-comptes-rendus-anim">Les comptes rendus de nos réunions </h2>
        <p>Réunions  du comité et <span className={styles.bolderText }> Plenières </span>depuis décembre 2018</p>
             <Menu1></Menu1>
         </nav>
         <nav  aria-label="navigation liste des comptes-rendus anciens du comité">
         <p>Réunions avant décembre 2018 - les fichiers pdf s'ouvriront dans une nouvelle fenêtre</p>
              <Menu2></Menu2>
          </nav>
        </main>
    </Layout>
     
    )
  }