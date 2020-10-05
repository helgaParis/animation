import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import styles from '../../styles/Home.module.css'
import Nav1urban from '../../components/nav1urban'

export default function Cr4() {
    return (
        <Layout >
        <Head>
          <title> Conseil de quartier JMPO – Commission urbanisme</title>
        </Head>
        <main className={styles.main}>
        <Nav1urban></Nav1urban>
        <h1 className={styles.title}>Compte rendu de la réunion du 14 mai 2019</h1>
        <p>Présents : Jean-Philippe, Chantal, Paul, Claire, Annie, Rachida, Hélène, Eric</p>
        <p>Excusés : Antonella, Benjamin</p>
        <h3>Place des Droits de l’Enfant</h3>
        <p>La Commission accueille Patrick Bernard, animateur du Collectif « La république des Hypervoisins » : pourquoi les Hypervoisins, initiatives prises par ce collectif d’habitants… (voir page facebook).</p>
        <p>Concernant le projet d’aménagement de la place, une concertation est prévue avec les habitants, mais d’ores et déjà plusieurs idées ont été explorées : création d’un pôle santé à l’emplacement des anciens bureaux d’HSBC (260m2), fermeture de l’accès à la rue Sarrette pour disposer d’une vraie surface protégée, créer de l’animation (marché…).</p>
        <p>Echéancier : concertation avec les habitants du 15 au 30 juin prochain, retour sur les souhaits exprimés par les habitants le 13 juillet (+ concert), réalisation à l’automne pour une réception travaux en fin d’année. Financement (200.000€) par l’Agence de la mobilité et par un reliquat sur budgets participatifs.</p>
        <p> Echanges (vifs) avec les participants, à la fois intéressés par les Hypervoisins et par le projet, mais surpris que le conseil de quartier ait été tenu à l’écart, et qu’il soit possible pour un collectif d’habitants de mobiliser des crédits alors que les CQ ont tellement de difficultés à financer leurs projets…</p>
        <p> La commission propose que ce sujet soit à l’ordre du jour de la prochaine réunion plénière, en y invitant Patrick Bernard et en donnant l’info sur les dates de concertation avec les habitants.</p>
        <h3>City stade rue de Châtillon</h3>
        <p>RV avec la maire le 21 mai </p>
        <h3>Projet 100 Bd Jourdan</h3>
        <p>Faisant suite à notre lettre et à plusieurs pétitions de riverains, la maire a refusé le permis de construire en l’état, demandant de revoir le projet sur les deux points que la commission avait mis en évidence : la volumétrie et la largeur du trottoir. La commission souhaite maintenir l’invitation à la plénière de l’architecte et du promoteur.</p>
        <h3>Projet 50 Bd Jourdan</h3>
        <p>La commission a bien été invitée pour une visite des lieux comme nous l’avions demandé. Photos sur facebook (2700 vues). L’hébergement sera opérationnel à partir de la fin mai, l’espace au rdc réservé aux associations sera disponible en juin ou septembre.</p>
        <h3>Piscine Elisabeth</h3>
        <p>La commission a bien été invitée pour une visite des lieux organisée par le CAUE. En revanche, nous n’avons pas eu de réponse par la mairie sur les horaires d’ouverture au public hors réservation scolaire &rArr; à relancer + mettre à l’oj de la plénière.</p>
        <h3>Aménagement de l’av. Gal Leclerc</h3>
        <p>Coordonnées récupérées pour un contact avec le CQ Mouton-Duvernet. Message à leur adresser pour organiser une réunion commune entre leur Groupe projet et notre commission.</p>
        <h3>Fresque rue du Père Corentin</h3>
        <p>Rappel de l’historique de ce projet initié par le précédent CQ, puis réactivé récemment par la mairie avec malheureusement une confusion sur les interlocuteurs et un flou sur l’engagement budgétaire. Le comité d’animation a pris la main sur ce projet et adressé une lettre aux adjoints concernés. Une réunion est prévue en mairie le 17 mai prochain à 18h.</p>
        <h3>Fonctionnement de notre commission</h3>
        <p>Il est parfaitement concevable que certains membres ne puissent pas participer à toutes les séances compte tenu de leurs obligations par ailleurs. Au demeurant, il apparait qu’un nombre significatif de membres inscrits n’ont jamais participé à aucune réunion. C’est la raison pour laquelle, après avis du comité d’animation, la commission décide d’envoyer un message à tous les membres en leur demandant de confirmer leur inscription. </p>



      </main>
      </Layout>
    )
  }