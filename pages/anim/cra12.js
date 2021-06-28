import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

import Nav1anim from '../../components/nav1anim'

export default function Cra12() {
    return (
        <Layout >
        <Head>
          <title>Compte Rendu 12- Réunion des Conseillers, conseil de quartier JMPO </title>
        </Head>
        <main className={styles.main}>
            <Nav1anim></Nav1anim>
            <h1 className={styles.title}>Comité d’animation, réunion  du  16 juin 2021</h1>
            <p>Présents : une cinquantaine de participants (…une vingtaine en fin de réunion)
            dont représentant la mairie 14 : Guillaume Durand et Sidonie Parisot (élus) et  Thomas Aygualenc (coordinateur des CQ)</p>
            <p> Invités représentant la RATP (1ier et 2ième points de l’oj) : Mme Pouget et M. Pineau
            </p>
            
            <h2>Devenir de la gare routière Ernest Reyer</h2>
            <p>Constat partagé d’une forte dégradation de cette gare squattée par des SDF. </p>
            <p>  A l’appui d’un visuel, madame Pouget rappelle que le site est propriété de la Ville de Paris, et que, du côté RATP, l’instance décisionnaire est l’autorité de tutelle, IDF Mobilités (financeur). Un permis de démolir est déposé depuis 2018 avec l’objectif de remplacer aussi rapidement que possible les abris en procédant quai par quai.
            </p>
            <p> 
            Le CQ souligne qu’il serait très dommage de reconstruire les abris au même endroit car cet emplacement fait écran devant le square Serment de Koufra. Qui plus est, il conviendrait de repenser le positionnement de la gare routière dans une réflexion plus globale sur le réseau des lignes de bus sur le secteur, intégrant notamment une remise en cause du circuit actuel du 38 et du 92 qui n’est pas satisfaisant du tout. 
            </p>
            <p>Madame Pouget précise qu’il s’agit là d’un objectif de court terme, et que, parallèlement, un Comité de suivi mène une réflexion de long terme (scénario sur 10 ans) pour un réaménagement complet du secteur de la Porte d’Orléans. Ce que confirme Guillaume Durand en indiquant que l’instance qui suit ce dossier comporte de très nombreux participants, élus de Paris et petite couronne, acteurs opérationnels, bureau d’études (APUR). Ce dossier étant très complexe, très technique, il est difficile d’y associer à ce stade les habitants.</p>
            <p>Le CQ regrette d’être ainsi écarté a priori de la réflexion et considère que les citoyens ont toute légitimité à être formés et intégrés dans une démarche de co-expertise. 
            Guillaume Durand s’engage à organiser à la rentrée prochaine une réunion avec le CQ pour faire un point sur l’avancement des travaux menés par le Comité de suivi.   </p>
            
            <h2> Accord passé entre la RATP et Amazon + Chronopost</h2>
            <p>A l’appui d’un visuel, monsieur Pineau présente le contenu de l’accord en précisant que son application sur la Porte d’Orléans ne concerne qu’Amazon, le dépôt pour les livraisons de Chronopost se situant à Saint Denis (93).</p>
            <p>  L’arrivée de la marchandise au dépôt Corentin se fait par camions de 19 tonnes pour être ensuite acheminée jusqu’au client final par vélo cargos. Monsieur Pineau souligne ainsi la volonté de s’inscrire dans une démarche vertueuse qui répond aux objectifs de la transition énergétique. Des contacts ont été pris avec la Mission locale pour favoriser un recrutement local de jeunes du quartier. </p>
            <p> Des riverains regrettent que cet accord se traduise concrètement par un surcroit de trafic dans un endroit où la circulation est déjà très dense, avec une pollution de l’air et sonore importante compte tenu du passage incessant des bus. Ce à quoi la RATP répond en soulignant qu’il y a de plus en plus de bus à énergie électrique dans ce centre Corentin, qui est, à ce titre, à la pointe pour une évolution vers la Ville durable.</p>
            <p> Le CQ entend que « la RATP fait des efforts pour s’insérer dans la vie du quartier », mais il s’étonne précisément que ce soit par la presse qu’il ait pris connaissance (et la mairie également, semble-t-il) de cet accord. Car cet accord, dont le but est d’améliorer la rentabilité économique du Centre Corentin, est tout de même passé par un acteur en charge d’un service public.</p>
            <h2>Révision du PLU : point d’avancement </h2>
            <p>Deux référents ont été élus en interne pour représenter le CQ JMPO dans la démarche de révision du PLU : Audrey Lebeau-Live et Antonella Caponnetto. A leur initiative, des marches exploratoires appelées « Forums urbains » ont été réalisées avec un groupe d’une dizaine d’habitants sur deux thèmes : d’une part le réaménagement du secteur de la Porte d’Orléans dans la recherche d’une continuité urbaine entre Paris et sa proche banlieue, d’autre part, la perspective d’une promenade verte traversante du 15ièma au 13ième arrondissement prenant ancrage sur la petite ceinture.</p>
            <p>Un participant fait remarquer que, sur le premier thème, il est indispensable d’intégrer dans la réflexion la porte de Montrouge avec l’idée d’en faire une liaison douce en complémentarité de la Porte d’Orléans (prévu dans l’étude de Pôle).</p>
            <h2>Préemption du site de la Rochefoucauld : proposition de vœu  (en pièce jointe)</h2>
            
            <p>La Ville de Paris est actuellement en cours de négociation avec l’APHP pour faire de ce site un lieu ouvert au public, sans que sa destination future soit encore précisément connue publiquement. </p>
            <p>Le CQ JMPO souhaite s’associer aux démarches des CQ Mouton Duvernet et Montsouris-Dareau en formulant à son tour un vœu qui souligne son intérêt pour un lieu d’échanges, de culture et de création dans le bâti existant, avec le souci de préserver un espace vert particulièrement précieux à cet endroit.</p>
            <p> Guillaume Durand indique que la mairie du 14 se situe dans le même état d’esprit sur la destination du site et perçoit mal l’objectif du vœu. Lynda Abba, à l’origine de cette rédaction, proposera une mouture plus précise en référence aux vœux présentés par les autres CQ.</p>
            <h2>Dégradation du secteur de la Porte d’Orléans </h2>
            <p>  Le CQ attire l’attention une nouvelle fois sur les questions qui touchent à la sécurité et la propreté sur le quartier. Des signalements répétés (squat au 70 Jourdan, grille autour des arbres, camions livraison LIDL sur la piste cyclable…) sont pour le moment restés sans effet.</p>
            <p> Sidonie Parisot partage le constat fait par les habitants tout en soulignant les efforts réalisés pour améliorer la situation. La mairie a renouvelé ses interventions auprès des acteurs concernés, notamment auprès des deux bailleurs. Ce secteur n’est pas abandonné. Les services de propreté assurent le même service, et les points de vigilance sont renforcés, notamment par rapport aux SDF. C’est un combat qu’il faut mener ensemble, mais qui s’inscrira nécessairement dans la durée.</p>
            <p> Des locataires soulignent par ailleurs la mauvaise isolation des bâtiments récemment construits dans le cadre de la rénovation de cet îlot.<br/>
            A noter : la perspective d’une ouverture au public du jardin de l’ENS… (à suivre)</p>
            
           <h2> Préemption de la parcelle à l’angle Jourdan / Corentin : pour quel projet ? </h2>
           <p> Depuis le retrait du projet Bouygues Immobilier, diverses informations circulent sur le devenir de ce site qui a fait l’objet d’une préemption par la Ville de Paris : une volumétrie sensiblement réduite et un trottoir élargi, un centre de santé au RDC, pas de logements au 1ier étage… Sidonie Parisot assure les riverains et le CQ qu’une réunion publique à la rentrée permettra d’échanger concrètement sur les intentions avant que le programme ne soit finalisé. </p>
           <p>  Au 50 Jourdan, quelles échéances + associer les habitants à la destination future du RDC </p>
           <p> Après une fermeture du Centre d’hébergement annoncée initialement en mars 2021, reportée en octobre de cette même année, une information circule selon laquelle cette fermeture serait repoussée à l’année prochaine. Difficile d’avoir des précisions à ce sujet. <br/>
            La mairie s’était engagée à associer les habitants et les acteurs du quartier dans une vaste concertation sur le devenir du RDC dans le futur projet. Le CQ y est particulièrement attaché et reste dans l’attente d’un échéancier à ce sujet.</p>
            <h2> Plan de circulation quartier vert</h2>
            
            <p>La mairie a informé les habitants que les travaux pour le rétablissement du sens de circulation du tronçon de la Tombe Issoire se dérouleraient le 29 juin prochain. Le collectif d’habitants se déclare très vigilant sur le respect de cette date, déjà retardée par rapport à l’annonce initiale. </p>
             <p>  Concomitamment, des solutions devaient être proposées pour les rues Lacaze et Prisse d’Avennes, mais rien n’a été affiché à ce jour, ce qui inquiète les riverains concernés.</p>
              <p>  Enfin, concernant une révision plus globale du plan de circulation sur le quartier dont l’échéance est annoncée pour la rentrée prochaine, les habitants demandent à être associés à la réflexion avant toute mise en œuvre.</p>
              <h2>Place des Droits de l’Enfant </h2>
               <p>  Une nouvelle concertation avec les habitants sur le projet de « place de village » est annoncée sur la période du 24 au 27 juin de 16h à 20h.</p>
               <p>  Certains participants manifestent leur scepticisme devant ce projet, voire leur désapprobation pour non-respect de la procédure démocratique de validation par les budgets participatifs.</p>
               <h2> Installation pour mettre à l’ombre les jeux du Serment de Koufra</h2>
               <p>    A court terme, la mairie va voir si elle peut récupérer des toiles d’ombrage pour cet été. A défaut, des solutions plus durables (végétalisation sur portiques, par exemple) pourraient être mises en discussion avec le CQ à la rentrée (suivi par Marion Battelier).</p>
               <h2>Projet de plantations avec les enfants en relation avec les écoles</h2>
               <p>  Ce projet proposé par le CQ sera mis à l’étude à la rentrée. Associer les écoles aux jardins partagés existants seraient une piste intéressante, mais peut-être compliquée à mettre en œuvre car cela suppose d’organiser une sortie de l’école. A défaut, la création dans l’enceinte des établissements sera à réfléchir (suivi par Lynda Abba). </p>
               <h2>  Piscine Elisabeth : plus accueillante pour les familles </h2>
               
             <p>  Le directeur de la piscine n’a pas répondu à l’invitation du CQ pour cette réunion. Dommage, car un échange aurait été utile sur le fonctionnement actuel de la piscine (suivi par Marion Battelier).</p>
             <h2>  La parole aux habitants</h2>
             <p>   La commission Poinçon (Yves Tertrais) relance son projet de conférences au  restaurant « Le Poinçon ». La première séance est programmée pour le 25 octobre avec Jean Lebrun sur l’histoire du 14ième. D’autres suivront le dernier dimanche de chaque mois. Une participation financière du CQ a déjà été votée. Au-delà, la couverture des frais reste à finaliser.</p>
             <h2>Budgets à soumettre au vote</h2>
             <ul>  
             <li>Manifestation « Quartiers solidaires » à l’initiative des CQ le 10 juillet 2021 (avec la participation de Marie-Hélène –CQ Mouton-Duvernet. Suivi par Kadidiatou Sakande et Lynda Abba) : 500€. ADOPTE</li>
               
               <li>Animation de la place Ambroise Croizat à l’initiative de riverains le 27 juin 2021 (suivi par Blandine Serrero): 380€. ADOPTE </li>
               
              <li>Mois du handicap (suivi par Helga Petrovic): 1000€. Les avis étant partagés sur cette manifestation dont aucun évènement ne se déroule sur le quartier : ADOPTE A HAUTEUR DE 500€ </li>
              </ul>
              <h2>La parole aux habitants</h2>
              
              <p>Pas de prise de parole : la réunion se termine à 23h…</p>
              
          
        </main>
        </Layout>
    )
  }