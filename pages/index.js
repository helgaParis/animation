import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'
import stylesPlan from '../styles/plan.module.css'
import Link from 'next/link'


export default function Home() {
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
                    <h3 className={styles.subsubtitle}>Réunion des conseillers  repoussé au 17 décembre</h3>
                    <p><Link href="/blog">
                    <a title="Détails">Détails voir page Actualités</a>
                    </Link>
                                </p>
                    <h3 className={styles.subsubtitle}>Comitée d'animation réunion zoom le 12 novembre</h3>
                    <p><Link href="/anim/cra9">
                    <a title="Compte Rendu du 12 novembre  2020">Compte Rendu</a>
                    </Link>
                                </p>
                    
                    <h3 className={styles.subsubtitle}>Plénière du Conseil de quartier : le 6 octobre 2020 </h3>
                    <p><Link href="/anim/cra8">
                    <a title="Compte Rendu du 6 octobre  2020">Compte Rendu</a>
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
                    <img src="/plan14e.jpg" className={stylesPlan.plan14} alt="Plan des six quartiers du 14e arrondissemnt de Paris" ></img>
                    
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
