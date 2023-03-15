


import Products from '../product/products'

import useFetch from '../../hooks/useFetch'

const RelatedProducts = ({ productid, categoryId }) => {
    if (!productid && !categoryId) return

    const { data } = useFetch(`/api/products?populate=*&filters[id][$ne]=${productid}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`)


    if (!data) return
    return (
        <div className="related-product">
            <Products products={data.data} />
        </div>
    )
}

export default RelatedProducts