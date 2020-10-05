import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import styles from '../../styles/Home.module.css'

import Nav1anim from '../../components/nav1anim'

export default function Cra1() {
    return (
        <Layout >
        <Head>
          <title>Comité d'Animation - Conseil de quartier JMPO</title>
        </Head>
        <main className={styles.main}>
            <Nav1anim></Nav1anim>
            <h1 className={styles.title}>Synthèse des réunions  des  4-12-18 et  15-01-19</h1>
            <h3>Organisation interne </h3>
            <p>Co-animation jusqu’à la plénière du 20/02 : Gabin Gomes -  Chantal Godinot
            Réservation salles - comité d’animation, réunion des conseillers  et plénière : Lynda Aba
            Communication : Helga Strobl – Paul Gauthier (Facebook – twitter)
            Budget du cdq : Guillaume Durand</p>
            <p>Comptes  rendus : réunion des conseillers et plénière :  2 - 3 volontaires du CA (à définir)
            Pour les prochaines réunions,  co-animation par un binôme paritaire ou à défaut par 2 femmes 
            La mairie souhaite n’avoir qu’un seul interlocuteur du comité d’animation, d’où la nécessité pour toute demande d’utiliser la boite gmail en indiquant en fin de mail le nom de l’expéditeur et qualité..</p>
            <h3>Commissions</h3>
            <p> Inscription des membres d’animation dans la quasi-totalité des commissions.
            Proposition : que la co-animation soit assurée par 1 volontaire et 1 membre du comité d’animation,  en veillant au respect de la parité<br/>
            Invitation des référents lors du prochain comité d’animation en vue de préparation de la plénière du 20/02 (les sonder le 22/01 sur disponibilités)<br/>
            Pour les commissions qui ne se sont pas encore réunies : proposer que les référents soient nommés dès la 1ère réunion
            Demander aux référents la transmission au CA, des comptes rendus et dates de réunions. </p>
            <h3>Communication </h3>
            <p>- Gestion des moyens de communication du cdq : Guillaume transmet les accès à Helga et Paul<br/>
            page Facebook :  Conseil de Quartier Jean-Moulin Porte d’Orléans Paris 14e<br/>
            compte  twitter : CQ JM PO Paris 14 @cq_jm<br/>
            compte gmail : cqjmpoparis14mail.com<br/>
            Helga propose l’utilisation d’une application « Discord ». Elle nous adresse les infos par mail, les infos de téléchargement (en rediscuter lors de la prochaine réunion)<br/>
            La boucle par mail est conservée en attendant.<br/>
            Récupérer lors de la réunion des conseillers, les adresses-mail des membres afin de pouvoir communiquer sans nécessairement passer obligatoirement par la mairie.</p>
            <h3>Budget </h3>
            <p>Faire un point sur l’état des budgets de fonctionnement et d’investissement ; cf mail mairie informant du report de ces budgets sur l’année 2019 et info sur solde fin janvier<br/>
            Faire un point également, sur les avancées des propositions d’investissement faites par l’ancien conseil de quartier en janvier 2018. <br/>
            Propositions des commissions sur utilisation du budget d’investissement et fonctionnement : modalités à étudier</p>
            <h3>Prochaine réunion des conseillers</h3>
            <p>Elle aura lieu le 22/01 de 19h 30 à 21 h 30 , maison des associations 22 rue Deparcieux<br/>
            Un mail a été adressé à l’ensemble des conseillers par la mairie, le conseil de quartier ne disposant pas des adresses-mail des membres.</p>
            <h4>ODJ : </h4>
           <p> - tour de table,  présentation  des commissions, préparation ordre du jour de la réunion plénière du 20 février (19h30-21h30 à l’école Chantin), questions diverses </p>
            <h3>Communication sur la plénière du 20/02 sur la voie publique ou au sein des immeubles</h3>
            <p>Demander en réunion des conseillers, des volontaires pour diffusion sur le quartier des affichettes de la réunion. Veiller à ce que l’ensemble du quartier puisse être informé. </p>
            <p>Prise en charge par commission « communication » ? Recensement des volontaires, prise en charge des demandes,   à relayer à Gilles Belloteau ou Alia. Distribution (ancienne méthode) : dépôt enveloppes au café « Le Daudet » si la patronne est toujours volontaire ?</p>
            <p>Demander à la mairie de relancer les bailleurs sociaux pour affichage au sein de ses immeubles. Voir également possibilité de diffusion dans les panneaux associatifs (voir mairie)</p>
              <h3>Plénière du 20/02</h3>
              <p>L’ordre du jour de la plénière sera défini  lors de la réunion des conseillers du 22/01.<br/>
              Elle aura lieu à l’école Antoine Chantin, (maternelle ou élémentaire ? ) de 19h 30 à 21h 30<br/>
              Une réunion du comité d’animation et des référents de commission se tiendra entre la réunion des conseillers et la plénière afin de préparer la plénière ( interventions, power point ….)</p>
              <h3>Programmation des autres plénières : </h3>
              <p>Envisager une plénière en  mai- juin dans un lieu autre qu’une école (compte-tenu des élections européennes)<br/>
              Et la 3ème vers octobre-novembre <br/>
              Diversifier les lieux de réunions afin d’atteindre tout le quartier<br/>
              D’autres réunions peuvent être envisagées si nécessaire.</p>
                          
            
        </main>
        </Layout>
    )
  }