import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'

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
        <h1 className={styles.title}>
        Le Conseil du Quartier
        </h1>
        <p> Les conseils de quartier existent dans les communes de plus de 80 000 habitants depuis 2002. 
            Ils sont un élément de la {" "}
            <a
            href="https://www.api-site.paris.fr/mairies/public/assets/2017%2F6%2FFormation_citoyenne_democratie_locale_8_octobre%202015.pdf"
            target="_blank"
            rel="noopener noreferrer"
            >
            démocratie de proximite.
            </a>
            </p>
        <p>Le 14 arrondissement de Paris en compte six, dont Jean Moulin - Porte d'Orléans</p>
      </main>

    </Layout>
  )
}
