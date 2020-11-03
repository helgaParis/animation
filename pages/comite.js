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
        
        <h2 className={styles.subtitle} >Prochaine réunion zoom le 12 novembre</h2>
        <p>A l'ordre du jour :</p>
        <ul>
        <li> Bilan de la séance plénière du 6 octobre dernier</li>
       <li> Proposition de Linda pour un soutien financier à COOP14 (à soumettre aux conseillers)</li>
        <li> Point sur le site de notre CQ avec Helga et Zéliha</li>
        <li> Proposition de Zéliha par rapport aux petits commerces en période de confinement</li>
        <li> Autres points sur la vie du quartier dans cette période compliquée...</li>
        <li> Proposition de planning pour une réunion des conseillers, suivie d'une nouvelle plénière en 2021</li>
        <li>...</li>
        </ul>
        
        <nav  aria-label="navigation liste des comptes-rendus du comité">
        <h2 className={styles.subtitle} id="navigation-comptes-rendus-anim">Les comptes rendus de nos réunions</h2>
        <p>Liste pas complète</p>
             <Menu1></Menu1>
         </nav>
        </main>
    </Layout>
     
    )
  }