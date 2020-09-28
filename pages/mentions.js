import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'



export default function Mentions() {
    return (
        <Layout >
        <Head>
          <title>Mentions légales</title>
          <meta
          name="keywords"
          content="Mentions légales, hébergement, rédaction, domain, contact"
        />
        </Head>
        <main className={styles.main}>
        
        <h1 className={styles.title}>Mentions légales</h1>
        <p>Version de travail du site</p>
        <p>Le site est hébergé par Vercel (contenu et nom de domaine provisoire) et OVH (nom défnitif)</p>
        <p>Nous contacter: {" "}
                    <a href={`mailto:${email}?subject=Page Mentions du Conseil du Quartier JM PO&body= `}>par email</a>
                    </p>
        <p>Idée, réalisation technique, webmaster: Helga Petrovic</p>
        <p>Contributions techniques: l'équipe de Artistes sans Frontières</p>
        <p>Responsable de rédaction: Zeliha (à partir de la publication)</p>
        <p>Responsable de redaction du blog (chapitre Actualités): ...</p>
        <p>Droits d'auteur: Contenu (textes, photos, films etc) indiquant un auteur: l'auteur. 
            <br></br>Autre contenu: le conseil du quartier JM</p>
        <p>Code source du site: {" "}
                        <a
                        href="https://github.com/helgaParis/animation"
                        target="_blank"
                        rel="noopener noreferrer"
                        // className={styles.linkintern}
                        >
                        consulter sur github
                        </a>, licence (à suivre)</p>
        <p>Vos données: Si vous visitez le site uniquement, nous ne collectons pas d'informations. 
            Si vous nous contactez via le formulaire, les données que vous nous envoyez sont stockées. Vous pouvez demander leur suppression à tout moment. 
            Si vous choississez l'option de demander à être invité aux evenements, nous gardons votre adresse email pour le faire. 
            Dans tous les autres cas, les données des formulaires sont supprimés automatiquement après ....x mois / à la fin d'une période?
            Pour des contacts par mail, après notre reponse, les mails sont supprimés après 1 mois? Stockés ? - à discuter
            </p>
      </main>
      </Layout>
    );
  }