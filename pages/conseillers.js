import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'
// import Link from 'next/link'


export default function Conseillers() {
    return (
    <Layout >
      <Head>
        <title>{siteTitle} - Conseillers</title>
      </Head>
      <main className={styles.main}>
        
        <h1 className={styles.title}>Qui sont les conseillers de quartier ?</h1>
        <p>Le conseil de quartier Jean Moulin - Porte d’Orléans est composé au total de 60 membres. Ils ont été tirés au sort lors d’un événement public le 13 octobre 2018 parmi la liste des citoyens qui se sont portés candidats. La parité femmes - hommes y est strictement respectée puisqu’il compte 30 femmes et 30 hommes. Ces derniers siègent au conseil de quartier pour une durée de trois ans - l’actuelle mandature s’établissant pour la période 2018 - 2021 - et disposent chacun d’un droit vote sur les décisions prises par le conseil de quartier.
        </p>
        <p>Toute personne de plus de 16 ans qui habite, étudie, travaille ou exerce une activité associative dans le 14e arrondissement peut devenir conseiller de quartier, à condition de ne pas déjà faire partie d’un autre conseil de quartier. Il n’existe aucun autre pré-requis pour être candidat, si ce n’est l’envie de s’impliquer dans la vie de son quartier.
        </p>
        <div className={styles.encadre}>
        <h3>Si je ne suis pas conseiller de quartier, puis-je quand même m’investir dans le conseil de quartier ?</h3>
        <p>Parfaitement ! Le conseil de quartier est ouvert à tout le monde. Si vous n’avez pas eu l’occasion de vous porter candidat au dernier tirage au sort ou si vous n’avez pas été tiré au sort, rien ne vous empêche de vous investir dans le conseil de quartier. Au contraire ! Que vous souhaitiez porter un projet précis, présenter une idée, faire part d’un problème local, ou simplement vous tenir informé des débats qui animent le quartier, les portes du conseil de quartier vous sont grandes ouvertes.</p>
        </div>
        <h3>Liste des conseillers de quartier Jean Moulin - Porte d’Orléans pour la période 2018-2021</h3>
        <p> (à actualiser car pas à jour)</p>
        <p>Lynda ABA 
       ,  Djamila ABDI
       ,  Rougui BALDE
        , Hélène BISSON
        , Anne-Cécile BOIZE
        , Michelle CAILLAT
        , Antonella CAPONNETTO
        , Zeliha CHAFFIN
        , Caroline DELASSADE
        , Laurence DEPOND
        , Jeannine DEVOUCOUX
        , Sarra DRIDI
        , Françoise FABRE
        , Chantal GODINOT
        , Aurore GUILBAUD
        , Rachida LARDINOIS
        , Agathe LE MOUROUX
        , Marie-Martine LECLERC
        , Suzanne LEROY
        , Jade MAZRI
        , Sophie MILJKOVIC
        , Helga PETROVIC
        , Anne-Florence QUAIREAU
        , Odile QUINTIN
        , Coralie RAYNAUD MORIN
        , Martine REJRAJI
        , Katia SAINT RUF
        , Chiara SANDIONIGI
        , Noémie VERGIER
        , Danielle VOLSKINSFELD BROUSSE
        , Nacer ABI-AYAD
        , Alexandre ADAM
        , Hakim AHDJOUDJ
        , Fadhel BEN BRAHEN
        , Aadil BEN SADDIK
        , Gérard BIEN
        , Éric BOUCHAUD
        , Mathieu BOULESTRAU
        , Maxime CAZALAS
        , Joel CHASSERIAU
        , Benjamin CHAUSI
        , Thomas CRABEROU
        , Jean-Philippe DELBOSC D’AUZON
        , Guillaume DURAND
        , Michel FRANGE
        , Paul GAUTHIER
        , Alexis GEORGIN
        , Gabin GOMES
        , Denys GRANNAVEL
        , Paul-Alain LANDRAGIN
        , Nathanael LAVRY
        , Jacques LECLER
        , Alexandre MITIC
        , Nacer MOULAI
        , Wenjun PANT
        , Alain PENSO
        , Michel POMMEAU
        , André QUERRE, Florian STAHLHOFEN
        , Andreas WESTERWINTER
        </p>
    
        
        </main>
    </Layout>
     
    )
  }