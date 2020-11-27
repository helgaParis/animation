import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Ancienanim() {
    return (
        <div className={styles.menu3}>
            <ul>
                <li className={styles.bolderText}>
                    <Link href="/ancien/p2019nov19.pdf" >
                    <a target="_blank" title="Plenière du 15 novembre  2019">19/11/19</a>
                    </Link>
                </li>
                <li className={styles.bolderText}>
                    <Link href="/ancien/p2018nov15.pdf" >
                    <a target="_blank" title="Plenière du 15 novembre  2018">15/11/18</a>
                    </Link>
                </li>
                <li className={styles.bolderText}>
                    <Link href="/ancien/p2017sept14.pdf" >
                    <a target="_blank" title="Plenière du 14 septembre  2017">14/09/17</a>
                    </Link>
                </li>
                <li className={styles.bolderText}>
                    <Link href="/ancien/p2016mai17.pdf" >
                    <a target="_blank" title="Plenière du 17 mai  2016">17/05/16</a>
                    </Link>
                </li>
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