import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import styles from '../../styles/Home.module.css'
import Nav1urban from '../../components/nav1urban'
import Link from 'next/link'

export default function Cr12() {
    return (
        <Layout >
        <Head>
          <title> Conseil de quartier JMPO – Commission urbanisme - Compte Rendu 12</title>
        </Head>
        <main className={styles.main}>
            <Nav1urban></Nav1urban>
            <h1 className={styles.title}>Compte rendu de la réunion du 7 mai 2021</h1>
            <p>Présents : 7 participants et un invité Yves Jouanique de France Nature Environnement (FNE)</p>
            <p>La réunion avait pour seul objet à l’oj le PLU et sa révision.</p>
            <h2> Les référents PLU</h2>
            <p>Les deux référents pour JMPO sont Audrey Lebeau-Live et Antonella Caponnetto. Une première réunion s’est tenue cette même semaine à la mairie pour jeter les bases de ce qu’est un PLU et organiser la suite des travaux :</p>
            <ul>
             <li>   un diaporama va rapidement être diffusé, puis une réunion publique le 25 mai</li>
<li> des forums urbains sur des thématiques ciblées à définir seront organisés entre le 26 mai et le 6 juin (présentiel en extérieur ou/et visio). Dates et contenus à l’initiative de chaque CQ avec une possibilité de propositions en interCQ.</li>
<li> un calendrier sera publié pour des marches exploratoires</li>
</ul>
<p>            (Les référents PLU confirmeront les éléments présentés ici)
            
           </p>
           
           <h2>Intervention d’Yves Jouanique</h2>
           <p>FNE est une fédération qui regroupe à tous les niveaux territoriaux (du national au local) des associations qui œuvrent pour donner toute sa place à la nature dans l’environnement, notamment urbain. On peut aussi y adhérer à titre individuel. Une quarantaine d’associations adhèrent à FNE IDF, dont Exemplarité14 dans le 14ième (autour du projet Reille).</p>
<p>           Hors secteurs sauvegardés, le PLU définit par son règlement ce qu’on peut construire et où, et donc où on ne peut pas construire (par exemple les espaces verts protégés). </p>
<p>           Le PLU actuel date de 2006 et a fait l’objet de plus d’une quarantaine de modifications en cours de période pour une adaptation des projets au contexte (extension de Roland Garros sur les serres d’Auteuil…). Mise à part ces modifications, seule la loi peut imposer de nouvelles dispositions à un PLU. Ce fut le cas avec la loi ALUR qui a supprimé le Coefficient d’occupation des sols (COS), ou permis l’élargissement de la base de la tour Montparnasse et une surélévation à son sommet.</p>
<p>           La révision du PLU est un long processus qui doit aboutir fin 2023. Une conférence citoyenne a été réunie au dernier trimestre 2020 : 4 séances, c’était un peu court quand on connait la complexité d’un PLU. </p>
          <p> FNE s’est exprimée dans le cadre d’un appel à contributions pour souligner notamment :</p>
           
           <ul>
           <li>Une densification trop forte alors même que Paris est déjà depuis des décennies une des villes les plus denses d’Europe
</li>
           <li> Une ville trop minérale : le ratio d’espaces verts par habitant (hors bois de Boulogne et Vincennes) est le plus faible des capitales européennes</li>
           <li>Un statut de la pleine terre qui n’est pas reconnu en tant que tel, trop souvent confondu avec une végétalisation de surface</li>
           </ul>
          <h2>Echanges autour de cette intervention</h2>
<ul>
<li>   sur le caractère communal du PLU. Mais il y a le Schéma de cohérence territoriale qui est à l’échelle de la métropole, et qui constitue un cadre d’orientations générales + de nombreux échanges avec les communes périphériques…s</li>
 <li>sur l’objet même du PLU : que la construction ? Les problématiques de transport/mobilité sont abordés dans le rapport de présentation… s</li>
  <li>sur la végétalisation qui devrait être étendue partout où c’est possible, dans les rues par exemple, ou en toiture des bâtiments. OK, c’est un plus, mais pas de même nature que la pleine terre, et peut poser des problèmes d’approvisionnement en eau. Avant tout protéger les espaces verts existants, surtout privés, qui trop souvent sont sacrifiés par la promotion immobilière.s</li>
   <li>sur le corridor de biodiversité à prolonger sur notre arrondissement entre le 15ième et le 13ième à hauteur de la petite ceinture. Concrètement, la Villa Virginie (copropriété privée) ne pourrait-elle pas y contribuer (un sujet déjà étudié par le CQ il y a quelques années).s</li>
    </ul>
          
        </main>
        </Layout>
    )
  }