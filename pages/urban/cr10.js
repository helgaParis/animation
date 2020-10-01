import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import styles from '../../styles/Home.module.css'
import Nav1urban from '../../components/nav1urban'

export default function cr10() {
    return (
        <Layout >
        <Head>
          <title> Conseil de quartier JMPO – Commission urbanisme</title>
        </Head>
        <main className={styles.main}>
            <Nav1urban></Nav1urban>
            <h1 className={styles.title}>Compte rendu de la réunion du 29 septembre 2020</h1>
            <p>Présents : Rachida, Antonella, Julia, Marion, Aurianne, Annie, Eric</p>
            <h3>Aménagements temporaires suite Covid</h3>
            <p>Sujets abordés à partir de la liste établie par la mairie en date du 10 juin dernier :</p>
            <p>Aménagement piétons rue des Plantes : n’était pas réalisé en juin. Julia vérifie sur place.</p>
            <p>Aménagement vélos Porte d’Orléans : le couloir réservé est très apprécié, mais la traversée reste dangereuse compte-tenu des embouteillages permanents, rendant les automobilistes nerveux et parfois non respectueux des signalisations. L’intention est bonne, et il faut la maintenir comme un cap dans la durée. Cependant, ce secteur est devenu invivable pour les habitants : pollution sonore et olfactive, stress… </p>
            <p>Quelques idées sont émises : signaler les embouteillages à l’approche du secteur pour inciter à prendre d’autres circuits (il est rappelé qu’on peut être verbalisé en se dirigeant délibérément vers un embouteillage), mieux canaliser les véhicules selon leur trajets (par exemple une voie réservée pour les tourne-à-droite en arrivant sur les maréchaux), mieux séquencer les feux pour le démarrage des bus, redonner 2 voies d’entrée av du Général Leclerc (la piste vélo étant sans doute un peu surdimensionnée), ou offrir par la rue Friant un vrai passage sécurisé pour les vélos (quitte à faire un détour)…</p>
            <p>Bref, chacun s’accorde à reconnaitre qu’il n’y a pas de solution miracle, mais la situation actuelle ne peut pas durer (parole de cyclistes). C’est devenu irrespirable pour tout le monde. Qu’en pensent les médecins du quartier : plus de cas d’irritation, d’asthme… ? C’est un vrai problème de santé publique Nous ne sommes pas suffisamment documenté là-dessus et la mairie ne communique pas assez sur ce sujet pour justifier le sens des mesures qui sont prises.</p>
            <p>Nouveau plan de circulation rue d’Alésia : un sujet très clivant. Les automobilistes sont très remontés, les piétons-cyclistes (et très certainement les conducteurs de bus et véhicules prioritaires) sont très satisfaits. Les habitants apprécient la tranquillité, un air plus respirable… A l’évidence, la circulation est plus fluide place VB.</p>
            <p> Vitesse à surveiller.</p>
            <h3>Aménagement de la place VB</h3>
            <p>Circulation bien améliorée, notamment pour les bus. Passages piétons plus confortables avec moins d’attente. Pas vraiment satisfaisant pour les vélos qui ne se sentent pas en sécurité avec ce système giratoire double sens (autant par apport aux piétons qu’aux voitures).</p>
            <p>Pourquoi une partie du revêtement couleur claire en réfection ?</p>
            <p>Très dommage : les carrés de verdure ne sont pas valorisants (ni beaux au niveau des plantations, ni propres).</p>
            <h3>Nuisances causées par les bus</p>
            <p>Pour mémoire le circuit par la rue Beaunier, sujet déjà largement débattu.  </p>
            <p> Mais aussi : la sortie bruyante des bus au dépôt rue du Père Corentin, avec des sonneries, des bruits de moteur jusqu’à 2h du matin… Les riverains n’en peuvent plus ! </p>
           <h3>Parcs stationnement vélos</h3>
           <p>Pas de suite donnée pour le moment à la demande du CQ d’une augmentation des capacités de stationnement sur rue. Un constat a été communiqué montrant une saturation, qui n’a fait que se confirmer depuis ces derniers mois. Les angles de rue sont sans doute à privilégier car cela améliore également la visibilité pour les automobilistes.</p>
           <p>Découverte ces jours-ci d’une installation de garage à vélos sécurisé sur une place de stationnement rue du Père Corentin. Pourquoi pas, le CQ regrette évidemment de n’avoir été ni associé ni informé…</p>
           <h3>Projet d’aménagement de la place des Droits de l’Enfant</h3>
           <p>Le projet avance et une nouvelle étape de concertation avec les habitants est envisagée dans les semaines qui viennent. Enjeu fort quant à l’implication des habitants pour assurer ensuite l’animation de cette future « place de village ».   </p>
           <p> Pour ceux qui ne connaissent pas le projet, voir en pièce jointe l’interview du président des HyperVoisins.</p>
           <h3>Divers</h3>
           <p>La commission souhaiterait disposer (via la mairie ?) d’un fond de plan du quartier en grand format. Cela permettrait, en l’affichant au mur, de visualiser rapidement tel ou tel sujet en discussion.</p>
           <p>PJ : 1) Note de la commission en date du 10 12 2019 sur le projet d’aménagement de la Porte d’Orléans (APUR) </p>
            <p>2) Interview Patrick Bernard</p>
        </main>
        </Layout>
    )
  }