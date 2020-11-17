import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

import Nav1anim from '../../components/nav1anim'

export default function Cra8() {
    return (
        <Layout >
        <Head>
          <title>Comité d'Animation - Compte Rendu 8 - Comitée d'animation, conseil de quartier JMPO</title>
        </Head>
        <main className={styles.main}>
            <Nav1anim></Nav1anim>
            <h1 className={styles.title}>Comité d’animation, réunion  du 6 octobre  2020</h1>
            <p>23 personnes connectées sur zoom, dont pour la mairie : les élus Sidonie Parisot et Elliot de Faramond et le coordinateur Gille Belloteau</p>
            <h2>Commission communication</h2>
            <h3>projet de site internet. </h3>
            
            <p>Helga Pétrovic présente le projet de site internet pour notre conseil de quartier JMPO : un travail important qu’elle a réalisé avec le concours de Zéliha Chaffin pour la partie rédactionnelle. Le site rappelle notamment le rôle d’un conseil de quartier avec ses commissions, les coordonnées pour un contact, les réalisations passées et les projets. <br/> Un développement à venir apportera une couche d’interactivité, et permettra notamment aux habitants de réagir et de faire des propositions.</p>
            <p>D’autres actions de communication sont en cours de réflexion, en particulier pour récupérer le contenu de notre page facebook, tombée en désuétude.</p>
            
            
            <h2>Projet de création de la COOP14</h2>
            <h3>un supermarché coopératif</h3>
            
            <p>Xavier Morin présente le projet de la COOP14. Environ 500 coopérateurs à ce jour, qui ont acquis ce statut en prenant 10 actions à 10€ dans la coopérative, et en s’engageant à offrir 3h de leur temps par mois pour participer au fonctionnement du magasin.  <br/>Le local situé au 70 Bd Jourdan nécessite des travaux d’aménagement.  <br/>L’ouverture est prévue en fin d’année 2020. Un projet innovant, et une source d’animation bienvenue sur ce secteur du quartier.</p>
            
            <h2>Commission climat </h2>
            <h3>les actions de végétalisation/composts sur le quartier</h3>
            
            <p>Lynda Aba qui anime cette commission indique que celle-ci se réunit tous les derniers mercredis du mois. </p>
            <p>Xavier Morin présente une initiative des riverains de la rue Poirier de Narçay pour la végétaliser. Le projet serait à financer dans le cadre des budgets participatifs. 
            Des précisions sont ensuite données sur le fonctionnement des composts gérés par des collectifs d’habitants.</p>
            
            <h2>Commission urbanisme </h2>
            <h3>divers sujets en réflexion</h3>
            <ul>
            <li>Projet d’aménagement du secteur Porte d'Orléans : Eric Bouchaud  présente une synthèse des réflexions de la commission à partir de l’étude produite par l’APUR (voir note à suivre en annexe).</li>
            <li>Aménagements temporaires piétons-vélos : des aménagements globalement appréciés, mais les embouteillages permanents de la Porte d’Orléans nécessitent d’apporter rapidement des solutions.</li>
            <li>Expérimentation sens de circulation rue d'Alésia : très positif au niveau de la place HV Basch, calme et tranquillité pour les riverains, une baisse ressentie de la pollution, mais une gêne réelle pour les automobilistes obligés de se dérouter sur des parcours compliqués. Un comité de suivi est mis en place par la mairie, et des aménagements sont envisagés, notamment rue de la Tombe Issoire, pour améliorer la desserte des quartiers.</li>
            <li> Saturation des parcs stationnement vélos : à l’étude par la mairie pour une extension des capacités actuelles. Apparition de parcs sécurisés dans les rues : en attente d’informations sur le dispositif. </li>
            </ul>
            <h2>Commission Poinçon  </h2>
            <h3>le projet des "RV de la petite gare", une programmation de conférences au Poinçon avenue du Gal Leclerc.</h3>
            
            <p>Les participants se sont exprimés au fur et à mesure des sujets figurant à l’ordre du jour.<br/>Pas d’autres sujets abordés.<br/>
           Fin de la réunion plénière à 20h30.</p>
            
            <h3>Annexe : {""}
            <Link href="/urban/p1">
            <a title="Projet de la Commission Urbanisme">
            Commission d’urbanisme, Réflexions sur la Porte d’Orléans
            </a>
            </Link>
            </h3> 
            
            
            
        </main>
        </Layout>
    )
  }