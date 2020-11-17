import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import styles from '../../styles/Home.module.css'

import Nav1anim from '../../components/nav1anim'

export default function Cra6() {
    return (
        <Layout >
        <Head>
          <title>Comité d'Animation - Comitée d'animation, conseil de quartier JMPO</title>
        </Head>
        <main className={styles.main}>
            <Nav1anim></Nav1anim>
            <h1 className={styles.title}>Comité d’animation, réunion  du 15 septembre  2020</h1>
            <p>(en plein air place Ambroise Croizat)</p>
            <p>Présents : Zéliha, Lynda, Helga, Geneviève, Eric </p>
            <h3>Agenda de rentrée</h3>
            <p>Le comité d’animation confirme son souhait d’une réunion plénière en octobre. Du côté de la mairie, la date du 6 octobre serait disponible, à défaut en novembre compte tenu des congés scolaires. C’est donc la date du 6 octobre qui sera proposée aux conseillers de quartier qui seront réunis 15 jours avant, soit le 22 septembre 2020. </p>
            <h3>Communication</h3>
            <p>Helga présente le cadre d’un futur site pour notre conseil de quartier. En relation avec Zéliha responsabilité rédactionnelle), Helga (responsabilité technique) poursuit la mise au point avec l’objectif de pouvoir présenter au moins la page d’accueil en plénière. Le site serait hébergé sur Vercel, avec la possibilité de créer un compte pour les quelques personnes qui devront y accéder.</p>
            <p>Il serait intéressant de reprendre sur le site l’historique des réalisations du conseil de quartier. Contact : Chantal, Claire, Rachida…</p>   
            <h3>Autres sujets </h3>
            <ul>
            <li>Masques à la demande de Kadidiatou : réalisé sur intervention de Lynda</li>
            <li>Point sur place Droits de l’Enfant (plénière)</li>
            <li> Végétalisation au 3 rue de Narcay. La commission Climat suivra les autres initiatives (plénière).</li>
            </ul>
        </main>
        </Layout>
    )
  }