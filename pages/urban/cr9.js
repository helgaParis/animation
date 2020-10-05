import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import styles from '../../styles/Home.module.css'
import Nav1urban from '../../components/nav1urban'

export default function Cr9() {
    return (
        <Layout >
        <Head>
          <title> Conseil de quartier JMPO – Commission urbanisme</title>
        </Head>
        <main className={styles.main}>
            <Nav1urban></Nav1urban>
            <h1 className={styles.title}>Rencontre du 30 janvier 2020 avec l’APUR
</h1>
            <p>Présents :</p>
            <p>APUR : Paul Baroin, directeur d’études</p>
            <p>Mairie 14 : Jérôme Perrot, Chargé urbanisme cabinet de la maire</p>
            <p>CommUrba : Clément, Claire, Annie, Marion, Antonella, Eric</p>
            <h3>Le contexte de l’étude par Paul Baroin</h3>
            <ul>
                <li>Un secteur compliqué car très contraint et peu documenté jusqu’à présent en matière d’urbanisme, avec des protections fortes au PLU.</li>
                <li>Un consensus a priori difficile à trouver entre les différents acteurs, d’où une commande qui se limite à un aménagement de l’espace public pour remédier aux dysfonctionnements majeurs au niveau des déplacements. Pas d’intervention au niveau architectural (pour info, signale une étude sur la rénovation des HBM sur le site de l’APUR).</li>
                <li>Une volonté d’avancer rapidement &rArr; des propositions accessibles budgétairement</li>
                <li>IDF Mobilités et RATP lancent de leur côté une étude sur les transports pour un rendu fin 2020 &rArr; à intégrer pour un réaménagement de la gare routière.</li>
                <li>Pas d’options sur le périphérique car son devenir est en débat actuellement : couverture partielle si maintien d’une autoroute urbaine, transformation en boulevard urbain, etc… (voir sur internet « Les routes du Grand Paris »)</li>
            </ul>
            <h3>Compléments apportés par Jérôme Perrot (après le départ de Paul Baroin)</h3>
            <ul>
                <li>Rien n’est encore arrêté à ce jour. En première étape, le réaménagement proposé (élargissement du trottoir, végétalisation, piste cyclable…) serait entièrement financé par la Ville de Paris, ceci sans modifier le nombre de voies de circulation.</li>
                <li>Le parvis devant la piscine serait réalisé en avril, donc après l’ouverture au public.</li>
                <li>Le réaménagement de la gare routière et la modification du circuit des bus interviendraient dans une 2ième étape. Ne pas oublier un aménagement pour le covoiturage.</li>
                <li>Une nouvelle réunion de l’Atelier 4 est prévue en mai. Il n’y aura pas d’éléments nouveaux d’ici là.</li>
            </ul>
            <p>La Commission remercie la mairie d’avoir répondu à la demande d’une rencontre avec l’APUR, en regrettant qu’il n’y ait pas une représentation des habitants dans le tour de table de l’Atelier 4. </p>
            <p>Elle décide d’une réunion interne le mardi 24 mars prochain, et retient l’idée d’une nouvelle rencontre avec l’APUR en juin 2020.</p>
        </main>
        </Layout>
    )
  }