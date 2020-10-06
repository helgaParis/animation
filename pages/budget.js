import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Budget() {
    return (
        <Layout >
        <Head>
          <title>Budget - {siteTitle}</title>
        </Head>
        <main className={styles.main}>
        
        <h1 className={styles.title}>Quels est le budget du conseil de quartier ?</h1>
        <p>Le conseil de quartier Jean Moulin Porte d’Orléans (JMPO) dispose d’un budget annuel dédié pour la mise 
            en oeuvre de ses actions, dont le montant est fixé par la ville de Paris. Ce budget est le même pour 
            chaque conseil de quartier parisien. Il se compose d’un budget de fonctionnement et d’un budget d’investissement. 
            Au total, ce sont 11 569 euros qui sont attribués chaque année au conseil de quartier.</p>
        <h2 className={styles.title}>Le budget de fonctionnement</h2>
        <p>Comme son nom l’indique, le budget de fonctionnement est dédié à l’organisation au quotidien et à la bonne
             marche du conseil de quartier. Son montant annuel est de 3 305 euros. Chaque dépense est soumise à un vote
             à la majorité simple des conseillers présents en réunion des conseillers. Ce budget permet au conseil de quartier
             de financer des achats de biens consommables qui servent à la communication et à l’animation du conseil de quartier.
             Selon les besoins, il peut ainsi financer :</p>
             <ul>
                 <li>les photocopies</li>
                 <li>l’achat de fournitures de bureau</li>
                 <li>les frais d’impression des affiches, des tracts voire des journaux du conseil de quartier</li>
                 <li>la location de matériel (chaises, tables, sonorisation…)</li>
                 <li>l’alimentation et les boissons pour un repas ou une fête de quartier</li>
             </ul>
        <h2 className={styles.title}>Le budget d’investissement</h2>
        <p>Le budget d’investissement permet quant à lui de financer des projets d’intérêt général dans le quartier 
            permettant d’améliorer l’espace public et le cadre de vie. Il peut s’agir par exemple de financer des travaux 
            ou des aménagements sur la voirie et dans les espaces verts comme l’installation de mobilier urbain (bancs, boîtes
            à livres, table de pique-nique, jardinières, agrès de sport…), la réalisation de fresques décoratives, de traversées
            piétonnes etc. Tous les projets répondant à ces critères, qu’ils émanent des conseillers de quartier ou des citoyens 
            sont les bienvenus. Une fois soumis au conseil de quartier, le projet est mis au vote en séance plénière. Un quorum 
            minimum du tiers des conseillers, soit 20 membres, est requis pour procéder au vote. Le projet doit alors recueillir 
            la majorité des votes pour être approuvé.</p>

      </main>
      </Layout>
    )
  }