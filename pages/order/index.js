import style from '../../styles/order/order.module.scss'
import Image from 'next/image'
import img from '../../public/assets/banner.png'
import Navbar from '@/component/Header/navbar/Navbar'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react';
import { Context } from '../../hooks/context'

const Order = () => {
    const router = useRouter()
    const { user } = useContext(Context)

    useEffect(() => {
        if (!user) {
            router.push('/user/login')
        }
    }, [])

    return (
        <>
            <Navbar />
            {
                user ? <div className={style.cartProducts}>
                    <div className={style.cartProduct}>
                        <div className={style.imgContainer}>
                            <Image className={style.img} src={img} alt="" />
                        </div>
                        <div className={style.prodDetails}>
                            <div className={style.left}>
                                <span className={style.name}>product Name</span>
                                <span className={style.status}>Pending</span>
                            </div>
                            <div className={style.right}>
                                <span className={style.highlight}>&#8377;200</span>
                                <span className={style.status}>qty:2</span>
                            </div>
                        </div>
                    </div>
                    <div className={style.biggapon}>
                        <div className={style.content}>
                            <Image className={style.bannerImg} src={img} alt="" />
                            <div className={style.textContent}>
                                <h1>Iphone 5</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.
                                </p>
                                <h1>Price:500</h1>
                                <div className={style.cts}>
                                    <div className={style.bannerCta}>Read More</div>
                                    <div className={style.bannerCtaV2}>Shop Now</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    : ''
            }

        </>
    )
}

export default Order