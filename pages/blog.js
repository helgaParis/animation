//static props, up to last100 articles included into build 
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { connectToDatabase } from "../util/mongodb";

export default function Blogposts({articles}) {
    return (
        <Layout >
        <Head>
          <title>Actualités - {siteTitle}</title>
        </Head>
        <main className={styles.main}>
       
        
        <h1 className={styles.title}>Les Actualités</h1>
        <p>Retrouvez sur cette page les dernières nouvelles du conseil de quartier Jean Moulin - Porte d’Orléans et de l’ensemble de ses commissions.</p>     
        <iframe width="90%" height="350px" frameborder="0" allowfullscreen src="//umap.openstreetmap.fr/fr/map/les-petits-commerces-du-14e-en-temps-de-confinemen_518343?scaleControl=false&miniMap=false&scrollWheelZoom=true&zoomControl=null&allowEdit=false&moreControl=false&searchControl=true&tilelayersControl=null&embedControl=true&datalayersControl=true&onLoadPanel=none&captionBar=false&locateControl=true&fullscreenControl=false&editinosmControl=false#15/48.8292/2.3344"></iframe><p><a href="//umap.openstreetmap.fr/fr/map/les-petits-commerces-du-14e-en-temps-de-confinemen_518343" rel="noopener noreferrer"target="_blank">Voir en plein écran</a></p>
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
            <h2  className={styles.blogtitle} >{article.title}</h2>
            <p  className={styles.blogtext}>{article.text}</p>
            <p>{""}<a
             href={article.link} 
            title="Compte Rendu du 26 mai 2020"
            target="_blank"
            rel="noopener noreferrer" >
            {article.link}            
            </a></p>

            <p  className={styles.bloginfos}>{article.author}, le {article.date.slice(0,10)} à {article.date.slice(11,16)} h</p>
            </li>
          ))}
        </ul>
        </main>
       
      </Layout>
    )
  }
  export async function getStaticProps() {
    const { db } = await connectToDatabase();
  
    const articles = await db
      .collection("articles")
      .find({blog:true})
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