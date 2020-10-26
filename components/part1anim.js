import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Part1anim() {
    return (
        <div className={styles.menu3}>
            <ul>
            <li>
            <Link href="/anim/cra8">
            <a title="Compte Rendu du du 22 septembre  2020">6/10/20</a>
            </Link>
        </li>
            <li>
                <Link href="/anim/cra7">
                <a title="Compte Rendu du du 22 septembre  2020">22/9/20</a>
                </Link>
            </li>
            <li>
                <Link href="/anim/cra6">
                <a title="Compte Rendu du du 15 septembre  2020">15/9/20</a>
                </Link>
            </li>
            <li>
                <Link href="/anim/cra5">
                <a title="Compte Rendu du 16 juini 2019" >16/6/20</a>
                </Link>
            </li>
            <li>
                <Link href="/anim/cra4">
                <a title="Compte Rendu du 26 mai 2020" >26/5/20</a>
                </Link>
            </li>
            <li>
                <Link href="/anim/cra3">
                <a title="Compte Rendu du 14 décembre 2019" >14/12/19</a>
                </Link>
            </li>
            <li>
                <Link href="/anim/cra2">
                <a title="Compte Rendu du 2 avril 2019" >2/4/19</a>
                </Link>
            </li>
            <li>
                <Link href="/anim/cra1">
                <a title="Synthèse des réunions des 4/12/2018 et 15/1/192018" >12/18 et 1/19</a>
                </Link>
            </li>
            </ul>
        </div>
    )
}