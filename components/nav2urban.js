import Link from 'next/link'
import styles from '../styles/Home.module.css'
import stylesPlan from '../styles/plan.module.css'
import Menu from './part2urban.js'

export default function Nav2urban() {
    return (
       
        <div className={stylesPlan.row}>        
            <div className={stylesPlan.column1x}>
                <Link href="/urbanisme">
                <a title="Retour à la page de la Comission Urbanisme" >Urbanisme &lArr;</a>
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