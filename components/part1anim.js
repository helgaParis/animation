import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Part1anim() {
    return (
        <div className={styles.menu3}>
            <ul>
            <li className={styles.bolderText}>
            <Link href="/anim/cra11">
            <a title="Compte Rendu Plenière du 31 mars 2021">31/3/21</a>
            </Link>
        </li>
            <li className={styles.bolderText}>
            <Link href="/anim/cra10">
            <a title="Compte Rendu Plenière du 20 janvier 2021">20/1</a>
            </Link>
        </li>
            <li>
            <Link href="/anim/cra9">
            <a title="Compte Rendu du 12 novembre  2020">12/11/20</a>
            </Link>
        </li>
            <li className={styles.bolderText}>
            <Link href="/anim/cra8">
            <a title="Plenière du 6 octobre  2020">6/10</a>
            </Link>
        </li>
            <li>
                <Link href="/anim/cra7">
                <a title="Compte Rendu du 22 septembre  2020">22/9</a>
                </Link>
            </li>
            <li>
                <Link href="/anim/cra6">
                <a title="Compte Rendu du 15 septembre  2020">15/9</a>
                </Link>
            </li>
            <li>
                <Link href="/anim/cra5">
                <a title="Compte Rendu du 16 juini 2019" >16/6</a>
                </Link>
            </li>
            <li>
                <Link href="/anim/cra4">
                <a title="Compte Rendu du 26 mai 2020" >26/5</a>
                </Link>
            </li>
            <li>
                <Link href="/anim/cra3">
                <a title="Compte Rendu du 14 décembre 2019" >14/12/19</a>
                </Link>
            </li>
            <li>
                <Link href="/anim/cra2">
                <a title="Compte Rendu du 2 avril 2019" >2/4</a>
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