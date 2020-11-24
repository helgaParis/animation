import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import styles from '../../styles/Home.module.css'
import Nav1urban from '../../components/nav1urban'

export default function Cr7() {
    return (
        <Layout >
        <Head>
          <title> Conseil de quartier JMPO – Commission urbanisme - Compte Rendu 7</title>
        </Head>
        <main className={styles.main}>
        <Nav1urban></Nav1urban>
        <h1 className={styles.title}>Compte rendu de la réunion du 6 novembre 2019</h1>
        <p>Présents : Annie, Frédéric, Antonella, Claire, Rachida, Laurence, Eric<br/>
        Invité : François Cantagreil - commission transport-mobilité CQ Montsouris-Darreau</p>
        <p>La commission est heureuse d’accueillir François Cantagreil qui expose rapidement le mode de fonctionnement de sa commission, et les principaux sujets de réflexion :</p>
        <ul>
            <li>Une des priorités mises en avant par les habitants riverains du parc Montsouris est le nœud de circulation à l’intersection des rues Gazan et Nansouty avec le Bd des maréchaux (nuisance sonore et pollution). La commission a obtenu qu’une section de la rue Gazan soit mise en sens unique ce qui a considérablement fluidifié la circulation aux heures de pointe. La même demande a été émise auprès de la mairie pour la rue Nansouty (en cours).</li>
            <li>Une demande adressée à la RATP pour créer une sortie nord pour le RER a essuyé un refus net et sans appel.</li>
            <li>Vœu adressé à la mairie pour obtenir sur certains tronçons une circulation limitée aux bus + riverains (comme la rue Daguerre)</li>
        </ul>
        <h2>Aménagement de la Porte d’Orléans (étude APUR)</h2>
        <p>En s’appuyant sur les tirages en format A1 (extraits de l’étude APUR) affichés au mur, chacun a pu exprimer ses remarques au regard des orientations proposées. A retenir :</p>
        <ul>
            <li>L’étude est une addition de mesures qui ne laissent pas transparaitre une approche globale du secteur, lisible dans ses intentions de requalification, notamment en relation avec le réaménagement de l’avenue du général Leclerc.</li>
            <li>Le flux important de véhicules entrant sur 3 voies depuis le périphérique crée des difficultés ensuite au croisement de la rue Paul Appel, puis des maréchaux &rArr; une proposition serait de réduire à 2 voies</li>
            <li>L’espace ainsi libéré au niveau de l’îlot central permettrait le stationnement des bus desservant le sud et l’est, bus qui pourraient ensuite repartir en contournant cet îlot central sans rentrer dans Paris comme le propose l’étude.</li>
            <li>Le déport envisagé des bus de tourisme est pertinent, mais le lieu pressenti av. de la Porte de Montrouge serait regrettable, car cette avenue calme se prête aux déplacements doux, notamment du fait qu’elle n’est pas chahutée par les entrée/sorties particulièrement dangereuses du périphérique.</li>
            <li>Globalement, les orientations proposées dans l’étude ne portent pas une véritable ambition architecturale pour redonner de la beauté à ce lieu stratégique, une entrée de Paris qui draine des flux considérables. C’est aussi un lieu de vie pour de très nombreux habitants, aujourd’hui sectorisés sans véritables espaces de rencontre (autre que marchands). L’aménagement de l’ancienne petite gare (initiative du Conseil de quartier) a donné le ton en termes de requalification. Il faudrait poursuivre la démarche &rArr; un concours d’architecture international sur la Porte d’Orléans ?</li>
        </ul>
        <p>La réflexion est à pousuivre…</p>
        <p>L’heure tardive n’a pas permis d’aborder l’autre point à l’oj : la place d’Alésia. Ce point sera donc remis à l’oj de la prochaine réunion fixée au mardi 10 décembre 2019 à 19h30 à la petite salle du stade Elisabeth (sous réserve disponibilité de la salle).</p>
        <p>Merci à François Cantagreil pour sa participation à cette réunion.</p>
      </main>
      </Layout>
    )
  }