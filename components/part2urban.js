import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Part2urban() {
    return (
        <div className={styles.menu3}>
            <ul>
                <li>
                    <Link href="/urban/p1">
                    <a title="Projet Porte d'Orléans" >Projet Porte d'Orléans</a>
                    </Link>
                </li>
                <li>
                    <Link href="/urban/p2">
                    <a title="Interview Patrick Bernard" >Interview Patrick Bernard</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}