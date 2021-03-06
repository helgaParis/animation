import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const name = 'paris14conseil'
export const siteTitle = "Paris 14e - Conseil du Quartier Jean Moulin Porte d'Orléans"

export default function Layout({ children}) {
    return (
        
        <div className={styles.container}>
            <Head>         
                <meta 
                name="viewport" 
                content="width=device-width, initial-scale=1.0"
                /> 
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
                    content={`https://conseil-jmpo.fr/public/logo.png/`}
                />       
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
        
            <header className={styles.header}>

                <div className={styles.navbar}>
                    <ul>
                        <li><Link href="/">
                             <a title="Accueil">Accueil    </a>                           
                             </Link>
                        </li>
                        
                        <li>
                            <Link href="/role">
                            <a title="Le fonctionnement du Conseil" >Conseil</a>
                            </Link>
                            <ul className={styles.menu2}>
                                <li>
                                    <Link href="/role">
                                    <a title="Le fonctionnement du Conseil" >Rôle du Conseil</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/conseillers">
                                    <a title="Les conseillers du conseil de quartier" >Conseillers</a>
                                    </Link> 
                                </li>
                                <li>
                                    <Link href="/comite">
                                    <a title="Le Comité d'Animation" >Animation</a>
                                    </Link> 
                                </li>
                                <li>
                                    <Link href="/budget">
                                    <a title="Le budget du Conseil de Quartier" >Budget</a>
                                    </Link>
                                </li>  
                                <li>
                                    <Link href="/charte">
                                    <a title="La Charte des Conseils du Quartier" >Charte</a>
                                    </Link>
                                </li>                              
                                <li>
                                    <Link href="/realisations">
                                    <a title="Les réalisations du Conseil Jean Moulin Porte d\'Orléans" >Réalisations</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contribuer">
                                    <a title="Contribuer au Conseil" >Contribuer</a>
                                    </Link>
                                </li>                                
                                <li> 
                                    <Link href="/histoire">
                                    <a title="L'histoire des Conseils de Quartier" >Histoire</a>
                                    </Link>
                                </li> 
                                <li>
                                    <Link href="/mentions">
                                    <a title="Mentions légales" >Mentions</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        
                        <li>
                            <Link href="/commissions">
                            <a title="Les Commissions actives">Commissions</a>
                            </Link>
                            <ul className={styles.menu2}>
                                <li>
                                    <Link href="/commissions">
                                    <a title="Les Commissions actives">Commissions</a>
                                    </Link>
                                </li>
                                <li >
                                    <Link href="/climat">
                                    <a title="Commission Climat" >Climat</a>
                                    </Link>
                                </li>
                                <li >
                                    <Link href="/communication">
                                    <a title="Communication et Site Internet" >Communication</a>
                                    </Link>
                                </li>                                
                                <li >
                                    <Link href="/poincon">
                                    <a title="Commission Poinçon" >Poinçon</a>
                                    </Link>
                                </li>                              
                                <li >
                                    <Link href="/urbanisme">
                                    <a title="Commission d/'Urbanisme" >Urbanisme</a>
                                    </Link>
                                </li>
                                <li >
                                    <Link href="/projets">
                                    <a title="Projets des commissions" >Projets</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>                        
                        <li >
                            <Link href="/realisations" >
                            <a title="Les réalisations du Conseil Jean Moulin Porte d\'Orléans" className={styles.big}>  Réalisations</a>
                            </Link>
                        </li>
                        <li> 
                            <Link href="/blog">
                            <a title="Actualités" >Actualités</a>
                            </Link></li>
                    </ul>
                </div>
              
                <h2 className={styles.sitetitle}>Conseil de Quartier  <span  className={styles.big}>Jean Moulin Porte d'Orléans</span>  </h2>    
            </header>

            <main>{children}</main>
            <footer className={styles.footer}>
                <a 
                  href="https://artistessansfrontieres.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    Créé par Zeliha Chaffin (textes), Helga Petrovic (code) et l'équipe de  {' '}
                    <img src="/asf20p.png" alt="Artistes sans Frontières"  />
                </a> 
            </footer>
        </div>
    )
}
