import style from '../../styles/cart/cart.module.scss'
import CloseIcon from '@mui/icons-material/Close';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import Cartitem from './cartitem/Cartitem';
import { useContext, useEffect } from 'react';
import { Context } from '../../hooks/context';
import { useRouter } from 'next/router'
import Link from 'next/link'
// import { loadStripe } from '@stripe/stripe-js';
// import { makePaymentRequest } from '../../utilis/api'

const Cart = ({ setShowCart }) => {


    const { cartSubTotal, cartCount, user, cartItems } = useContext(Context)

    // const publishKey = import.meta.env.VITE_STRAPE_PUBLISH_TOKEN


    // const stripePromise = loadStripe(publishKey)


    // const handlePayment = async () => {


    //     try {


    //         const stripe = await stripePromise;
    //         console.log("call")
    //         const res = await makePaymentRequest.post("/api/orders", {
    //             products: cartItems,
    //         })
    //         console.log(res)
    //         await stripe.redirectToCheckout({
    //             sessionId: res.data.stripeSession.id,
    //         })

    //     } catch (error) {
    //         console.log(error)
    //     }

    // }
    const router = useRouter()

    const placeOrder = () => {
        if (!user) {
            router.push('/user/login')
            window.alert('please first login')
        } else {

            window.alert('hand Cash payment is running')
        }
    }

    return (
        <div className={style.cartPanel}>
            <div className={style.opacLayer}></div>
            <div className={style.cartContent}>
                <div className={style.cartHeader}>
                    <span className={style.heading}>Shoping Card</span>
                    <span className={style.closeBtn}
                        onClick={() => setShowCart(false)}
                    >
                        <CloseIcon />
                        <span className={style.text}>close</span>
                    </span>
                </div>

                {
                    cartCount == 0 ? <div className={style.emptyCart}>
                        <RemoveShoppingCartIcon />
                        <span>No products in the cart</span>
                        <Link href={'/'}>
                            <button className='return-cta'>RETURN TO SHOP</button>
                        </Link>
                    </div> : <>
                        <Cartitem />
                        <div className={style.cartFooter}>
                            <div className={style.subtotal}>
                                <span className={style.text}> Subtotal</span>
                                <span className={style.textTotal}>&#8377;{cartSubTotal}</span>
                            </div>
                            <div className={style.button}>
                                <div className={style.checkoutCta} onClick={placeOrder}>Checkout</div>
                            </div>
                        </div>
                    </>

                }

                {/* <>
                    <Cartitem />
                    <div className={style.cartFooter}>
                        <div className={style.subtotal}>
                            <span className={style.text}> Subtotal</span>
                            <span className={style.textTotal}>&#8377;500</span>
                        </div>
                        <div className={style.button}>
                            <div className={style.checkoutCta}>Checkout</div>
                        </div>
                    </div>
                </> */}

            </div>
        </div>
    )
}

export default Cart