import Head from 'next/head'

import styles from '../styles/Home.module.css'
import stylesPlan from '../styles/plan.module.css'
const email='conseil14@asf-web.fr'

export default function Home() {
  return (
    < >
        <Head>
            <title>Paris 14e - Conseil du Quartier Jean Moulin Porte d'Orléans</title>
            <meta
                name="keywords"
                content="Accueil, conseil de quartier, democratie participative, democratie de proximité, contribuer, vie de quartier"
            />
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>Conseil de quartier Jean Moulin Porte d’Orléans (JMPO)</h1>
           <h2>Plenière le 6 octobre 2020 à 19h</h2>
            <p>Cette page est temporaire. Vous pouvez nous envoyer vos propositions concernant l'ordre du jour de la Pleinière et 
                autres voeux via ce site : </p>
            <p>Envoyer des {" "}
            <a href={`mailto:${email}?subject=Plenière du Conseil du Quartier JM PO&body= Mes Propositions :`}>propositions par email</a>
            </p>
            <p> Via un formulaire: quelqus jours avant la Plenière</p>
            <h2>Lien vers la réunion zoom</h2>   
            <p>Vous le trouverez sur votre invitation. Il apparaitra également sur cette page un peu avant la réunion</p>
            
           
        </main>

    </>
  )
}
