


import style from "../../../styles/category/singleProduct.module.scss";


import Image from 'next/image'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import RelatedProducts from '@/component/relatedProduct/relatedProduct';

import { useState, useContext } from 'react';
import { Context } from '../../../hooks/context';

import Navbar from '@/component/Header/navbar/Navbar';
import axios from 'axios'
import SearchBar from "@/component/Header/serchBar/SearchBar";

const SingleProduct = ({ products }) => {

    const [quantity, setQuentity] = useState(1)

    const increment = () => {
        setQuentity((prevState) => prevState + 1)
    }
    const decrement = () => {
        setQuentity((prevState) => {
            if (prevState == 1) return 1
            return prevState - 1
        }
        )
    }

    const { handleAddToCart, cartItems } = useContext(Context)
    if (!products) return


    const url = process.env.STRAPI_URL
    const myLoader = ({ src, width, quality }) => {
        return `http://localhost:1337${src}?w=${width}&q=${quality || 75}`
    }

    console.log(cartItems)
    return (

        <>
            <SearchBar />
            <Navbar />
            <div className={style.singleProductMainContent}>
                <div className={style.layout}>
                    <div className={style.singleProductPage}>
                        <div className={style.left}>
                            <Image
                                loader={myLoader}
                                src={products[0].attributes.Image.data[0].attributes.url}
                                alt="Picture"
                                width={500}
                                height={500}
                                className={style.img} />
                        </div>
                        <div className={style.right}>
                            <span className={style.name}>{products[0].attributes.productName}</span>
                            <span className={style.title}>{products[0].attributes.productTitle}</span>
                            <span className={style.price}> &#8377;{products[0].attributes.Price}</span>
                            <span className={style.desc}> {products[0].attributes.Description} </span>

                            <div className={style.cartButtons}>
                                <div className={style.quantityButtons}>
                                    <span onClick={decrement}>-</span>
                                    <span>{quantity}</span>
                                    <span onClick={increment}>+</span>
                                </div>
                                <button className={style.addToCartButton}
                                    onClick={() => {
                                        handleAddToCart(products[0], quantity)
                                        setQuentity(1)
                                    }
                                    }
                                >
                                    <AddShoppingCartIcon />
                                    ADD TO CART
                                </button>
                            </div>
                            <span className={style.divider}></span>

                            <div className={style.infoItem}>
                                <span className={style.textBold}>
                                    Category:{"  "}
                                    {products[0].attributes.categories.data?.map((item) => (

                                        <span key={item.id}>{item.attributes.title}</span>
                                    ))}
                                </span>
                                <span className={style.textBold}>
                                    Share:
                                    <span className={style.socialIcons}>
                                        <FacebookIcon />
                                        <InstagramIcon />
                                        <LinkedInIcon />
                                        <PinterestIcon />
                                        <TwitterIcon />
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <RelatedProducts
                        productid={products[0].id}
                        categoryId={products[0].attributes.categories.data[0].id}

                    />
                </div>
            </div>
        </>
    )
}

export default SingleProduct


export async function getStaticPaths() {

    return {
        paths: [

            { params: { slug: '1' } }
        ],
        fallback: true,
    }
}

export async function getStaticProps({ params }) {
    const { slug } = params

    const param = {
        Headers: {
            Authorization: "bearer" + process.env.STRAPI_PUB_TOKEN,
        }
    }
    const product = await axios.get(`http://localhost:1337/api/products?populate=*&[filters][id]=${slug}`, param)
    const products = await product.data.data
    return {
        props: {

            products,

        },
    }

}
