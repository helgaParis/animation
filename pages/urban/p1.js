import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import styles from '../../styles/Home.module.css'
import stylesPlan from '../../styles/plan.module.css'
import Nav2urban from '../../components/nav2urban'

export default function P1() {
    return (
        <Layout >
        <Head>
          <title> Conseil de quartier JMPO – Commission urbanisme- Projet</title>
        </Head>
        <main className={styles.main}>
            <Nav2urban></Nav2urban>
            <h1 className={styles.title}>Commission d’urbanisme
            Réflexions sur la Porte d’Orléans - 10/12/19
            </h1>
            <p>à partir de l’étude APUR du 17 juillet 2019</p>
            <div className={stylesPlan.row}>
              <div className={stylesPlan.column}>
              <h3>Quatre sujets dans l’étude APUR</h3>
              <p>Sans reprendre ici les développements qui figurent dans l’étude, rappelons les quatre orientations données par l’Atelier 4 :</p>
              <ul>
                <li>Requalification des liaisons douces entre la RD920 et l’av. du Gal Leclerc </li>
                <li>Mutation du terre-plein central</li>
                <li>Rationalisation/optimisation de la gare de bus</li>
                <li>Requalification de l’av. Paul Appel</li>
              </ul>
              <p>Les points 1 et 3 débouchent sur des propositions concrètes, les points 2 et 4 ne semblent pas avoir fait l’objet de développements particuliers.</p>
              </div>
              <div className={stylesPlan.columnright}>
                <img src="/urban-p1.png" className={stylesPlan.plan14} alt="Plan de la Porte d'Orléans" ></img>
              </div>
            </div>
            <h3>Les réflexions de la commission urbanisme</h3>
            <p>En première analyse, l’étude apparait comme une addition de mesures ponctuelles qui ne laissent pas transparaitre une approche globale du secteur, lisible dans ses intentions de requalification, notamment en relation avec le réaménagement de l’avenue du général Leclerc. On peut comprendre que les capacités budgétaires ne permettent pas de réaliser un projet global en une seule fois. Pour autant, comment s’engager sur des mesures sectorielles sans les resituer dans la cohérence d’un plan  d’ensemble.</p>
            <p>Du point de vue de la commission, différentes suggestions mériteraient d’être approfondies autour d’enjeux majeurs : </p>
            <ul>
              <li>L’enjeu d’une requalification architecturale<br/>
              Les orientations proposées dans l’étude ne portent pas une véritable ambition à ce niveau alors que le lieu dispose d’un certain nombre d’atouts avec ses façades haussmanniennes et HBM qui mériteraient d’être valorisées (+ l’entrée en scène de la nouvelle piscine). Cette entrée de Paris est un lieu stratégique qui draine des flux considérables (au 2ième rang des Portes de Paris). L’aménagement de l’ancienne petite gare (initiative du Conseil de quartier) a donné le ton en termes de requalification. Il faudrait poursuivre la démarche => lancer un concours d’architecture international sur esquisse ?
              </li>
              <li>L’enjeu d’une vie sociale à dynamiser<br/>
              La Porte d’Orléans n’est pas qu’un lieu de passage. C’est aussi un lieu de vie pour de très nombreux habitants, aujourd’hui socialement segmentés, sans véritables espaces de rencontre (autre que marchands). Pourrait-on imaginer un espace apaisé, en retrait des flux de circulation, là où peut-être se tiendrait un marché : par exemple à l’emplacement de l’actuelle gare routière, en déportant celle-ci au-dessus du périphérique ? Et pourquoi ne pas transférer en lisière du square Serment de Koufra l’installation pour les boulistes de manière à participer à l’animation locale… A cela s’ajoute le souhait de mettre en valeur la statue du Gal Leclerc.</li>
              <li>L’enjeu d’une continuité urbaine entre Paris et sa proche banlieue<br/>
              A la continuité de liaisons douces entre Paris et Montrouge, bien étudiée dans l’étude, ne devrait-on pas ajouter une continuité dans les réseaux de bus : pourquoi par exemple ne pas prolonger la ligne 92 pour desservir les communes au sud de la Porte d’Orléans, et éviter de la sorte une connexion entre un « réseau parisien » et un « réseau banlieue ». Ce serait à la fois plus commode pour les usagers de la banlieue, et moins discriminant socialement…<br/>
              La continuité urbaine pourrait s’affirmer encore plus en profitant de l’opportunité d’une restructuration du terre-plein central (point 2) pour couvrir le périphérique à cet endroit et afficher la perspective d’un espace à bâtir reliant Paris à sa proche banlieue. Ce serait un marqueur symbolique fort.
              Dans l’immédiat, la commission insiste sur l’urgence à abandonner le retournement actuel des bus 92<br/> et 38 passant par la rue Beaunier. Plusieurs scénarios alternatifs sont possibles, notamment un retournement au-delà du périphérique, permettant ensuite un arrêt devant la nouvelle piscine.</li>
              <li>L’enjeu d’un réaménagement au regard des flux de véhicules et du stationnement des bus. <br/>
              Il y a tout lieu de penser que la baisse tendancielle observée au fil des années du nombre de véhicules rentrant dans Paris va se poursuivre. Cette tendance est prise en compte dans l’aménagement réalisé avenue du Gal Leclerc. On la retrouve également dans la proposition d’aménagement de la Porte d’Orléans. Mais ne faudrait-il pas envisager un rétrécissement dès la sortie du périphérique ? L’espace ainsi libéré au niveau de l’îlot central permettrait le stationnement des bus desservant le sud et l’est, bus qui pourraient ensuite repartir en contournant cet îlot central sans rentrer dans Paris comme le propose l’étude.<br/>
              Le déport envisagé des bus de tourisme est pertinent, mais le lieu pressenti av. de la Porte de Montrouge serait regrettable, car cette avenue calme se prête aux déplacements doux, notamment du fait qu’elle n’est pas chahutée par les entrée/sorties particulièrement dangereuses du périphérique.</li>
            </ul>
            <p>La commission souhaiterait pouvoir disposer de données statistiques sur les flux pour mieux appréhender la faisabilité des certaines propositions.</p>
        </main>
        </Layout>
    )
  }