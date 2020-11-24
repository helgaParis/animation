import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'
const email='conseil14@asf-web.fr'

export default function Communication() {
    return (
        <Layout >
        <Head>
          <title>Communication - {siteTitle}</title>
        </Head>
        <main className={styles.main}>
        <div >
            <h1 className={styles.title} >Commission Communication</h1>
            <p>Faire connaître les actions et le fonctionnement du conseil de quartier auprès des habitants du 14e arrondissement. Telle est la mission que s’est fixée la commission communication pour la mandature 2018-2021. </p>
            <h3 className={styles.subsubtitle}> Projet Site Internet</h3>
            <p>Depuis plusieurs mois, ses membres s'attellent ainsi à leur projet phare de l’année 2020 : la création d’un site internet du conseil de quartier Jean Moulin - Porte d’Orléans (JMPO). <br/>
            L’objectif ? Offrir une vue d’ensemble sur les projets menés tout au long de l’année par le conseil de quartier et faciliter les échanges et le dialogue avec les habitants.</p>
            
            <p>Armée de son clavier d’ordinateur et d’une bonne dose de café, notre architecte du web, Helga, a mis à profit ses talents de développeuse afin de concocter un site internet sur-mesure pour le conseil de quartier. <br/>
            Côté plume, c’est notre journaliste, Zeliha, qui est aux manettes pour rédiger et mettre en forme les textes de ce nouveau site internet. <br/>
            Encore en chantier, le site à vocation à s’enrichir au fil des semaines. N’hésitez pas à nous envoyer vos idées, attentes ou suggestions pour le faire vivre. Et pourquoi pas, nous rejoindre pour lancer de nouveaux projets...</p>
            <h4><a href={`mailto:${email}?subject=Contributions - Communication - Conseil de Quartier JM PO&body=Ma contribution : `}>Email : conseil14@asf-web.fr</a></h4>
        </div>
        
  
      </main>
      </Layout>
    )
  }