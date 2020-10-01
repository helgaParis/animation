import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'
import Nav1urban from '../components/nav1urban'


export default function Urbanisme() {
    return (
        <Layout >
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <main className={styles.main}>
        
        <h1 className={styles.title}> La Commission Urbanisme </h1>
            {/* un module qui prend des infos standard d'un api? */}

            
            <p>Réferent : Eric Bouchaud</p>
            <p>La commission urbanisme se réunit périodiquement pour réfléchir aux projets aux projets d'aménagement urbains envisagés sur le quartier, 
                aux projets immobiliers qui ont un impact sur leur environnement, ainsi que sur les questions de mobilités, 
                dès lors qu'elles sont liées à un aménagement de l'espace public.
            </p>
            <p>
            La commission émet des avis en direction de la mairie d'arrondissement. 
            Elle est également à l'écoute des habitants et peut faire remonter des propositions sur d'autres sujets.
            </p>
            <h2> Quelques projets sur lesquelles nous trravaillons</h2>
            <Nav2urban></Nav2urban>

            <h2>Les comptes rendus de nos réunions</h2>
            <Nav1urban></Nav1urban>
            </main>
            </Layout>
    )
}