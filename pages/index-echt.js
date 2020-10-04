import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'
import stylesPlan from '../styles/plan.module.css'

import Link from 'next/link'


export default function Home() {
  return (
    <Layout >
        <Head>
            <title>{siteTitle}</title>
            <meta
                name="keywords"
                content="Accueil, conseil de quartier, democratie participative, democratie de proximité, contribuer, vie de quartier"
            />
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>Conseil de quartier Jean Moulin Porte d’Orléans (JMPO)</h1>
            <div className={stylesPlan.row}>

                <div className={stylesPlan.column}>
                    <div className={styles.encadrebleu}>
                    <h2>Agenda</h2>
                    <h3>Plénière du Conseil de quartier : le 6 octobre 2020 à 19h en visio-conférence</h3>
                    <p>Lien zoom : {""}
                    <a href="https://zoom.us/j/97306443824?pwd=YW5YTHJtNDFnOE5LYzdYeDlRUitsdz09"  rel="noopener" target="_blank" >Participer à la réunion </a>
                                </p>
                    </div>
                    <div className={styles.encadre}>
                        <h2>Dernières Nouvelles</h2>
                        
                        <h3>Ce site Internet</h3>
                        <p>Ce site est le projet de confinement de plusieurs membres du comitée d'animation. C'est un travail en progrès et nous ajouterons du contenu sur les pages d'information au cours des prochaines semaines. <br/> La page Actualités annoncera les évenements en forme de blog.</p>
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
