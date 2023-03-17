import style from '../../../styles/cart/cartItem.module.scss';
import prod from '../../../public/assets/banner.png'
import CloseIcon from '@mui/icons-material/Close';
import { useContext } from 'react';
import { Context } from '../../../hooks/context';
import Image from 'next/image'


const Cartitem = () => {

    const { handleRemoveFromCart, handleCartProductQuantity, cartItems } = useContext(Context)

    if (!cartItems) return


    const url = process.env.NEXT_PUBLIC_STRAPI_URL

    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }


    return (
        <div className={style.cartProducts}>
            {
                cartItems?.map(item => (
                    <div className={style.cartProduct}>
                        <div className={style.imgContainer}>
                            <Image loader={myLoader}
                                src={item.attributes.Image.data[0].attributes.url}
                                alt="Picture of the author"
                                width={600}
                                height={600} />
                        </div>
                        <div className={style.prodDetails}>
                            <span className={style.name}>{item.attributes.productName}</span>
                            <span onClick={() => handleRemoveFromCart(item)
                            }
                            >
                                <CloseIcon className='closeBtn' />
                            </span>
                            <div className={style.quantityButtons}>
                                <span
                                    onClick={() => handleCartProductQuantity("dec", item)}
                                >-</span>
                                <span>{item.attributes.quantity}</span>
                                <span
                                    onClick={() => handleCartProductQuantity("inc", item)}
                                >+</span>
                            </div>
                            <div className={style.text}>
                                <span>{item.attributes.quantity}</span>
                                <span>*</span>
                                <span>{item.attributes.Price}</span>
                                <span className='highlight'> = &#8377;{item.attributes.quantity}*{item.attributes.Price}</span>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Cartitem