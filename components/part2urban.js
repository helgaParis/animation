import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Part2urban() {
    return (
        <div className={styles.menu3}>
            <ul>
                <li>
                    <Link href="/urban/p1">
                    <a title="Projet" >Projet</a>
                    </Link>
                </li>
                <li>
                    <Link href="/urban/p2">
                    <a title="Interview" >Interview</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}