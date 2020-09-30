import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import styles from '../../styles/Home.module.css'

import Nav1urban from '../../components/nav1urban'

export default function cr1() {
    return (
        <Layout >
        <Head>
          <title> Conseil de quartier JMPO – Commission urbanisme</title>
        </Head>
        <main className={styles.main}>
            <Nav1urban></Nav1urban>
            <h1 className={styles.title}>Compte rendu de la réunion du 18 décembre 2018</h1>
            <p> 8 personnes présentes sur 14 inscrits dans la commission</p>
            <h3></h3>
            <p>Tour de table qui permet aux anciens de rappeler les sujets les plus importants qui ont été abordés précédemment, notamment : la petite gare, l'avenue Maréchal Leclerc et la Porte d'Orléans, la petite ceinture</p>
            <p>La prochaine réunion sera l'occasion de passer en revue les projets en cours ou en réflexion. Pour cela, il est décidé d'inviter une ou deux personnes de la mairie impliquées dans l'urbanisme sur le quartier.</p>
            <p>- Le référent sera choisi à cette prochaine réunion. Il sera en binôme avec un membre de notre commission également membre du Comité d'animation,  capable de relayer l'information : Paul ou Eric. Et pour respecter la parité, ce sera donc de préférence une femme.</p>
            <p>- prochaine réunion fixée au jeudi 17 janvier 2019 à 19h, après le Comité d'animation du 15, avant le Conseil élargi du 22, et avant la plénière du 19 ou 20 février 2019.</p>
            <p>Eric se charge de réserver la salle et d'inviter des représentants de la Ville.</p>
        </main>
        </Layout>
    )
  }