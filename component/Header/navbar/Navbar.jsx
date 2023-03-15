import style from '../../../styles/header/navbar.module.scss'
import Link from 'next/link'
const Navbar = () => {
    return (
        <div className={style.navberSection}>
            <ul className={style.navbar}>
                <Link className={style.link} href="/"><li>Home</li></Link>
                <Link className={style.link} href="/about"><li>About</li></Link>
                <Link className={style.link} href="/contact"><li>Contact</li></Link>
                <Link className={style.link} href="/order"><li>Order</li></Link>
            </ul>

        </div>
    )
}

export default Navbar