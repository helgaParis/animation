import Link from 'next/link'
import styles from '../styles/Home.module.css'
import stylesPlan from '../styles/plan.module.css'
import Menu from './part1anim.js'

export default function Nav1urban() {
    return (
       
        <div className={stylesPlan.row}>        
            <div className={stylesPlan.column1x}>
                <Link href="/comite">
                <a title="Retour à la page du comitée de l'animation" >Animation &lArr;</a>
                </Link>
            </div>             
            <div className={stylesPlan.column3x}>
                <div className={styles.menu3}>
                    <Menu></Menu>
                </div> 
                </div>         
        </div>
    )
}