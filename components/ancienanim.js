import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Ancienanim() {
    return (
        <div className={styles.menu3}>
            <ul>
                <li>
                    <Link href="/ancien/a2016avril11.pdf" >
                    <a target="_blank" title="Compte Rendu du 11 avril  2016">11/04/16</a>
                    </Link>
                </li>
                    <li>
                    <Link href="/ancien/a2016janv14.pdf" >
                    <a target="_blank" title="Compte Rendu du 14 janvier  2016">14/01/16</a>
                    </Link>
                </li>
                </ul>
        </div>
    )
}