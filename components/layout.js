import Head from 'next/head'
import utilStyles from '../styles/layout.module.css'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

//const name = 'paris14conseil'
export const siteTitle = 'Conseil de Quartier Jean Moulin Porte d\'Orléans' 

export default function Layout({ children}) {
  return (
   <div className={styles.container}>
      <Head>          
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Le site du Conseil de Quartier, Paris 14e arrondissement, quartier Jean Moulin - Porte d\'Orléans"
        />
        <meta
            name="robots"
            content="index, follow"
        />
        <meta
            name="author"
            content="Helga Petrovic"
        />
        <meta
            name="copyright"
            content="conseil du quartier JMPO"
        />
        <meta
            name="revisit-after"
            content="14 days"
        />
        <meta
          property="og:image"
          content={`https://cq.petrovic.ovh/public/logo.png/`}
        />       
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    
      <header className={styles.header}>
        

            <div className={styles.navbar}>
                 <Link href="/">
                 <a title="Accueil">Accueil</a>
                 </Link>
                 <Link href="/commissions">
                 <a title="Les Commissions actives">Commissions</a>
                 </Link>
                 <Link href="/comitee">
                 <a title="Le Comitée d'Animations" >Comitée</a>
                 </Link> 
                 <Link href="/charte">
                 <a title="La Charte des Conseils" >Charte</a>
                 </Link>
                 <Link href="/contribuer">
                 <a title="Contribuer au Conseil" >Contribuer</a>
                 </Link>
                 <Link href="/histoire">
                 <a title="L'histoire des Conseils de Quartier" >Histoire</a>
                 </Link>
                 <Link href="/mentions">
                 <a title="Mentions légales" >Mentions</a>
                 </Link>
                 <Link href="/posts">
                 <a title="Actualités" >Actualités</a>
                 </Link>
             </div>
          
            <h1 className={utilStyles.headingLg}>Conseil du Quartier, Paris 14, JM PO</h1>
            
        
       
      </header>

      <main>{children}</main>
      <footer className={styles.footer}>
          <a 
              href="https://artistessansfrontieres.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Créé par {' '}
              <img src="/asf20p.png" alt="Artistes sans Frontières"  />
            </a> 
      </footer>
     </div>
    )
}