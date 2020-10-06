import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Commissions() {
    return (
    <Layout >
      <Head>
        <title>Comissions - {siteTitle}</title>
      </Head>
      <main className={styles.main}>
        
        <h1 className={styles.title}>Les comissions du Conseil de Quartier</h1>
        <p>Page provisoire</p>
        <p>Le Conseil du Quartier a constitué des comissions pour travailler sur des thèmes spécifiques. 
            Les citoyens sont invités à se joindre à une ou plusieurs commissions et contribuer aux discussions et au travail.
            Des nouvelles commissions peuvent être créés, si plusieurs citoyens souhaitent se saisir d'un thème. 
        </p>
        <h2>Fonctionnement des commissions</h2>
        <p>Chaque commission est plutôt libre de définir son mode de fonctionnement. </p>
        <p>Une commission choisit son réferent auprès du comitée d'animation, qui communique avec le comitée.</p>
        <p>Avant les réunions plénières, les referents sont invités à participer à la réunion du comitée d'animation, qui prépare la Plenière.</p>
        <p>Lors des réunions preparatives, le déroulement des plenières est défini et cela peut inclure une présentation du travail des commissions.  </p>
        
      </main>
    </Layout>
     
    )
  }