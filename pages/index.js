import Head from 'next/head'
import Layout, { siteTitle } from '../components/layoutsansnav'
import styles from '../styles/Home.module.css'
const email='conseil14@asf-web.fr'

export default function Home() {
  return (
    < Layout>
        <Head>
            <title>Paris 14e - Conseil du Quartier Jean Moulin Porte d'Orléans</title>
            <meta
                name="keywords"
                content="Accueil, conseil de quartier, democratie participative, democratie de proximité, contribuer, vie de quartier"
            />
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>Plénière le 6 octobre 2020 à 19h</h1>
           <h2></h2>
            <p>Vous pouvez nous envoyer vos propositions concernant l'ordre du jour de la plénière et 
                autres voeux via ce site : </p>
                <ul>
                    <li> <p>Envoyer des {" "}
                    <a href={`mailto:${email}?subject=Plenière du Conseil du Quartier JM PO&body= Mes Propositions :`}>propositions par email</a></p>
                    </li>
                    <li>Si le lien n'ouvre pas votre messagerie, vous pouvez copier l'adresse mail : conseil14@asf-web.fr</li>
                    <li> <p> Via un formulaire: quelques jours avant la plénière</p></li>
                </ul>
           
           
            <p>Attention ! Cette page a été conçue pour recueillir vos propositions, mais elle est temporaire, elle sera fermée à la suite de la plénière.  </p>
            <h2>Lien vers la réunion zoom du 6 octobre à 19h</h2>   
            <p>Vous trouverez le lien sur votre invitation. Il apparaitra également sur cette page un peu avant la réunion</p>
            
           
        </main>

    </Layout>
  )
}
