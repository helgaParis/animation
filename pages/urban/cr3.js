import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import styles from '../../styles/Home.module.css'
import Nav1urban from '../../components/nav1urban'

export default function cr3() {
    return (
        <Layout >
        <Head>
          <title> Conseil de quartier JMPO – Commission urbanisme</title>
        </Head>
        <main className={styles.main}>
            <Nav1urban></Nav1urban>
            <h1 className={styles.title}>Compte rendu de la réunion du 12 mars 2019</h1>
            <p>Présents : Antonella, Jean-Philippe, Benjamin, Chantal, Paul, Michel, Christelle, Nathalie, Eric</p>
            <h3>100 Bd Jourdan</h3>
            <p>Principales remarques sur le projet qui avait été présenté en réunion publique : préserver une bonne largeur de trottoir rue du Père Corentin (2.50m si possible) pour fluidifier la circulation piétonne, notamment en sortie du futur café-resto, réduire la volumétrie pour aérer cet angle de rue (crainte d’avoir une masse imposante). </p>
            <ul>
                <li>Lettre à la maire pour attirer son attention sur ces remarques avant signature du permis de construire + lettre en partage sur Facebook</li>
                <li>Invitation de l’architecte et d’un représentant de Bouygues à la prochaine réunion plénière de juin.</li>
            </ul>
            <h3>50 Bd Jourdan (ex-garage Citroën)</h3>
            <p>La Commission marque un vif intérêt pour ce projet et souhaiterait visiter les lieux, comme cela avait été proposé par la mairie. </p>
            <ul>
                <li>Solliciter une visite des lieux</li>
            </ul>
            <h3>Piscine Elisabeth</h3>
            <p>La mairie a répondu en indiquant les futurs horaires d’ouverture au public. Les plages horaires sont larges et donnent a priori toute satisfaction, pour autant qu’il s’agisse bien d’une ouverture réelle au public, indépendamment des scolaires.
            </p>
            <ul>
                <li>Demander confirmation à la mairie sur ce point</li>
            </ul>
            <h3>Poinçon – Petite ceinture</h3>
            <p>Rappel réponse mairie : Des éléments de calendrier sur la petite ceinture : </p>
            <ul>
                <li>Retards de chantiers liés à un défaut de l’entreprise de serrurerie</li>
                <li>ouverture prévue à l’été 2019.</li>
                <li>Interventions limitées sur la petite ceinture dans un objectif de préservation de la biodiversité  (remplissage des inter espaces sur les rails par des copeaux de bois pour faciliter l’accessibilité piétonne, grillages de protection des pipistrelles).</li>
                <li>Un accès sera créé rue Didot et un accès rénové Rue de Coulmiers </li>
            </ul>
            <p>La Commission en conclut que la petite ceinture se destine à devenir un lieu de promenade, et s’interroge en conséquence sur le positionnement d’un accès PMR</p>
            <ul>
                <li>Interroger la mairie sur ce point</li>
            </ul>
            <h3>Aménagement av. Gal Leclerc</h3>
            <p>La Commission souligne la gêne occasionnée par les travaux en cours. Elle souhaite répondre favorablement à la sollicitation émise par le CQ Mouton-Duvernet pour une réunion commune sur ce sujet</p>
            <ul>
                <li>Prendre contact pour l’organisation d’une réunion à laquelle participeraient les membres de la Commission intéressés pour suivre ce sujet</li>
            </ul>
            <h3>Aménagement de la place des Droits de l’enfant</h3>
            <p>C’est un projet porté par le Collectif « Les Hypervoisins » qui souhaite nous rencontrer.</p>
            <ul>
                <li>Prendre contact avec ce Collectif</li>
            </ul>
            <h3>Une rue pour les enfants</h3>
            <p>Une idée intéressante, mais jugée non-prioritaire dans le plan de charge de la Commission.</p>
            <h3>City-stade rue de Châtillon</h3>
            <p>Après un rappel du contexte de cet équipement de quartier qui a déjà fait l’objet de nombreuses interventions (dossier remis par un riverain), la Commission décide de se saisir du sujet et de prendre deux initiatives :</p>
            <ul>
                <li>Demander à la mairie copie de la Déclaration préalable</li>
                <li>Organiser un rv sur place avec les adjoints au Sport de la Ville de Paris et de l’Arrondissement</li>
                <li>Puis, selon les conclusions à tirer, de solliciter une entrevue avec la maire du 14ième.</li>
            </ul>
            <h3>Réflexion sur la Porte d’Orléans</h3>
            <p>Le point de vue partagé par la Commission est qu’il s’agit là d’un sujet stratégique pour le quartier. Des études ont été réalisées, notamment par l’AUT. Il est important de s’en saisir collectivement et de participer à la réflexion pour un projet de réaménagement qui s’inscrira dans le long terme, en continuité du projet actuel sur l’avenue du Gal Leclerc.</p>
            <ul>
                <li>Proposer au CQ Mouton-Duvernet d’inviter l’AUT à la prochaine réunion commune.</li>
            </ul>
            <p>Prochaine réunion de la Commission : Le 14 mai 2019 à 19h30 salle Elisabeth (sous réserve confirmation pour la salle)</p>
        </main>
      </Layout>
    )
  }