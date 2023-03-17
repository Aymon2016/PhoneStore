
import style from '../../styles/productSlide/productSlide.module.scss'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Divider } from '@mui/material';
import Link from 'next/link'
import Image from 'next/image'



const responsive = {
    superLargeDesktop: {

        breakpoint: { max: 4000, min: 1024 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 1024, min: 550 },
        items: 3,

    },
    tablet: {
        breakpoint: { max: 550, min: 400 },
        items: 2,

    },
    mobile: {
        breakpoint: { max: 400, min: 0 },
        items: 1,

    }
};



const ProductSlide = ({ products, heading }) => {

    const url = process.env.NEXT_PUBLIC_STRAPI_URL

    const myLoader = ({ src, width, quality }) => {


        return `${src}?w=${width}&q=${quality || 75}`
    }


    if (!products) return
    return (
        <div className={style.productsSection}>
            <div className={style.productsDeal}>
                <h3>{heading}</h3>
                <Link href="/category/[id]"><button className={style.viewBtn}>View All</button></Link>
            </div>
            <Divider />
            <Carousel
                responsive={responsive}
                infinite={true}
                draggable={false}
                ssr={true}
                focusOnSelect={true}
                swipeable={true}
                centerMode={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                showDots={false}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-60-px"
                containerClass="carousel-container"
            >
                {
                    products?.map((item) => {
                        return (
                            <Link href="/category/product/1" key={item.attributes.createdAt}>
                                <div className={style.productsItems}>
                                    <div className={style.productImg}>
                                        <Image loader={myLoader}
                                            src={item.attributes.Image.data[0].attributes.url}
                                            alt="Picture of the author"
                                            width={600}
                                            height={600}

                                        />
                                    </div>
                                    <p className={style.productsName}>{item.attributes.productName}</p>
                                    <p className={style.productsOffer} style={{ color: "#  007185" }}>Price: {item.attributes.Price}</p>
                                    <p className={style.productsExplore}>{item.productTitle}</p>
                                </div>

                            </Link>
                        )
                    })
                }

            </Carousel>
        </div>
    )
}

export default ProductSlide