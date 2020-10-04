import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'
import flowerStyles from '../styles/flower.module.css'
import utilStyles from '../styles/layout.module.css'
const email='conseil14@asf-web.fr'
export default function Climat() {
    return (
        <Layout >
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <main className={styles.main}>
        <div className={utilStyles.textgauche}>
            <h1 className={styles.main} >La commission Climat</h1>
            <p>La commission a pour but de proposer des projets visant à améliorer la qualité de vie pour les habitants du quartier et envisager également un nouvel aménagement de la porte d'Orleans en concertation avec les habitants.</p>
            <p>
            Il s'agit entre autres de travailler sur : </p>
            <ul>
              <li>La pollution de l'air, sonore, lumineuse</li>
              <li>sur la végétalisation (espace au sol ou sur mur) </li>
              <li>sur le recyclage des déchets alimentaires (installation de composts)</li>
              <li>etc...</li>
              </ul>
            <h3>Nous vous invitons à participer à cette commission </h3>
            <p>Réunions  tous les derniers mercredi de chaque mois .</p>
            <h3>Nous vous invitons également à nous communiquer {""}
            <a href={`mailto:${email}?subject=Commission de Climat&body= Mes Propositions :`}>vos propositions par email.</a>    
             </h3>
</div>        
       <div className={flowerStyles.containeranim}>    
            <div className={flowerStyles.cloud}></div>
            <div className={flowerStyles.ground}></div>    
            <div className={flowerStyles.flower}>
                <div className={flowerStyles.stem}></div>
                <div className={flowerStyles.leaf_1}></div>
                <div className={flowerStyles.leaf_2}></div>
                <div className={flowerStyles.leaf_3}></div>
                <div className={flowerStyles.petal_1}></div>
                <div className={flowerStyles.petal_2}></div>
                <div className={flowerStyles.petal_3}></div>
                <div className={flowerStyles.petal_4}></div>
                <div className={flowerStyles.petal_5}></div>
                <div className={flowerStyles.petal_6}></div>
                <div className={flowerStyles.center}></div>
            </div>
        </div>
        
  
      </main>
      </Layout>
    )
  }