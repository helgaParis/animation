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
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
            <h2  className={styles.blogtitle} >{article.title}</h2>
            <p  className={styles.blogtext}>{article.text}</p>
            <p  className={styles.bloginfos}>{article.author}, le {article.date}</p>
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
    };
  }