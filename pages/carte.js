import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Carte() {
    return (
        <Layout >
        <Head>
          <title>Carte - {siteTitle}</title>
        </Head>
        <main className={styles.main}>
       
            <h1 className={styles.title} >Carte des commerces ouverts pendant le confinement en 2020 </h1>
          
           <iframe width="85%" height="600px" frameBorder="0"  title="carteCommercesOuvertes" src="//umap.openstreetmap.fr/fr/map/les-petits-commerces-du-14e-en-temps-de-confinemen_518343?scaleControl=false&miniMap=false&scrollWheelZoom=true&zoomControl=null&allowEdit=false&moreControl=false&searchControl=true&tilelayersControl=false&embedControl=true&datalayersControl=true&onLoadPanel=none&captionBar=false&locateControl=true&fullscreenControl=false&editinosmControl=false#15/48.8292/2.3344"></iframe><p><a href="//umap.openstreetmap.fr/fr/map/les-petits-commerces-du-14e-en-temps-de-confinemen_518343" rel="noopener noreferrer"target="_blank">Voir en plein écran</a></p>
        
        
  
      </main>
      </Layout>
    )
  }