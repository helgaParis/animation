import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'
import stylesPlan from '../styles/plan.module.css'
import Link from 'next/link'


export default function Hometest() {
  return (
    <Layout >
        <Head>
            <title>Accueil - {siteTitle}</title>
            <meta
                name="keywords"
                content="Accueil, conseil de quartier, democratie participative, democratie de proximité, contribuer, vie de quartier, Porte d'Orléans, Jean Moulin, Alésia, Paris 14e,"
            />
        </Head>

        <main className={styles.main}>
            <div className={stylesPlan.row}>

                <div className={stylesPlan.column}>
                    <div className={styles.encadrebleu}>
                    <h2 className={styles.subtitle}>Agenda</h2>
                    <h3 className={styles.subsubtitle}>Réunion des conseillers le mercredi 20 janvier 19h</h3>
                    <p><Link href="/anim/cra10">
                    <a title="Compte Rendu">Voir Compte Rendu</a>
                    </Link>
                                </p>
                    <h3 className={styles.subsubtitle}>Plenière du Conseil JM PO, 5 février 2021, 19h sur Zoom</h3>
                    <p><Link href="/blog">
                    <a title="Détails">Détails voir page Actualités</a>
                    </Link>
                                </p>
                    
                    <h3 className={styles.subsubtitle}>Jour fixe - Assistance numérique - Chaque semaine le mardi à 18h30 </h3>
                    <p><Link href="/blog">
                    <a title="Détails">Détails voir page Actualités</a>
                    </Link>
                                </p>
                    </div>
                    <div className={styles.encadre}>
                        <h2 className={styles.subtitle}>Dernières Nouvelles</h2>
                        <h3>Une carte des commerces ouvertes pendant le confinement</h3>
                        <p>Trouvez des services accesibles dans le quartier {""}
                        <Link href="/blog">
                        <a title="Page des actualités" >sur la page Actualités ! </a>
                        </Link>
                        </p>
                        
                        <h3 className={styles.subsubtitle}>Ce site Internet</h3>
                        <p>Ce site est le projet de confinement de plusieurs membres du comitée d'animation. C'est un travail en progrès et nous ajouterons du contenu sur les pages d'information au cours des prochaines semaines. </p>
                        <p>N'hésitez pas à nous faire part de vos {""}
                        <Link href="/contribuer">
                                    <a title="Page de contributions" >propositions </a>
                                    </Link>                        
                        et de nous informer de vos événements dans le quartier.</p>
                    </div>
                                        
                </div>
 <div className={stylesPlan.columnright}>
 <div className={stylesPlan.swappy}>
   <div className={stylesPlan.ibottom}>
     <img src="/plan-jmpo.jpg"  alt="Quartier Jean Moulin Porte d'Orléans" className={stylesPlan.plan14} ></img>
     </div>
     <div  className={stylesPlan.itop}>
        <img src="/plan14e.jpg" alt="Plan des six quartiers du 14e  à Paris" className={stylesPlan.plan14} ></img>
    </div>
 </div>
   <p><a href="https://opendata.paris.fr/map/les_conseil_de_quartier_du_14e/?location=16,48.82275,2.32633&basemap=stamen.toner" rel="noopener noreferrer" target="_blank">Ouvrir le plan dans une nouvelle fenêtre</a></p> 
   <h4 className={stylesPlan.fondjauneplan}>Le Conseil de quartier « Jean Moulin – Porte d’Orléans » couvre le territoire : </h4>
   <p >Boulevard Romain Rolland, 
       rue du Professeur H. Vincent côté pair, rue Emile Faguet côté pair, 86 à 160 rue de la Tombe Issoire, 
       39 à 85 rue d’Alésia, côté impair de la rue des Plantes (dans sa partie comprise entre la rue d’Alésia 
       et le boulevard Brune) et toutes les rues à l’intérieur de cette délimitation.
   </p>
  
</div>
</div>

        </main>

    </Layout>
  )
}
