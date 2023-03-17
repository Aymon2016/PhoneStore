import style from "../../../styles/products/product.module.scss"
import Image from 'next/image'
import Link from 'next/link'

const Product = ({ item }) => {
    const url = process.env.NEXT_PUBLIC_STRAPI_URL
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }

    if (!item) return
    return (

        <div className={style.productCard} >
            <Link href={`/category/product/${item.id}`}>
                <div className={style.thumbnail}>
                    <Image
                        loader={myLoader}
                        src={item?.attributes?.Image?.data[0]?.attributes?.url}
                        alt="Picture"
                        width={500}
                        height={500}
                        className={style.img} />
                </div>
            </Link>
            <div className={style.prodDetails}>
                <span className={style.categoryName}>{item.attributes.productName}</span>
                <span className={style.name}>{item.attributes.productTitle}</span>
                <span className={style.price}>&#8377;{item.attributes.Price}</span>
            </div>

        </div>

    )
}

export default Product