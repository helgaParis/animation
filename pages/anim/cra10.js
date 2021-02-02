import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

import Nav1anim from '../../components/nav1anim'

export default function Cra8() {
    return (
        <Layout >
        <Head>
          <title>Compte Rendu 10 - Réunion des Conseillers, conseil de quartier JMPO </title>
        </Head>
        <main className={styles.main}>
            <Nav1anim></Nav1anim>
            <h1 className={styles.title}>Comité d’animation, réunion  du 20 janvier  2020</h1>
            <p>Visio réunion : 8 participants</p>
            <p>Le Comité d'animation souhaite une année 2021 aussi bonne que possible dans le contexte que nous connaissons. En effet, nous traversons une période difficile avec le virus, et l'activité de notre conseil de quartier s'en ressent. Pour autant, Il est important de maintenir le lien entre nous, et continuer à porter des projets à travers les commissions.</p>
            <p>Le Comité d’animation renouvelle ses excuses pour les deux rdv qui n'ont pas pu se dérouler comme prévu avant les fêtes de fin d'année. </p>
           <p> A l'ordre du jour : </p>
            
            <h2>1. Divers engagements budgétaires </h2>
           <ol>
           <li>Petits commerces de proximité : plusieurs membres du comité d’animation sont allés à la rencontre des commerçants pour leur proposer des guirlandes lumineuses, ceci s’inscrivant dans le cadre d’une initiative de la mairie du 14ième. Contact intéressant pour le conseil de quartier, mais une action qui semble n’avoir été que partiellement suivie du côté mairie. Bilan en demi-teinte, et la sollicitation de participation budgétaire n’a pas été confirmée. En conséquence, les conseillers ne donnent pas suite à un engagement sur le budget du CQ JMPO.</li>
           
          <li>Réveillon solidaire : le résultat du vote par Doodle (8 pour, 0 contre - quorum non atteint) n’a pas permis de conclure. Les conseillers sont favorables à renouveler comme chaque année leur soutien financier, et renvoient la décision à la prochaine réunion plénière sur la base d’un engagement budgétaire à hauteur de 1500€.</li>
           <li>Achat d'outils de jardinage pour l'Oasis de Koufra : une demande a été adressée au CQ pour un soutien à hauteur de 1000€. Sur le principe, les conseillers sont favorables à un engagement budgétaire, mais la décision est renvoyée à la séance plénière, avec des devis.</li>
           <li>COOP14 : l’installation de la COOP14 au 70 bd Jourdan nécessite des travaux importants. Un soutien financier est attendu du CQ. Celui-ci y mettrait deux conditions pour respecter les règles de la charte : que les services proposés par la COOP14 soient ouverts à tous les habitants du quartier (et pas réservés aux seuls coopérateurs ayant souscrit une action), et que l’engagement budgétaire corresponde à l’achat d’un matériel précis (sur devis). Dans l’attente d’une demande formalisée adressée au CQ avec les éléments répondant aux conditions posées, la décision est renvoyée à la prochaine réunion plénière.</li>
           </ol>
            
            <h2>Projet de plateforme citoyenne</h2>
            <p>Ce projet porté par la mairie, et historiquement demandé par plusieurs CQ du 14ième, en est à ses prémices. Il conduirait à créer un espace virtuel à la fois ressource sur la vie de l’arrondissement, et interactif/participatif créant un lien entre la mairie, les CQ et les habitants. Les conseillers se félicitent d’un tel projet (à l’élaboration duquel deux membres sont associés), et soulignent que le site du CQ JMPO créé en interne préfigure d’ores et déjà, plus modestement, ce projet de plateforme citoyenne.</p>
            
            <h2>Modifications du plan de circulation rue d'Alésia</h2>
            <p>Les conseillers s’étonnent, d’une part, de ne plus avoir de contact avec la mairie (cf réunions de suivi), d’autre part, que les solutions avancées pour répondre aux difficultés rencontrées par les habitants n’aient pas été mises en œuvre. Le mécontentement s’installe, au risque de ne plus voir les aspects positifs de cette opération.</p>
            
            <h2>Projet du CQ Montsouris Dareau pour la Cité Internationale Universitaire </h2>
            <p>Un partenariat est en cours pour venir en soutien aux étudiants qui subissent de plein fouet la crise sanitaire et se précarisent. Quatre projets sont en réflexion :   < /p>
            <ul>
            <li>L’antenne médicale avec les différentes fourchettes budgétaires</li>
            <li>La réfection des terrains de loisirs (pétanque et multi-sport) accessibles à tous</li>
            <li>La mise en place des abris bac pour le tri des déchets</li>
            <li> L’équipement informatique de la bibliothèque, celle-ci étant ouverte au public </li>
            </ul>
            <p>Les conseillers manifestent leur intérêt pour ces projets, en privilégiant fortement ce qui relève de la santé, et en supposant que, sur le plan alimentaire, les associations spécialisées dans ce domaine assurent le minimum vital.<br/>
            Un point sera fait en séance plénière.</p>
            
            <h2>Piscine Elisabeth : proposition d’action commune avec le CQ Didot-Vanves  </h2>
            <p>Depuis que la gestion de la piscine a été confiée par DSP à un prestataire privé, les associations qui proposaient auparavant des services aux habitants n’ont plus les moyens de renouveler leur offre. Le CQ Didot-Vanves nous a alertés sur cette situation dommageable pour le quartier. Les conseillers décident de renvoyer ce sujet à la séance plénière, et attendent une clarification du côté de la mairie.</p>
            
            <h3> Autres sujets issus du débat   </h3> 
            <p>Plusieurs conseillers sont intervenus sur deux sujets concrets à évoquer en plénière : sur l’aménagement urbain et la mobilité (Porte d’Orléans, espace devant le Lidl Jourdan, angle Père Corentin-Jourdan…) d’une part, sur l’observatoire de la démocratie participative (modalités de renouvellement des membres), d’autre part.</p>
            
            <p>La date de la prochaine séance plénière est fixée au vendredi 5 février 2021 à 19h (en visio par ZOOM), en espérant une participation de la maire et de ses adjoints concernés par l’ordre du jour. Une invitation sera également adressée aux autres CQ.
            </p>
            
            
        </main>
        </Layout>
    )
  }