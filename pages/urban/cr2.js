import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import styles from '../../styles/Home.module.css'
import Nav1urban from '../../components/nav1urban'

export default function cr2() {
    return (
        <Layout >
        <Head>
          <title> Conseil de quartier JMPO – Commission urbanisme</title>
        </Head>
        <main className={styles.main}>
            <Nav1urban></Nav1urban>
            <h1 className={styles.title}>Compte rendu de la réunion du 17 janvier 2019</h1>
            <p>Présents : Paul, Jean-Philippe, Antonella, Claire, Chantal et Eric</p>
            <p>Invités : Agnès Bertrand, adjointe référente pour JMPO et Jérôme Perrot, chargé de mission urbanisme, voirie, déplacement</p>
            <h3>Fonctionnement de la Commission</h3>
            <p>Antonella élue référente, en binôme avec Eric qui établira le lien avec le Comité d’animation</p>
            <p>Documents AUT et DSTS à rediffuser aux membres de la Commission : donnent une image du quartier sur le plan social et sociologique</p>
            <p>Claire porte à connaissance une étude statistique sur le 92</p>
            <p>Chantal rejoint la Commission</p>
            <h3>Revue des projets en cours</h3>
            <p>Projets immobiliers</p>
            <p>100 Bd Jourdan : opération immobilière privée de 60 logements (dont 1/3 sociaux) avec Bouygues. Permis de construire déposé au printemps &rArr; il est encore temps de faire remonter les remarques sur le projet. Resto de type associatif au rdc : qui sera en charge de la commercialisation, quel montant de loyer, quelle assurance sur la pérennité du projet. </p>
            <p>Ancien garage Citroën : ouverture dans 3 ou 4 mois et pour une durée de 2 ans d’un centre d’hébergement d’urgence de 256 places (personnes seules avec enfants de – de 3 ans). Gestion par Emmaüs Solidarité. Pas de difficulté pour scolariser les enfants dans le quartier. Des activités prévues au RDC et en sous-sol (loisirs, sport…). Faire des propositions (bibliothèque, atelier numérique…), l’enjeu étant de capitaliser sur ce qui réussira dans la période des 2 ans. Le bâtiment pourrait-il être classé pour protéger son architecture de qualité ?</p>
            <p>Diagnostic en cours, la structure se révèle en très mauvais état.</p>
            <p>Visite possible du site si la Commission le souhaite.</p>
            <p>Equipements publics</p>
            <p>Piscine du stade Elisabeth : ouverture prévue en fin d’année. Les horaires d’ouverture seront élargis pour le public (grille horaire à transmettre par la Ville à la Commission).</p>
            <p>Le Poinçon : ouverture repoussée à avril  prochain. A réfléchir également l’aménagement de la petite ceinture (trop peu d’infos sur ce dossier…).</p>
            <p>Voirie-mobilité</p>
            <p>Av. Gal Leclerc : le désamiantage est fait, l’aménagement des passages piétons est en cours. Les travaux sur la place seront terminés en juillet.<br/>
            Important programme de travaux côté Montrouge. Reste à traiter l’articulation avec la porte d’Orléans &rArr; une étude urbaine sur l’espace public devrait être lancée prochainement. Par ailleurs, étude en cours sur le périphérique.</p>
            <p>Zones 30 à développer sur l’arrondissement. Actuellement sont en cours : rue Didot (élargissement des trottoirs + plateaux surélevés pour passage piétons) et rue des Plantes (avec piste cyclable à contre-sens).</p>
            <p>Bus : 2 scénarios proposés par la  Ville de Paris à la RATP pour éviter au 38 de passer par la rue Beaunier (voir doc joint).</p>
            <p> Puits de ventilation pour le métro : pas de risque particulier de pollution</p>
            <p>Place des Droits de l’Enfant : les Hypervoisins souhaiteraient un réaménagement de cette place qui se trouve à la convergence de 3 quartiers.</p>
            <p> Ecole Chantin : un passage piétons est en cours de matérialisation au sol.</p>
            <p>« Une rue pour les enfants » : se pratique déjà ailleurs dans Paris sur le mode un jour/une tranche horaire la rue est interdite aux voitures pour devenir une aire de jeux pour les enfants. A réfléchir sur notre quartier (attention aux entrées de parking…).</p>
            <p>La Commission remercie Agnès et Jérôme pour leur participation.</p>
            <p>Prochaine réunion le 12 mars à 19h,  (initialement prévue le 19 mars), Lieu à confirmer</p>
        </main>
        </Layout>
    )
  }