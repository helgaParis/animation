import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Part1urban() {
    return (
        <div className={styles.menu3}>
            <ul>
            <li>
            <Link href="/urban/cr12">
            <a title="Compte Rendu du 7 mai 2021" >7/5/2021</a>
            </Link>
        </li>
            <li>
            <Link href="/urban/cr11">
            <a title="Compte Rendu du 9 avril 2021" >9/4/2021</a>
            </Link>
        </li>
            <li>
                <Link href="/urban/cr10">
                <a title="Compte Rendu du 30 janvier 2020" >29/9/2020</a>
                </Link>
            </li>
            <li>
                <Link href="/urban/cr9">
                <a title="Compte Rendu du 30 janvier 2020" >30/1/20</a>
                </Link>
            </li>
            <li>
                <Link href="/urban/cr8">
                <a title="Compte Rendu du 10 décembre 2019" >10/12/19</a>
                </Link>
            </li>
            <li>
                <Link href="/urban/cr7">
                <a title="Compte Rendu du 6 novembre 2019" >6/11/19</a>
                </Link>
            </li>
            <li>
                <Link href="/urban/cr6">
                <a title="Compte Rendu du 10 septembre 2019" >10/9/19</a>
                </Link>
            </li>
            <li>
                <Link href="/urban/cr5">
                <a title="Compte Rendu du 25 juin 2019" >25/6/19</a>
                </Link>
            </li>
            <li>
                <Link href="/urban/cr4">
                <a title="Compte Rendu du 14 mai 2019" >14/5/19</a>
                </Link>
            </li>
            <li>
                <Link href="/urban/cr3">
                <a title="Compte Rendu du 12 mars 2019" >12/3/19</a>
                </Link>
            </li>
            <li>
                <Link href="/urban/cr2">
                <a title="Compte Rendu du 17 janvier 2019" >17/1/19</a>
                </Link>
            </li>
            <li>
                <Link href="/urban/cr1">
                <a title="Compte Rendu du 18 décembre 2018" >18/12/18</a>
                </Link>
            </li>
            </ul>
        </div>
    )
}