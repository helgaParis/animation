import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import styles from '../../styles/Home.module.css'
import Nav1urban from '../../components/nav1urban'

export default function Cr6() {
    return (
        <Layout >
        <Head>
          <title> Conseil de quartier JMPO – Commission urbanisme - Compte Rendu 6</title>
        </Head>
        <main className={styles.main}>
        <Nav1urban></Nav1urban>
        <h1 className={styles.title}>Compte rendu de la réunion du 10 septembre 2019</h1>
        <p>Présents : Antonnella, Chantal, Paul, Rachida, Jean-Louis, Eric<br/>
        Invitée : Sylvia Comm.Urba CQ Montsouris</p>
        <h2>Echanges avec Sylvia</h2>
        <p>Quelques points sensibles sur le secteur Montsouris : </p>
        <ul>
            <li>Les riverains se plaignent d’une circulation excessive sur la rue Nansouty</li>
            <li>Un projet immobilier inquiétant par son ampleur rue Reille</li>
            <li>Des aménagements rue René Coty qui sont peu en cohérence avec l’esprit du quartier</li>
        </ul>
        <p>Réflexions sur l’aménagement de la place d’Alésia :</p>
        <ul>
            <li>Un revêtement sombre qui génère au soleil une réverbération aveuglante</li>
            <li>Une signalisation insuffisante pour marquer l’arrêt des véhicules aux passages piétons</li>
            <li>Une circulation piétonne compliquée côté BNP avec le positionnement du kiosque et d’un arbre</li>
            <li>Un feu décalé pour les bus permettant un passage anticipé permettrait d’éviter des embouteillages aux heures de pointe</li>
        </ul>
        <h2>Etude APUR sur la Porte d’Orléans</h2>
        <p>Les propositions ne sont pas tjs très lisibles, mais certaines vont dans le bon sens, comme le déport des cars de tourisme sur l’avenue de la Porte de Montrouge</p>


        <ul>Quelques réactions :
            <li>La question du covoiturage n’est pas traitée</li>
            <li>Le projet doit permettre de faire lien entre Paris et les communes limitrophes</li>
            <li>La double place du 25 août 1944 est à traiter comme un lieu de convivialité et non plus comme un nœud de circulation</li>
            <li>L’îlot à suivre vers Montrouge pourrait traduire une vraie continuité urbaine par un ensemble bâti partant de la place et s’étendant jusqu’au périphérique inclus (donc recouvert).</li>
            <li>D’après l’étude, cet îlot serait destiné (en tout ou partie ?) à un équipement de logistique urbaine : bonne idée si cela permet d’approvisionner ensuite Paris avec des moyens de transports non polluants. Pour autant, il faudrait éviter une circulation camions renforcée pour y accéder, sauf à le réserver aux circuits courts. Pour l’approvisionnement national ou international, il conviendrait d'installer ces équipements logistiques proches des gares ferroviaires pour développer le fret par rail.</li>
        </ul>
        <p>La commission attend la réunion publique du 25 septembre pour bien comprendre les propositions contenues dans l’étude. Elle n’envisage pas d’ouvrir un débat sur le fond à cette occasion, mais demandera à être partie prenante des travaux à venir pour la suite de l’élaboration du projet.</p>
      </main>
      </Layout>
    )
  }