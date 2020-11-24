import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import styles from '../../styles/Home.module.css'

import Nav1anim from '../../components/nav1anim'

export default function Cra2() {
    return (
        <Layout >
        <Head>
          <title>Comité d'Animation - Comitée d'animation, conseil de quartier JMPO - Compte Rendu 2</title>
        </Head>
        <main className={styles.main}>
            <Nav1anim></Nav1anim>
            <h1 className={styles.title}>Comité d’animation, réunion  du 2 avril 2019</h1>
            <p>Présents : </p>
            <p>Mélody Tonolli, adjointe à la Maire chargée de la culture et de la jeunesse,<br/>
            Caroline Billard, Paris-Habitat,<br/>
            Martial Buisson, collectif GFR association ayant obtenu le marché Street Art de la Mairie de Paris,<br/>
            Julie Bodron et Claire Granie du cabinet de Carine Petit,<br/>
            Frédéric Boitard représentant le Conseil de quartier Jean-Moulin Porte d’Orléans </p>
            <h2>« Fresque de la rue du père Corentin »</h2>
            
            <p>Suite à mon intervention lors de la plénière du Conseil de quartier sur le devenir de la fresque à réaliser rue du Père Corentin et à mon implication lors de la réalisation de la peinture murale rue des Plantes, j’ai reçu une invitation à participer à cette réunion.</p>
            <p>Il s’agit d’une peinture murale à réaliser sur le pignon de la résidence gérée par Paris-Habitat à l’angle de la rue du Père Corentin et de la rue Prisse-D’Avennes .</p>
            <p>La volonté de la municipalité est de réaliser cette œuvre assez rapidement et si possible pour qu’elle soit inaugurée lors de la fête 14 Art des 29 et 30 juin. Cette fête prévoit l’ouverture des ateliers d’artistes du 14e à l’occasion d’un parcours artistique.</p>
            <p>La fresque doit être envisagée comme une démarche artistique menée par la mairie, le conseil de quartier et Paris-Habitat en associant le plus possible les résidents de l’immeuble et les habitants du quartier. Martial Buisson du collectif GFR sera la cheville ouvrière de cette opération.</p>
            <p>Le collectif GFR présente les modalités proposées pour organiser une procédure de choix de l’œuvre à créer.</p>
            <p>Les étapes :</p>
            <h3>Le choix du thème de l’œuvre</h3>
             <p>En relation avec le nom du Père Corentin, et l’anniversaire de sa mort le 28 juin, le thème de la résistance pourrait-être envisagé. La résistance serait un thème large qui pourrait aller de l’évocation mythologique à la résistance au changement climatique.</p>
             <p>Il est demandé au conseil de quartier JMPO son avis sur ce choix ou de faire d’autres propositions en lien avec ce quartier.</p>
            <h3>Le choix des artistes</h3>
            <p> Martial Buisson indique qu’il a déjà contacté des artistes qui pourront être disponibles aux dates envisagées pour la réalisation de la fresque.</p>
            <p>Les 4 artistes proposés fourniront une note d’intention sur le thème envisagé. <br/>
            Les artistes seront listés par ordre de préférence par les conseillers de quartier (au cours d’un bureau élargi par exemple). Deux représentants du conseil participeront au « jury » avec Paris-Habitat et la Mairie du 14e pour le choix définitif de l’artiste.</p>
            Médiation avec les habitants             <p>GFR informe par outil papier les habitants de la résidence qu'une œuvre va être créée et que deux ateliers vont être organisés. </p>
            <p> GFR dégage deux-trois sujets majeurs en fonction de la contribution des habitants. Ces sujets sont soumis au jury.</p>
            <h3>Esquisses</h3>
            <p>2-3 esquisses réalisées par l’artiste choisi sont soumis aux habitants par vote : par outil papier pour les habitants de la résidence (avec petite boite pour récolter les votes) et par voie électronique pour les habitants du quartier.</p>
            <p> esquisses seront présentées et choisis par les habitants et conseillers de quartier, paris-habitat et la Mairie du 14e.
            </p>
                          
            
        </main>
        </Layout>
    )
  }