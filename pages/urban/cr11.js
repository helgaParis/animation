import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import styles from '../../styles/Home.module.css'
import Nav1urban from '../../components/nav1urban'
import Link from 'next/link'

export default function Cr11() {
    return (
        <Layout >
        <Head>
          <title> Conseil de quartier JMPO – Commission urbanisme - Compte Rendu 11</title>
        </Head>
        <main className={styles.main}>
            <Nav1urban></Nav1urban>
            <h1 className={styles.title}>Compte rendu de la réunion du 9 avril 2021</h1>
            <p>Présents : 6 participants de la comUrba</p>
            <p>Invités : Agnès Bertrand, adjointe, et Candice Mercier, chargée de mission
</p>
            <h2> Quelles perspectives suite à l'abandon du projet de Bouygues Immobilier à l'angle Corentin/Jourdan
</h2>
            <p>Décision de préempter prise en septembre dernier avec l’acquisition par l’établissement foncier d’IDF et la maitrise d’ouvrage du futur projet confiée à la RIVP.</p>
            <p>Les orientations données à ce jour : un retrait de 2,40m pour dégager un espace suffisant pour la circulation piétonne, une hauteur alignée sur l’immeuble voisin du bd Jourdan, un rdc et r+1 réservés à un usage public (centre de santé ?) et des étages supérieurs largement terrassés pour laisser passer la lumière</p>
            <p>Les participants insistent sur la nécessité de réduire la densité au maximum pour assurer le bien-être des habitants des immeubles contigus rue du Père Corentin. Faut-il également envisager d’élargir la rue (et pas seulement le trottoir) pour faciliter le passage des bus ? Comment traiter l’impasse qui sépare actuellement les immeubles du magasin de motos ?</p>
            <p>En conclusion, les riverains et le conseil de quartier souhaitent être associés en amont au stade de l’élaboration du cahier des charges, avec l’espoir d’un projet ambitieux au regard des objectifs du futur PLU « bioclimatique ».
            </p>
            <p>Par ailleurs les riverains dénoncent la pollution sonore et de l’air avec les sorties incessantes des bus de l’entrepôt</p>
            
            <h2>Le changement de sens de circulation Alésia </h2>
            <p>La mairie a tenu une réunion de suivi sur les conséquences du passage au sens unique de circulation depuis juillet dernier. Le quartier vert est fortement impacté. En particulier, la solution adoptée début mars pour faciliter l’accès aux riverains (un changement de sens de circulation du tronçon de la Tombe Issoire entre la rue Lacaze et la rue du Douanier Rousseau) s’est traduit par une multiplication du traffic par 3 ou 4 car c’est devenu un circuit de transit identifié par les GPS. Des solutions durables devraient être apportées d’ici septembre prochain, avec peut-être une échéance plus rapprochée (mai ?) pour le rétablissement du tronçon de la Tombe Issoire.</p>
          
            <h2>Le projet place des Droits de l'Enfant</h2>
            <p>La mairie a tenu une réunion pour rassurer les conseils de quartier qui avaient jusqu’à présent le sentiment d’être tenu à l’écart de ce projet élaboré à l’initiative des Hypervoisins. Une vaste opération de concertation va être engagée avant d’arrêter les grandes lignes du projet.</p>
            
           <h2>Porte d'Orléans : la Ville du 1/4 d'h, où en est-on ?</h2>
           <p>Des équipes d’étudiants sont en cours de constitution avec l’échéance de fin mai pour produire des propositions d’aménagement. Notre CQ a déjà été contacté par deux étudiantes pour connaitre les réflexions de la commission Urbanisme.</p>
           
           <h2>A l'extérieur du quartier : les enjeux sur La Rochefoucauld et impasse Reille
</h2>
           <p>Agnès Bertrand présente rapidement la problématique sur ces deux sites. Sur l’avenue Reille, le promoteur InLi s’est déjà vu refusé deux permis de construire. Une nouvelle proposition sera présentée en réunion publique organisée par la mairie fin avril. Pour l’ancien hôpital de la Rochefoucauld, l’acquisition du foncier est en cours de négociation et rien n’est encore défini comme programme. La mairie a fixé deux priorités : préserver au maximum les espaces verts et y implanter un équipement culturel.</p>
           
           <h2>La révision du PLU à venir</h2>
           <p>Agnès Bertrand reprend les grandes étapes qui conduiront au futur PLU parisien dont la mise en œuvre opérationnelle est prévue en janvier 2024.
           Il serait utile que chaque conseil de quartier désigne  2 référents PLU capables au sein d’un comité de pilotage d’assurer une coordination dans l’avancement des travaux.
           </p>
           
           <h2>Divers</h2>
           <ol>
           <li>Une intervention sur la rue Beaunier, particulièrement impactée par la circulation des bus : voir si le revêtement de la chaussée ne pourrait pas être refait + réduire la vitesse des bus</li>
           <li> Voir s’il est possible de déplacer la fontaine à eau de la rue Jean Moulin.</li>
           </ol>
          
        </main>
        </Layout>
    )
  }