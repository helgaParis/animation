import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

import Nav1anim from '../../components/nav1anim'

export default function Cra9() {
    return (
        <Layout >
        <Head>
          <title>Comité d'Animation - Comitée d'animation, conseil de quartier JMPO - Compte Rendu 9</title>
        </Head>
        <main className={styles.main}>
            <Nav1anim></Nav1anim>
            <h1 className={styles.title}>Comité d’animation, réunion  du 12 novembre  2020</h1>
            <p>Présents : Helga, Geneviève, Lynda, Zéliha, Kadidatiou, Eric</p>
            <h2>Bilan plénière du 6 octobre 2020</h2>            
            <p>Cette séance s’est plutôt bien déroulée dans les conditions d’une téléréunion. Merci à Helga pour la technique. Se reporter au CR pour le contenu.
            </p>            
            <h2>Proposition d’un soutien financier à COOP14</h2>
            <p>Lynda rappelle brièvement le projet et souligne que des frais importants sont à engager pour la réalisation de travaux d’aménagement dans les futurs locaux. Ce projet va apporter de la vie au quartier, et il serait bon que le CQ vienne en appui.</p>
            <p>Les participants sont a priori favorables à un soutien, mais à la double condition </p>
            <ul>
              <li>
                d’une part de respecter formellement les critères d’éligibilité (cf mail de la mairie rappelant qu’un CQ ne peut pas apporter une subvention mais acheter une prestation ou des biens matériels concourant à une action d’intérêt général)</li>
            <li>d’autre part que la COOP14 soit réellement accessible à tous les habitants du quartier, quel que soit le niveau de leurs ressources. Sur ce sujet, Lynda indique que la question est actuellement débattue au sein de la COOP14. En l’état, seuls les coopérateurs s’étant acquittés d’un achat d’actions à hauteur de 100€ sont partie prenantes du projet. Il semble que la volonté soit d’ouvrir au maximum aux habitants du quartier, notamment à travers les actions d’animation (ateliers, conférences…).</li>
            </ul>
            <p>Le comité d’animation décide de mettre ce point à l’ordre du jour de la prochaine réunion des conseillers. En cas d’avis favorable pour un engagement budgétaire, une limite devra être fixée, les disponibilités actuelles en investissement s’élevant à 23.000€ environ. Lynda précise que l’achat pourrait par exemple se concrétiser à travers l’installation d’un ascenseur (&rArr;20.000€) ou l’aménagement de la cuisine (&lArr;10.000€). </p>
            <p>De l’avis général, une part du budget devra rester disponible pour d’autres actions.</p>
            
            <h2>Point sur le site inernet du CQ</h2>
            <p>Helga et Zéliha ont bien avancé dans le développement du site, qui est désormais opérationnel. Des améliorations seront apportées pour le rendre plus lisible et plus interactif, en offrant la possibilité aux habitants de dialoguer sur un blog. Des comptes seront ouverts pour les animateurs des commissions, leur permettant d’alimenter directement leur rubrique. </p>
            <p>Pour le moment, les mises à jour se font par l’intermédiaire d’Helga.</p>
            <h2>Proposition par rapport aux petits commerces de proximité</h2>            
            <p>Zéliha suggère, en s’appuyant sur une publication de la Ville de Paris, de mettre sur notre site une carte des petits commerces du quartier qui, dans cette période compliquée du confinement, restent ouverts ou proposent une solution « click & collect ». Il s’agirait d’une simple information pour les habitants.</p>
            <p>Le comité d’animation valide cette proposition.</p>
            
            <h2>Autres points sur la vie du quartier</h2>
            <p>Plusieurs participants soulignent la tristesse des rues avec beaucoup de commerces fermés, certains définitivement, ce qui laisse augurer de lourdes conséquences en terme d’emploi.</p>
            <h2>Planning prochaines réunions</h2>
            <p>La prochaine réunion des conseillers est fixée au jeudi 10 décembre 2020, vraisemblablement en visio.</p>
            <p>Elle pourrait être suivie d’une plénière vers la fin janvier.</p>            
        </main>
        </Layout>
    )
  }