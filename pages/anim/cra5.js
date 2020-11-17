import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import styles from '../../styles/Home.module.css'

import Nav1anim from '../../components/nav1anim'

export default function Cra5() {
    return (
        <Layout >
        <Head>
          <title>Comité d'Animation - Comitée d'animation, conseil de quartier JMPO</title>
        </Head>
        <main className={styles.main}>
            <Nav1anim></Nav1anim>
            <h1 className={styles.title}>Comité d’animation, réunion  du 16 juin 2020</h1>
            <p>(en plein air place Ambroise Croizat)</p>
            <p>Présents : Helga, Lynda, Kadidatiou, Juliette, Eric, Geneviève<br/>
            Invitée : Laurence            </p>
            <h3>Supermarché coopératif</h3>
            <p>Laurence Depond présente le projet de création dans notre quartier d’un supermarché coopératif (voir description en pièce jointe). Plusieurs dizaines d’habitants ont déjà acquis les 10 parts à 10€ pour devenir coopérateurs et certains d’entre eux sont fortement impliqués au sein de groupes de travail pour mener à bien le projet. L’ambition est d’ouvrir au plus tard en début d’année prochaine. D’ici là, il faut trouver un local abordable, prospecter des producteurs dans un rayon proche, mettre en place un cadre pour la gestion du dispositif en s’appuyant sur les expériences existantes à Paris (notamment le Grain de sel dans le 13ième), etc… La présentation de ce projet sera proposée à l’ordre du jour de la prochaine réunion plénière. </p>
            <h3>Site internet JMPO</h3>
            <p> Helga pilote ce projet avec le concours de Zéliha. Techniquement, le projet avance. A la rentrée, une proposition devrait pouvoir être présentée dont il faudra valider le contenu : explication sur ce qu’est un CQ, coordonnées pour contact, travaux des commissions, boite à disposition des habitants… Voir comment s’identifier : logo mairie + logo propre JMPO (à créer) ?  </p>   
            <h3>Communication</h3>
            
            <p>Zeliha pilote la mise en place d’une communication pour se faire mieux connaitre des habitants. Diverses suggestions sont avancées en complément de la création du site : flyers, permanence sur les marchés… Ceci amène à une réflexion sur le rôle d’un CQ, et à travers les échanges, il apparait qu’à la rentrée, une clarification serait sans doute utile en interne à l’appui de la charte (voir pièce jointe). </p>
            
            <h3>Aide aux personnes vulnérables</h3>
            
            <p>Kadidatiou rappelle ses diverses suggestions pour aider les personnes en difficulté, et notamment les femmes accueillies à la résidence rue Morère. Sur ce dernier point, un mail a été adressé par Eric à la mairie pour des masques et du gel + aide alimentaire. Le comité d’animation s’étonne de n’avoir reçu aucune réponse (malgré une relance).  </p>
            
            <h3>Projet forum des associations sur l’environnement</h3>
            
            <p>Lynda rappelle ce projet porté par la commission Climat. Des interrogations restent en suspens sur l’organisation de l’évènement &rArr; nécessité de rédiger les grandes lignes du projet avant de le présenter à la plénière et d’en préciser la date.</p>
            
            <h3>Marquage au sol</h3>
            
            <p>Zeliha et Eric font un retour sur cette action qu’ils ont mené sur le secteur Sarrette-Tombe Issoire-Jourdan. Bonne expérience pour une prise de contact avec les commerçants, mais intervention trop tardive. La plupart déploraient ne pas avoir de file d’attente… Aucun conseiller n’a souhaité poursuivre sur d’autres secteurs du quartier : étions-nous bien dans notre rôle de CQ sur ce type d’action ?</p>
            <h3>Stationnement vélos</h3>
            <p>Eric rappelle qu’il a balayé le secteur Sarrette-Tombe Issoire-Beaunier pour constater une saturation de quasiment tous les parcs à vélos. Un relevé a été établi et transmis à la mairie. </p>
            <p>Il devient urgent d’agrandir les parcs existants et/ou d’en créer de nouveaux compte tenu du développement de ce moyen de transport.</p>
            
            <p>En préparation d’une plénière en octobre, une réunion est fixée à la rentrée avec l’ensemble des conseillers :
            mardi 22 septembre à 19h (lieu précisé ultérieurement)</p>
            
        </main>
        </Layout>
    )
  }