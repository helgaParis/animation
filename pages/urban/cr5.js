import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import styles from '../../styles/Home.module.css'
import Nav1urban from '../../components/nav1urban'

export default function Cr5() {
    return (
        <Layout >
        <Head>
          <title> Conseil de quartier JMPO – Commission urbanisme</title>
        </Head>
        <main className={styles.main}>
        <Nav1urban></Nav1urban>
        <h1 className={styles.title}>Compte rendu de la réunion du  25 juin 2019</h1>
        <p>Présents : Donatella, Jean-Philippe, Chantal, Paul, Claire, Rachida, Rougui, Nathalie, Eric</p>
        <h3>Aménagement de l’avenue du Gal Leclerc</h3>
        <p>La commission accueille Nicolas Behr, conseiller de quartier Mouton-Duvernet et membre Drapo, qui retrace l’historique de ce dossier sur plus de 10 ans. Un combat de longue date donc, mené en commun avec le conseil de quartier JMPO et sa commission urbanisme avec l’objectif dès le départ d’avoir une vision globale et cohérente du projet de la place Denfert-Rochereau à la porte d’Orléans (jusqu’au périphérique). Le cheminement est parsemé d’embûches car du côté Ville de Paris, l’approche est sectorielle et semble de courte vue avec des budgets qui ne permettent pas de répondre à la vision globale portée par les habitants.</p>
        <p>C’est d’abord 1M€ débloqué sur 4 ans pour un projet estimé à au moins 40 M€.</p>
        <p>En 2014, la maire du 14ième obtient un engagement de 10M€ en donnant la priorité au secteur sud.</p>
        <p>Les travaux sont engagés, y compris sur la place Victor Basch, mais sous des contraintes sévères imposées par la préfecture de Paris (pas associée suffisamment tôt au projet).</p>
        <p>La question du circuit des bus n’est pas réglée</p>
        <p>Dernier élément d’actualité concernant le secteur de la Porte d’Orléans : la lettre du 10 mai 2019 de la maire du 14ième à la maire de Paris, lettre dont se félicite notre commission, car elle reprend pour une large part les souhaits exprimés par les habitants. Une interpellation positive mais la commission regrette que d’autres acteurs ne soient pas également associés, notamment la Région, la Préfecture, le Département (pour la D92) et la commune de Gentilly (concernée aussi comme territoire de proximité).</p>
        <p>Une étude de l’APUR doit être finalisée en juillet prochain. Une restitution est envisagée à la rentrée. La commission souhaite être destinataire de cette étude au plus tôt, dès le mois de juillet si possible, et en tout état de cause avant la présentation en réunion publique pour pouvoir y travailler &rArr; lettre à adresser à la maire du 14ième en ce sens (Paul).</p>
        <p>Cette lettre sera adressée en copie aux autres acteurs impliqués dans le projet : CQ Mouton-Duvernet, Drapo, association des commerçants et AUT en leur suggérant d’appuyer cette initiative de leur côté.</p>
      
        <h3>Centre d’hébergement 50 Jourdan</h3>
        <p>Un peu d’improvisation et de précipitation pour la journée Portes Ouvertes organisée le 20 juin dernier, journée mondiale pour les réfugiés. Aucun acteur du quartier n’a été invité à cette journée, et le RDC a finalement été fermé dans les jours qui ont suivi, la priorité étant donnée à l’accueil des migrants dans les étages.</p>
        <p>Une véritable inauguration est attendue pour la rentrée, mais d’ores et déjà la commission souhaite être fixée sur le projet d’aménagement du sous-sol qui ne semble plus être d’actualité (activités de loisirs/sportives annoncées en réunion publique) &rArr; interpellation mairie (Eric)</p>
        
        <h3>Projet immobilier au 100 Jourdan</h3>
        <p>La commission s’est impliquée sur ce projet, et a adressé une lettre à la maire du 14ième pour attirer son attention sur la volumétrie de l’immeuble envisagé et sur la largeur insuffisante du trottoir. Elle souhaiterait connaitre les motifs du rejet du permis de construire &rArr;interpellation mairie (Eric)</p>
        
        <h3>Place des Droits de l’Enfant</h3>
        <p>La présence de Patrick Bernard, représentant les Hypervoisins, à la réunion plénière a été appréciée (nécessité d’une information sur le projet), même si les échanges qui ont suivi ont été parfois un peu vifs.</p>

        <h3>Piscine Elisabeth</h3>
        <p>Malgré une relance, pas de réponse de la mairie du 14ième sur les horaires d’ouverture au public hors réservation associations et scolaires. 2ième relance à faire (Eric)</p>

        <h3>Questions diverses</h3>
        <ul>
            <li>La commission urbanisme de Montsouris suggère une rencontre entre nos deux commissions. Avis très favorable pour l’accueillir lors de notre prochaine réunion (Eric).</li>
            <li>Enlèvement d’une colonne Morris Bd Brune signalée par une habitante, sans aucune information préalable. Propriété de la société Decaux, 550 colonnes seraient ainsi remplacées à Paris par du mobilier lumineux et pivotant &rArr; à confirmer par la mairie du 14ième (Eric)</li>
            <li>Petite ceinture : informations attendues de la mairie du 14ième sur l’ouverture de cette promenade urbaine, et de son accès pour handicapés (Eric)</li>
            <li>Forum des associations le 7 septembre 2019 : voir si possibilité de préparer un panneau sur les travaux de notre commission.</li>
        </ul>
        <p>Prochaine réunion le mardi 10 septembre 2019, à 19h30 au stade Elisabeth (à confirmer)</p>



        </main>
        </Layout>
    )
}
  