import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'
import climatStyles from '../styles/climat.module.css'
import flowerStyles from '../styles/flower.module.css'
const email = 'conseil14@asf-web.fr'

import { connectToDatabase } from "../util/mongodb";

export default function Climat({articles}) {
    return (
        <Layout >
            <Head>
                <title>Climat - {siteTitle}</title>
            </Head>
            <main className={styles.main}>
                <div className={flowerStyles.textgauche}>
                    <h1 className={styles.title} >La commission Climat</h1>
                    <p>La commission a pour but de proposer des projets visant à améliorer la qualité de vie pour les habitants du quartier et envisager également un nouvel aménagement de la porte d'Orleans en concertation avec les habitants.</p>
                    <p>
                        Il s'agit entre autres de travailler sur : </p>
                    <ul>
                        <li>La pollution de l'air, sonore, lumineuse</li>
                        <li>sur la végétalisation (espace au sol ou sur mur) </li>
                        <li>sur le recyclage des déchets alimentaires (installation de composts*)</li>
                        <li>etc...</li>
                    </ul>

                    <div className={climatStyles.dyn}>
                        <p>
                        <ul >
        {articles.map((article) => (
          <li key={article.id}>
          {article.title && <h2  className={styles.blogtitle} >{article.title}</h2>}
          {article.text && <p  className={styles.blogtext}>{article.text}</p>}
          {article.image1 && <img src={article.image1} className={styles.blogimage} alt={article.alt1} ></img>}
          {article.image2 && <img src={article.image2} className={styles.blogimage} alt={article.alt2} ></img>}
          {article.alt1 && <p className={styles.blogimgtext}>{article.alt1} 
          {article.alt2 && <span> - {article.alt2} </span>}
          </p>  }
          {article.link && <p>{""}
            <a
             href={article.link} 
            title={article.link}
            target="_blank"
            rel="noopener noreferrer" >
            {article.link}            
            </a>
            </p>}
          <p  className={styles.bloginfos}>
            {article.author&&<span> {article.author}</span>}   {!article.author && <span>Information</span>}
            {article.date && <span>,  le {article.date.slice(0,10)} à {article.date.slice(11,13)}h{article.date.slice(14,16)} </span>}
          </p>
          </li>
        ))}
      </ul>
                        </p>
                    </div>



                    <a href="https://www.jecomposteenville.fr/trouver-ou-composter/" rel="noopener" target="_blank"> *Découvrir le site du compostage</a>

                    <h3 className={styles.subsubtitle}>Nous vous invitons à participer à cette commission </h3>
                    <p>Réunions  tous les derniers mercredi de chaque mois .</p>
                    <h3 className={styles.subsubtitle}>Nous vous invitons également à nous communiquer {""}
                        <a href={`mailto:${email}?subject=Commission Climat Conseil de Quartier JMPO&body= Mes Propositions :`}>vos propositions par email.</a>
                    </h3>
                </div>
                <div className={flowerStyles.containeranim}>
                    <div className={flowerStyles.cloud}></div>
                    <div className={flowerStyles.ground}></div>
                    <div className={flowerStyles.flower}>
                        <div className={flowerStyles.stem}></div>
                        <div className={flowerStyles.leaf_1}></div>
                        <div className={flowerStyles.leaf_2}></div>
                        <div className={flowerStyles.leaf_3}></div>
                        <div className={flowerStyles.petal_1}></div>
                        <div className={flowerStyles.petal_2}></div>
                        <div className={flowerStyles.petal_3}></div>
                        <div className={flowerStyles.petal_4}></div>
                        <div className={flowerStyles.petal_5}></div>
                        <div className={flowerStyles.petal_6}></div>
                        <div className={flowerStyles.center}></div>
                    </div>
                </div>


            </main>
        </Layout>
    )
}

export async function getStaticProps() {
    const { db } = await connectToDatabase();

    const articles = await db
        .collection("articles")
        .find({ climat: true })
        .sort({ date: -1 })
        .limit(100)
        .toArray();

    return {
        props: {
            articles: JSON.parse(JSON.stringify(articles)),
        },

        // - the revalidate command adds regeneration to the static page  
        revalidate: 1, // In seconds, every n seconds max - it's actually much slower, a few minutes to see change
    };
}