import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'
const email='conseil14@asf-web.fr'
import Link from 'next/link'

export default function Mentions() {
    return (
        <Layout >
        <Head>
          <title>Mentions légales - {siteTitle}</title>
          <meta
          name="keywords"
          content="Mentions légales, hébergement, rédaction, domain, contact"
        />
        </Head>
        <main className={styles.main}>
        <h1 className={styles.title}>Mentions légales</h1>
        <h4>Editeur du site :</h4> 
        <p>le Conseil de quartier Jean Moulin - Porte d’Orléans</p>        
        <h4>Conception graphique et réalisation technique : </h4>
        <p>Helga Petrovic, avec la contribution bénévole de l’équipe de l’association Artistes sans Frontières</p>
        <h4>Responsable de la rédaction : </h4>
        <p>Zeliha Chaffin</p>        
        <h4>Rédaction web : </h4>
        <p>les conseillers de quartier Jean Moulin - Porte d’Orléans</p>
        <h4><a href={`mailto:${email}?subject=Page Mentions du Conseil de Quartier JM PO&body= `}>Email : conseil14@asf-web.fr</a></h4>
        <h4>Site web : </h4>
        <p><Link href="/">
        <a title="Page d'accueil'" >www.conseil-jmpo.fr </a>
        </Link></p>    
        <h4> Hébergement : </h4>
        <p> OVH (nom de domaine), 2 rue Kellermann, 59100 Roubaix - France
        <a href="https://www.ovh.com/fr"  rel="noopener" target="_blank" >www.ovh.com/fr</a><br/>
        Vercel (service cloud)  <a href="https://www.vercel.com"  rel="noopener" target="_blank" >www.vercel.com</a> <br/>
        Code source du site disponible sur github, licence MIT (open source)
        <a href="https://github.com/helgaParis/animation"  rel="noopener" target="_blank" >www.github.com/helgaParis/animation</a><br/></p>
        <h4>Droits d’auteur</h4>
        <p>En application du Code français de la propriété intellectuelle, il est interdit pour un usage autre que privé ou pédagogique de reproduire, vendre, diffuser, modifier, publier intégralement ou partiellement, sous quelque forme que ce soit les données, la présentation ou l'organisation du site ainsi que les œuvres protégées par les droits d’auteur qui y figurent, sans autorisation écrite préalable, dont la demande doit être adressée au webmaster.</p>
          <h4>Données personnelles</h4>
          <p>Le Conseil de quartier Jean Moulin - Porte d’Orléans est soucieux de la protection de la vie privée des internautes. La présente politique a pour objet de vous informer de la manière dont nous traitons les données personnelles que vous nous fournissez et que nous recueillons dans le cadre de votre utilisation de notre site internet.</p>
          <p>Nous collectons et traitons des données personnelles vous concernant uniquement aux fins de ::</p>
          <ul>
            <li>gérer, traiter et apporter une réponse à vos demandes envoyées par mail ou via notre formulaire de contact en ligne</li>
            <li>envoyer les communications relatives aux actualités du conseil de quartier (invitations aux réunions, lettre d’information, annonces d'évènements organisés par le conseil de quartier…)</li>
            </ul>
            <p>Les données sont conservées pendant [mettre la durée de conservation des données]. Vous pouvez accéder aux données vous concernant, les rectifier, demander leur effacement ou exercer votre droit à la limitation du traitement de vos données. Pour exercer ces droits ou pour toute question sur le traitement de vos données, vous pouvez contacter la rédaction du site internet 
            <a href={`mailto:${email}?subject=Données enregistrées par le Conseil de Quartier JM PO&body=Mes données `}>Email : conseil14@asf-web.fr</a></p>
        
       
      </main>
      </Layout>
    );
  }