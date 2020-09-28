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
            <h1 className={styles.title}>Conseil de quartier Jean Moulin Porte d’Orléans (JMPO)</h1>
            <div className={stylesPlan.row}>
                <div className={stylesPlan.column}>
                    <h2>Qu’est-ce qu’un conseil de quartier ?</h2>
                    <p>Le conseil de quartier est une instance consultative du conseil d’arrondissement, politiquement neutre, 
                        qui regroupe des habitants du quartier désireux de s’investir dans la vie de leur quartier et d’oeuvrer à 
                        l’amélioration et au dynamisme de leur environnement local. C’est à la fois un lieu d’information, 
                        d’échange et de dialogue entre les citoyens du quartier, mais aussi un lieu d’initiatives et de projets sur toutes les thématiques 
                        liées à la vie du quartier.
                    </p>
                    <p>Il existe aujourd’hui 124 conseils de quartier à Paris dont 6 conseils de quartier dans le 14e arrondissement :
                        <ul>
                            <li>Didot - Plaisance - Porte de Vanves</li>
                            <li>Jean Moulin - Porte d’Orléans</li>
                            <li>Montsouris - Dareau</li>
                            <li>Montparnasse - Raspail</li>
                            <li>Mouton Duvernet</li>
                            <li>Pernety</li>
                        </ul>
                    </p>
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
                    <h3>La délimination des quartier est définie dans l'annexe de la charte </h3>
                    <h4>Le Conseil de quartier « Jean Moulin – Porte d’Orléans » couvre le territoire : </h4>
                    <p>boulevard Romain Rolland, 
                        rue du Professeur H. Vincent côté pair, rue Emile Faguet côté pair, 86 à 160 rue de la Tombe Issoire, 
                        39 à 85 rue d’Alésia, côté impair de la rue des Plantes (dans sa partie comprise entre la rue d’Alésia 
                        et le boulevard Brune) et toutes les rues à l’intérieur de cette délimitation.
                    </p>
                </div>
                <div className={stylesPlan.columnright}>
                    <img src="/plan14e.jpg" className={stylesPlan.plan14} alt="Plan des six quartiers du 14e arrondissemnt de Paris" ></img>
                </div>
            
            <div className={stylesPlan.row}>
                
                <div className={stylesPlan.column}>
                    <div className={styles.encadre}>
                        <h4>Le saviez-vous ?</h4>
                        <p>Lorsqu’il souhaite porter à l’attention de la mairie un sujet particulier d’intérêt local, 
                            le conseil de quartier, à l’instar des élus locaux, a le pouvoir de formuler un voeu auprès 
                            du maire de l’arrondissement. Si le voeu est inscrit à l’ordre du jour du conseil 
                            d’arrondissement, il sera alors examiné, débattu, puis soumis aux votes des conseillers 
                            d’arrondissement, qui pourront l’adopter - en totalité ou partiellement - ou le rejeter. 
                        <p>En 2018, le conseil de quartier Montparnasse-Raspail a par exemple formulé un voeu pour 
                            la création d’un espace dédié aux activités artistiques et culturelles au rez-de-chaussée 
                            du futur immeuble à l’angle des rues Gaîté et Jolivet (source compte-rendu du conseil d’arrondissement 
                            du 6 novembre 2018)</p>
                        </p>
                    </div>
                </div>
                <div className={stylesPlan.columnright}>
                <h3>Quel est le rôle du conseil de quartier ?</h3>
                    <p>Les missions du conseil de quartier Jean Moulin - Porte d’Orléans sont définies par 
                        la mairie du 14e arrondissement dans la charte des conseils de quartier du 14e. 
                    </p>
                    <p>A ce titre, le conseil de quartier est à la fois un lieu :
                        <ul>
                            <li>d’information, de consultation et de concertation sur les orientations, 
                                les projets et les décisions de la municipalité concernant le quartier.
                            </li>
                            <li>d’écoute des problèmes et des attentes des habitants pour les faire connaître 
                                à la mairie.
                            </li>
                            <li>d’élaboration et d’accompagnement de projets d’intérêt collectif intéressant la vie
                                du quartier.
                            </li>
                            <li>de suivi des projets retenus concernant le quartier dans le cadre du Budget 
                                participatif parisien.
                            </li>
                            <li>de dialogue entre les différents acteurs du quartier, quelles que soient leurs 
                                origines et leurs opinions.
                            </li>
                        </ul>
                </p></div>
                    
            </div>
            </div>
           
        </main>

    </Layout>
  )
}
