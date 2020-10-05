import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Part1anim() {
    return (
        <div className={styles.menu3}>
            <ul>
            <li>
                <Link href="/anim/cr10">
                <a title="Compte Rendu du" >1</a>
                </Link>
            </li>
            <li>
                <Link href="/anim/cr9">
                <a title="Compte Rendu du" >2</a>
                </Link>
            </li>
            <li>
                <Link href="/anim/cr8">
                <a title="Compte Rendu du 10 décembre 2019" >10/12/19</a>
                </Link>
            </li>
            <li>
                <Link href="/anim/cr7">
                <a title="Compte Rendu du 6 novembre 2019" >6/11/19</a>
                </Link>
            </li>
            <li>
                <Link href="/anim/cr6">
                <a title="Compte Rendu du 10 septembre 2019" >10/9/19</a>
                </Link>
            </li>
            <li>
                <Link href="/anim/cr5">
                <a title="Compte Rendu du 25 juin 2019" >25/6/19</a>
                </Link>
            </li>
            <li>
                <Link href="/anim/cr4">
                <a title="Compte Rendu du 14 mai 2019" >14/5/19</a>
                </Link>
            </li>
            <li>
                <Link href="/anim/cr3">
                <a title="Compte Rendu du 12 mars 2019" >12/3/19</a>
                </Link>
            </li>
            <li>
                <Link href="/anim/cr2">
                <a title="Compte Rendu du 17 janvier 2019" >17/1/19</a>
                </Link>
            </li>
            <li>
                <Link href="/anim/cr1">
                <a title="Compte Rendu du 18 décembre 2018" >18/12/18</a>
                </Link>
            </li>
            </ul>
        </div>
    )
}