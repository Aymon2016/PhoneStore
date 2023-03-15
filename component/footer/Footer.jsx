import style from '../../styles/footer/Footer.module.scss'

import payment from "../../public/assets/payment.png"

import Image from 'next/image'
import Link from 'next/link'





const Footer = ({ categories }) => {

    return (
        <footer className={style.footer}>
            <div className={style.footerContent}>
                <div className={style.col}>
                    <h1 className={style.title}>Categories</h1>
                    <li className={style.text}>Iphone</li>
                    <li className={style.text}>Mi</li>
                    <li className={style.text}>Samsung</li>
                    <li className={style.text}> Nokia</li>
                </div>
                <div className={style.social}>
                    <h1 className={style.title}>Social Link</h1>
                    <a href='#' className={style.text}>Facebook</a>
                    <a href='#' className={style.text}>Twitter</a>
                    <a href='#' className={style.text}>LinkdIn</a>
                    <a href='#' className={style.text}>Instagram</a>
                </div>
                <div className={style.col}>
                    <h1 className={style.title}>Page</h1>
                    <li><Link className={style.text} href="/">Home</Link></li>
                    <li><Link className={style.text} href="/about">About</Link></li>
                    <li><Link className={style.text} href="/contact">Contact</Link></li>
                    <li><Link className={style.text} href="/order">Order</Link></li>
                </div>
            </div>
            <div className={style.bottomBar}>
                <div className={style.bottomBarContent}>
                    <div className={style.text}>
                        Copyright © {new Date().getFullYear()} Phone Store. All Rights Reserved.
                    </div>
                    <Image src={payment} alt="" />
                </div>
            </div>
        </footer>
    )
}

export default Footer