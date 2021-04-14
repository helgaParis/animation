//static props, up to last100 articles included into build 
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { connectToDatabase } from "../util/mongodb";

export default function Blog({articles}) {
    return (
        <Layout >
        <Head>
          <title>Actualités - {siteTitle}</title>
          <meta
          name="keywords"
          content="Actualités du conseil de quartier, news, Porte d'Orléans, Jean Moulin, Alésia, Paris 14e, commerces ouvertes, carte, plan, confinement, contribuer, vie de quartier"
      />
        </Head>
        <main className={styles.main}>
       
        
        <h1 className={styles.title}>Les Actualités</h1>
        <p className={styles.subsubtitle}>Retrouvez sur cette page les dernières nouvelles du conseil de quartier Jean Moulin - Porte d’Orléans et de l’ensemble de ses commissions.</p>     
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
  
  
  
  
 