import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/layout.module.css'

export default function Charte() {

    return (
        <Layout >
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <main className={styles.main}>
        
        <h1 className={styles.title}>La charte des Conseils de Quartier</h1>
        <p>Extraits :</p>
        <p>Le Conseil du 14ème arrondissement a décidé, dans le cadre du développement de la
démocratie locale, la mise en place de six Conseils de quartier :
            <ul>
                <li>Didot-Plaisance-Porte-de-Vanves</li>
                <li className={utilStyles.boldText}>Jean-Moulin-Porte-D’Orléans</li>
                <li>Montsouris-Dareau</li>
                <li>Montparnasse-Raspail</li>
                <li>Mouton-Duvernet</li>
                <li>Pernety</li>
            </ul>

  </p>
  <p>...</p>
  <h3>Art. 3 Rôle des Conseils de quartier</h3>
  <p>Le Conseil de quartier est un lieu :
      <ul>
          <li>d'information, de consultation et de concertation sur les orientations, les projets, les
décisions de la municipalité concernant le quartier ou ayant une incidence sur son
devenir et son développement ;</li>
          <li>d'écoute des problèmes et des attentes des habitants pour les synthétiser et les
faire connaître à la mairie ;</li>
          <li>d’élaboration et d’accompagnement, notamment dans le cadre du Budget
Participatif Parisien, de projets d’intérêt collectif et de propositions en direction de la
mairie d’arrondissement sur toute question intéressant le quartier ;</li>
          <li>de suivi des projets retenus dans le cadre du Budget Participatif Parisien et
concernant le quartier, quelle que soit l’origine de la proposition ;</li>
          <li>de dialogue entre les différents acteurs du quartier, quelles que soient leurs origines
et leurs opinions.</li>
      </ul>
    </p>
    <p>...</p>
        <p>
             <a href="/charte.pdf" target="_blank">Voir toute la charte en pdf dans un nouveau onglet</a> 
       </p>
                 
               
             
        
      </main>
      </Layout>
    )
  }