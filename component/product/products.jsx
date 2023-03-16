import style from '../../styles/products/products.module.scss'
import Product from "./product/product"


const Products = ({ products, section }) => {

    if (!products) return

    return (
        <div className={style.productsContainer}>
            <div className={style.heading}>
                <div className={style.secHeading}>{section}</div>
                <div className={style.sorting}>
                    <select name="" id="">
                        <option value="">low to high</option>
                        <option value="">high to low</option>
                    </select>
                </div>
            </div>
            <div className={style.products}>
                {
                    products?.map((item) => (
                        <Product key={item.attributes.createdAt} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Products