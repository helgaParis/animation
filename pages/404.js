// pages/404.js
import Layout, { siteTitle } from '../components/layout'
import Head from 'next/head'
import Image from "next/image";
import styles from '../styles/Home.module.css'
import styleerreur from "../styles/erreur.module.css";


export default function Custom404() {
    return (
        <Layout>
     <Head>
          <title>Error 404 site CQ</title>
        </Head>
        <main className={styles.main}>
    <div className={styleerreur.degrade}>
    <h1 className={styles.title}>404 - Page introuvable</h1>
    <p>Le serveur n'a pas trovué la page demandée</p>
    <div className={styleerreur.errimage}>
      <Image
        src="/404.jpg"
        alt="illustration d'un chemin avec une grenouille un panneau indiquant erreur 404"
        width={500}
        height={660}
        loading="lazy"
      />
    </div>
    </div>

    </main>
    </Layout>
    )
  }