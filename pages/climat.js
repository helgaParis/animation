import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'
import flowerStyles from '../styles/flower.module.css'
import utilStyles from '../styles/layout.module.css'

export default function Climat() {
    return (
        <Layout >
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <main className={styles.main}>
        <div className={utilStyles.textgauche}>
            <h1 className={styles.main} >La commission Climat</h1>
            <h3>Dernières Activités - Appel à la participation</h3>
            <p>La commission du climat souhaite initier un forum sur le climat,
                une grand salon où les entreprises<br></br> et associations du 14e peuvent se presenter
                et rencontrer le publique        </p>
            <p> La commission cherche des benevoles et des candidatures à la participation</p>
            <li>Pariticper en tant que exposant</li>
            <li>Participer à l'animation</li>
            <li>Aider à organiser le forum</li>
            <li>Aider à installer le salon</li>
            <li>... etc</li>
            <p>Contactez-nous pour participer:   lien à faire</p> 
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