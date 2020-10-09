import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'
import stylesPlan from '../styles/plan.module.css'
import utilStyles from '../styles/layout.module.css'

export default function Role() {
  return (
    <Layout >
        <Head>
            <title>Rôle du Conseil de Quartier</title>
            <meta
                name="keywords"
                content="Accueil, conseil de quartier, democratie participative, democratie de proximité, contribuer, vie de quartier"
            />
        </Head>

        <main className={styles.main}>
            <h2>Qu’est-ce qu’un conseil de quartier ?</h2>
            <p>Le conseil de quartier est une instance consultative du conseil d’arrondissement, politiquement neutre, 
                qui regroupe des habitants du quartier désireux de s’investir dans la vie de leur quartier et d’oeuvrer à 
                l’amélioration et au dynamisme de leur environnement local. C’est à la fois un lieu d’information, 
                d’échange et de dialogue entre les citoyens du quartier, mais aussi un lieu d’initiatives et de projets sur toutes les thématiques 
                liées à la vie du quartier.
            </p>
            <p>Il existe aujourd’hui 124 conseils de quartier à Paris dont 6 conseils de quartier dans le 14e arrondissement :</p>
                <ul>
                    <li>Didot - Plaisance - Porte de Vanves</li>
                    <li className={utilStyles.boldText}>Jean Moulin - Porte d’Orléans</li>
                    <li>Montsouris - Dareau</li>
                    <li>Montparnasse - Raspail</li>
                    <li>Mouton Duvernet</li>
                    <li>Pernety </li>
                </ul>
                     
            <div className={stylesPlan.row}>                
                <div className={stylesPlan.column}>
                    <div className={styles.encadre}>
                        <h3>Le saviez-vous ?</h3>
                        <p>Lorsqu’il souhaite porter à l’attention de la mairie un sujet particulier d’intérêt local, 
                            le conseil de quartier, à l’instar des élus locaux, a le pouvoir de formuler un voeu auprès 
                            du maire de l’arrondissement. Si le voeu est inscrit à l’ordre du jour du conseil 
                            d’arrondissement, il sera alors examiné, débattu, puis soumis aux votes des conseillers 
                            d’arrondissement, qui pourront l’adopter - en totalité ou partiellement - ou le rejeter. </p>
                        <p>En 2018, le conseil de quartier Montparnasse-Raspail a par exemple formulé un voeu pour 
                            la création d’un espace dédié aux activités artistiques et culturelles au rez-de-chaussée 
                            du futur immeuble à l’angle des rues Gaîté et Jolivet (source compte-rendu du conseil d’arrondissement 
                            du 6 novembre 2018)</p>
                    </div>
                </div>
                <div className={stylesPlan.columnright}>
                <h2>Quel est le rôle du conseil de quartier ?</h2>
                    <p>Les missions du conseil de quartier Jean Moulin - Porte d’Orléans sont définies par 
                        la mairie du 14e arrondissement dans la charte des conseils de quartier du 14e. 
                    </p>
                    <p>A ce titre, le conseil de quartier est à la fois un lieu :  </p>
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
              </div>
                    
            </div>
        </main>

    </Layout>
  )
}
