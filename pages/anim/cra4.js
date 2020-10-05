import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import styles from '../../styles/Home.module.css'

import Nav1anim from '../../components/nav1anim'

export default function Cra4() {
    return (
        <Layout >
        <Head>
          <title>Comité d'Animation - Conseil de quartier JMPO</title>
        </Head>
        <main className={styles.main}>
            <Nav1anim></Nav1anim>
            <h1 className={styles.title}>Comité d’animation, réunion  du 26 mai 2020</h1>
            <p>En visio-conférence</p>
            <p>Présents : Helga, Kadidatiou, Alexis, Zeliha, Lynda, Eric<br/>
            Autres membres excusés
             </p>
            
            <p>Cette réunion marque la reprise de nos activités dans un contexte de déconfinement qui complique un peu la tâche…<br/>
            Tour de piste des idées des uns et des autres </p>
            <ul>
            <li>
            Améliorer notre communication pour se faire mieux connaitre des habitants du quartier : créer un site (Helga), distribuer des flyers, ouvrir une boite mail…</li>
            <li>Tenir une permanence à l'association  artistes sans frontière selon fréquence à définir (Helga).</li>
            <li>Tenir un stand au marché pour nous faire connaitre (Linda).</li>
           <li> Venir en aide aux personnes vulnérables isolées et/ou en difficulté dans le contexte Covid, par exemple apporter des masques et du gel hydroalcoolique (Kadidatiou, Alexis). Comment repérer les personnes concernées : du porte à porte ?</li>
            <li>Réactiver la proposition de la commission Climat  pour organiser un forum regroupant les associations qui ont pour objet l’écologie sur le quartier (Lynda)</li>
            <li>Faire un repérage des besoins supplémentaires en parcs stationnement vélos sur voie publique compte tenu du développement des déplacements vélos (Eric)</li>
            <li>Marquage au sol devant les petits commerces pour organiser les files d’attente : notre CQ pourrait être partie prenante de cette opération initiée par la mairie.</li>
            </ul>
            <h3>Relevé de décisions :</h3>
            <ul>
            <li>Communication : Helga monte un projet de site avec le concours de Zeliha </li>
            <li>Aide aux personnes vulnérables : avec le concours de Kadidatiou, Éric sollicite masques et gel auprès de la mairie pour les femmes seules avec enfant hébergées à la résidence rue Morène. Se rapprocher également de la Maison des réfugiés.</li>
            <li>Forum des associations écolo : Lynda rédige un projet avec la commission Climat dans la perspective d’une tenue à la rentrée prochaine (octobre ?). Attente retour de Linda sur le projet pour une meilleure organisation.</li>
            <li>Repérage besoins en parcs stationnement vélos : Éric invite les conseillers à lui communiquer des propositions de lieux pour ensuite les transmettre à la mairie.</li>
            <li>Marquage au sol : Zéliha et Eric récupèreront le matériel nécessaire en mairie le 2 juin à 10h (repoussé à 11h45). Chaque conseiller peut, sur son secteur, repérer les commerçants qui seraient intéressés.</li>
            </ul>
            <p> Le comité d’animation propose une nouvelle réunion courant juin, en présentiel. Sur une suggestion de Lynda, cette réunion pourrait se tenir en plein air, place Ambroise Croizat.  </p>   
            
        </main>
        </Layout>
    )
  }