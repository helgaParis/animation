import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'
import stylesPlan from '../styles/plan.module.css'

export default function Home() {
  return (
    <Layout >
        <Head>
            <title>Paris 14e - Conseil du Quartier Jean Moulin Porte d'Orléans</title>
            <meta
                name="keywords"
                content="Accueil, conseil de quartier, democratie participative, democratie de proximité, contribuer, vie de quartier"
            />
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>Le Conseil du Quartier</h1>
            <div className={stylesPlan.row}>
                <div className={stylesPlan.column}>
                    <p> Les conseils de quartier existent dans les communes de plus de 80 000 habitants depuis 2002. 
                        Ils sont un élément de la {" "}
                        <a
                        href="https://www.api-site.paris.fr/mairies/public/assets/2017%2F6%2FFormation_citoyenne_democratie_locale_8_octobre%202015.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        // className={styles.linkintern}
                        >
                        démocratie de proximite.
                        </a>
                        </p>
                        
                    <p>Le 14 arrondissement de Paris en compte six, dont Jean Moulin - Porte d'Orléans</p>
                    <h3>La délimination des quartier est définie dans l'annexe de la charte </h3>
                    <p>Le Conseil de quartier « Jean Moulin – Porte d’Orléans » couvre le territoire : boulevard Romain Rolland, 
                        rue du Professeur H. Vincent côté pair, rue Emile Faguet côté pair, 86 à 160 rue de la Tombe Issoire, 
                        39 à 85 rue d’Alésia, côté impair de la rue des Plantes (dans sa partie comprise entre la rue d’Alésia 
                        et le boulevard Brune) et toutes les rues à l’intérieur de cette délimitation.
</p>
                </div>
                <div className={stylesPlan.columnright}>
                    <img src="/plan14e.jpg" className={stylesPlan.plan14} alt="Plan des six quartiers du 14e arrondissemnt de Paris" ></img>
                </div>
                    
            </div>
           
        </main>

    </Layout>
  )
}
