import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import styles from '../../styles/Home.module.css'
import Nav1urban from '../../components/nav1urban'

export default function cr8() {
    return (
        <Layout >
        <Head>
          <title> Conseil de quartier JMPO – Commission urbanisme</title>
        </Head>
        <main className={styles.main}>
            <Nav1urban></Nav1urban>
            
            <h1 className={styles.title}>Compte rendu de la réunion du 10 décembre 2019</h1>
            <p>8 personnes présentes</p>
            <p>
            La séance est entièrement consacrée au projet d’aménagement de la Porte d’Orléans à l’appui de l’étude produite par l’APUR.</p>
            <p>
            Les réflexions déjà engagées au cours des deux séances précédentes amènent à un certain consensus sur les dysfonctionnements constatés. Les avis sont plus partagés sur les réponses proposées par l’APUR. Et surtout, notre commission est unanime pour considérer qu’il est nécessaire d’avoir une vision globale sur ce secteur dans un périmètre élargi, et ne pas traiter que l’aménagement de l’espace public au regard de la mobilité.</p>
            <p>
            Avant de mettre en forme ses réflexions, et les porter à la connaissance de la mairie, la commission souhaite rencontrer un représentant de l’APUR (en tenant la mairie informée de cette initiative).</p>
            <p>
            Une fiche synthèse des points sensibles soulevés par la commission sera établie en préparation de cette rencontre.</p>
            <p>
            Pas de date pour la prochaine séance, celle-ci étant conditionnée par l’échange préalable avec l’APUR. En revanche, la commission retient l’idée d’un circuit à pied pour mieux s’imprégner du terrain. Une date sera proposée après la période des fêtes de fin d’année. 
            </p>
          </main>
          </Layout>
    )
  }
  