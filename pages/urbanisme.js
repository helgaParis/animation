import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'
import Part1urban from '../components/part1urban'
import Part2urban from '../components/part2urban'


export default function Urbanisme() {
    return (
        <Layout >
                <Head>
                    <title>Urbanisme - {siteTitle} </title>
                    <meta
                        name="keywords"
                        content="commission urbanisme, participer à l'urbanisme dans le quartier"
                    />
                </Head>
        
                <main className={styles.main}>
        
                <h1 className={styles.title}> La Commission Urbanisme </h1>
                <p>Réferent : Eric Bouchaud</p>
                <p>La commission urbanisme se réunit périodiquement pour réfléchir aux projets aux projets d'aménagement urbains envisagés sur le quartier, 
                    aux projets immobiliers qui ont un impact sur leur environnement, ainsi que sur les questions de mobilités, 
                    dès lors qu'elles sont liées à un aménagement de l'espace public.
                </p>
                <p>La commission émet des avis en direction de la mairie d'arrondissement. 
                Elle est également à l'écoute des habitants et peut faire remonter des propositions sur d'autres sujets.
                </p>
                <nav  aria-label="navigation liste des projets urbanisme">
                    <h2  id="navigation-projets-urban" className={styles.subtitle}> Quelques projets sur lesquels nous travaillons</h2>
                    <Part2urban></Part2urban>
                </nav>
                <nav  aria-label="navigation liste des comptes-rendus urbanisme">
                    <h2  id="navigation-comptes-rendus-urban"className={styles.subtitle}>Les comptes rendus de nos réunions</h2>
                    <Part1urban></Part1urban>
                </nav>
            </main>
        </Layout>
    )
}