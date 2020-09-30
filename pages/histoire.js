import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Histoire() {
    return (
        <Layout >
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <main className={styles.main}>
        
        <h1 className={styles.title}>L'histoire des Conseils de Quartier</h1>
        
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
        <p>...</p>
      </main>
      </Layout>
    )
  }
  