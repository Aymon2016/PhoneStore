
import style from '../../../../styles/header/serch.module.scss'
import Image from 'next/image'
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import useFetch from '@/hooks/useFetch';
import Link from 'next/link'


const Search = ({ setShowSearch }) => {

    const [query, setQuery] = useState("")


    const handleChange = (e) => {
        setQuery(e.target.value)
    }
    console.log(query)
    let { data } = useFetch(`/api/products?populate=*&filters[productName][$contains]=${query}`)
    console.log(data)

    if (!query.length) {
        data = null;
    }
    const url = process.env.NEXT_PUBLIC_STRAPI_URL
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }

    return (
        <div className={style.searchModel}>
            <div className={style.formField}>
                <input
                    type="text"
                    autoFocus
                    placeholder='Search for porducts'
                    value={query}
                    onChange={handleChange}
                />
                <span onClick={() => setShowSearch(false)}> <CloseIcon /></span>
            </div>
            <div className={style.searchResultContent}>
                <div className={style.searchResults}>
                    {
                        data?.data?.map(item => (
                            <Link href={`/category/product/${item.id}`}>
                                <div key={item.id} className={style.searchResultItem}
                                    onClick={() => {
                                        setShowSearch(false)
                                    }}>
                                    <div className={style.imgContainer}>
                                        <Image loader={myLoader}
                                            src={item.attributes.Image.data[0].attributes.url}
                                            alt="Picture of the author"
                                            width={600}
                                            height={600} />
                                    </div>
                                    <div className={style.prodDetails}>
                                        <span className={style.name}>{item.attributes.productName}</span>
                                        <span className={style.desc}>{item.attributes.Description}</span>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div >
    )
}

export default Search