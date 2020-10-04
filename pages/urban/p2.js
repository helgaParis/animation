import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import styles from '../../styles/Home.module.css'

import Nav2urban from '../../components/nav2urban'

export default function P2() {
    return (
        <Layout >
        <Head>
          <title> Conseil de quartier JMPO – Commission urbanisme - Interview</title>
        </Head>
        <main className={styles.main}>
            <Nav2urban></Nav2urban>
            <p>Interview Patrick Bernard, président HyperVoisins</p>
            <h3 className={styles.title}>Dans une récente interview, vous dites vouloir faire de ces voisins des “maîtres d’ouvrage de l’espace public”. Aujourd’hui, quelles relations souhaitez-vous construire avec la municipalité ?</h3>
            <p>Je crois que sur certains projets, on a besoin d’inventer un nouveau cadre juridique susceptible de légitimer l’implication citoyenne. Je vais prendre en exemple un de nos projets, « Et toi, tu ferais quoi à ma Place ? », qui se propose de transformer la Place des Droits de l’Enfant en place de village. Ce projet nous a amenés à faire l’été dernier une consultation publique pour questionner la pertinence de notre proposition auprès de nos voisins. Des questionnaires nous ont permis de définir les attentes des riverains : animer la place, la piétonniser, la végétaliser, l’équiper en mobilier urbain léger. À la suite de cette première phase, nous avons constitué une équipe d’urbaniste, d’architecte, de paysagiste du quartier qui a dessiné le projet que nous avons présenté à la Mairie. La suite, ça a été des réunions régulières avec les services techniques (services de la voirie, la direction des espaces verts, etc.) afin de chiffrer le chantier et se répartir la charge de travail. Or, cette co-conception, si elle s’apparente à une co-maîtrise d’ouvrage, ne peut, dans les faits, réellement en être une car nous évoluons sur l’espace public et sans délégation. Mais cette expérimentation ouvre cependant un vaste champ de collaboration, entre les citoyens et la collectivité, qui tout en s’appuyant sur l’expertise professionnelle des services techniques autorise une implication très poussée des riverains dans l’aménagement de leur environnement quotidien.
            </p>
            <p>Reste, si l’on souhaite modéliser ce type de fonctionnement, qu’il faudra inventer un cadre à cette implication. Un cadre d’action, mais également un cadre juridique qui puisse légitimer l’action positive et d’intérêt général de certains citoyens sans qu’elle soit contestée sur le terrain du droit.</p>
            <p>Au-delà de la co-conception de l’ouvrage urbain qui restera par définition une action minoritaire, ce cadre juridique pourrait par contre parfaitement en border la maîtrise d’usage, c’est-à-dire la capacité d’une organisation citoyenne à maîtriser l’usage d’un bien public. Pour reprendre l’exemple de la Place des Droits de l’enfant, l’enjeu véritable de cet espace co-conçu, plus que la modification de sa voirie, est l’usage que l’on fera de cette place de village. En d’autres termes, son emploi du temps : quelles seront les activités qui pourront s’y dérouler, du lundi matin au dimanche soir, sur lesquelles les riverains s’accorderont et quels outils mettrons-nous en place pour en maîtriser les usages afin qu’il correspondent aux vœux initiaux</p>
            <p>Pour rendre tout cela possible, nous proposons de réfléchir aux termes de ce qui pourrait devenir une « délégation de service public citoyenne » avec, d’un côté, des contrats d’objectifs à respecter émis par la collectivité et, de l’autre, des moyens mis à la disposition de collectifs ou d’associations locales pour y parvenir. Avec toujours le même pari : plus le citoyen est impliqué dans son territoire, plus il se l’appropriera, le respectera et l’entretiendra.</p>
            
        </main>
        </Layout>
    )
  }