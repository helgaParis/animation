import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import styles from '../../styles/Home.module.css'

import Nav1anim from '../../components/nav1anim'

export default function Cra7() {
    return (
        <Layout >
        <Head>
          <title>Comité d'Animation -Compte Rendu 7 - Conseil de quartier JMPO</title>
        </Head>
        <main className={styles.main}>
            <Nav1anim></Nav1anim>
            <h1 className={styles.title}>Comité d’animation, réunion  du 22 09 2020</h1>
            <p>à la Maison des réfugiés</p>
            <p>Présents : 7 conseillers </p>
            
            <p>L’objet de cette réunion est de préparer la séance plénière dont la date est fixée au mardi 6 octobre 2020, à 19h à la Maison des réfugiés, 50 bd Jourdan (sauf contre-indication d’ici là pour Covid).</p>
            <h3>Principes retenus pour le déroulement</h3>
            <ul>
            <li>Contrairement aux précédentes séances plénières, la parole sera donnée à la salle en 2ième partie de réunion, les sujets préparés étant en première partie (avec un temps de questions-réponses après chaque sujet). Ceci devrait permettre de s’assurer d’un temps suffisant pour traiter des actions menées par le CQ, en évitant les redondances avec les questions des habitants. </li>
            <li>Des feuillets seront sur table à l’entrée pour recueillir des questions écrites si certaines personnes ne souhaitent pas prendre la parole </li>
            <li>La séance pourrait être filmée si l’environnement juridique du droit à l’image le rend possible </li>
            <li>Prévoir la possibilité de projeter </li>
            </ul>
            <h3>Ordre du jour</h3>
             <ul>
             <li> Commission Communication : présentation du projet de site internet</li>
              <li>Présentation du projet COOP14</li>
              <li>Commission Climat : actions végétalisation sur le quartier</li>
              <li>Commission Urbanisme : aménagements temporaires vélos, modif sens circulation rue d’Alésia, saturation parcs stationnement vélos, projet pl.Droits de l’enfant, projet secteur Porte Orléans…</li>
              <li>Commission Poinçon : le projet des « RV de la petite gare »</li>
              <li>Temps d’échange avec la salle sur tout autre sujet</li>
              </ul>
              <h3>Demande budgétaire par la commission Poinçon</h3>
              <p>Le budget demandé par la commission (voir ci-dessous) est perçue comme étant disproportionnée au regard des capacités financière du CQ. Pour mémoire, celle-ci est la suivante :</p>
              <ul>
              <li>En investissement : un disponible d’environ 23.000€, y compris la dotation annuelle 2020 de 8.264€.</li>
              <li> En fonctionnement : un disponible de 8.000€ environ, y compris la dotation annuelle 2020 de 3.306€.</li>
              <li>…/…</li>
              </ul>
              <p>Les conseillers sont néanmoins unanimes pour saluer le projet de la commission et décident de le soutenir dans son lancement à hauteur de 500€ par séance pour 2 à 3 séances d’ici la fin de l’année.	 Après évaluation, les conseillers examineront la suite qui pourra être donnée sur le plan financier pour 2021.	</p>
              <h3>Projet de budget annuel des Rendez-vous de la Petite Gare 2020-2021</h3>
              
              <h4>Dépenses</h4>
              <p>Location de la salle mise à disposition par la Poinçon<br/>
              Régisseurs    					350 euros par séance<br/>
              Communication numérique<br/>
              Communication papier<br/>
              flyers: 1000    					203 euros par séance<br/>
              affichettes : 100    				100 euros par séance<br/>
              Accueil conférencier (consommations)    	50 euros par séance<br/>
              Total dépenses par séance: 			703 euros<br/>
              Total dépenses année: 703 x 24    16 872 euros</p>
              
              <h4>Recettes</h4>
              <p>Mise à disposition de la salle par le Poiçon  </p>
            
        </main>
        </Layout>
    )
  }