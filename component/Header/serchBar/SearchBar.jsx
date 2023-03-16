import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import style from '../../../styles/header/searchBar.module.scss'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';

import { useState, useEffect } from 'react'
import Search from './serch/serch'
import Cart from '@/component/cart/cart';
import Cookies from 'js-cookie'

import { useContext } from 'react';
import { Context } from '../../../hooks/context'
import Link from 'next/link'
const SearchBar = () => {

    const { user, cartCount, setUser } = useContext(Context)

    const [showCart, setShowCart] = useState(false)
    const [showSearch, setShowSearch] = useState(false)

    const logout = () => {
        Cookies.remove('jwt')
        Cookies.remove('user')
        setUser(null)
    }
    useEffect(() => {
        const userCookie = Cookies.get('user')

        if (userCookie !== undefined) {
            const userCookieObject = JSON.parse(userCookie)
            setUser(userCookieObject)
        }


    }, [])


    return (
        <>
            <header className={style.mainHeader}>
                <div className={style.headerContent}>
                    <div className={style.left}>
                        <Link className={style.link} href="/">Phone Store</Link>
                    </div>
                    <div className={style.formCenter}>
                        <input
                            type="text"
                            autoFocus
                            placeholder='Search for porducts'
                            onClick={() => setShowSearch(true)}
                        />
                        <SearchIcon onClick={() => setShowSearch(true)} />
                    </div>
                    <div className={style.right}>
                        <div className={style.search}>
                            <SearchIcon onClick={() => setShowSearch(true)} />
                        </div>

                        <PersonOutlineIcon />

                        <div className={style.loginbtn}>
                            {user ?

                                <button onClick={logout}>logout</button>
                                :
                                <Link href={`/user/login`}>
                                    <button>logIn</button>
                                </Link>

                            }
                        </div>

                        <Link href="/order">
                            <FavoriteBorderIcon />
                        </Link>
                        <span className={style.cartIcon} onClick={() => setShowCart(true)}>
                            <ShoppingCartCheckoutIcon />
                            <span>{cartCount}</span>
                        </span>
                    </div>
                </div>
            </header>
            {showCart && <Cart setShowCart={setShowCart} />}
            {showSearch && <Search setShowSearch={setShowSearch} />}
        </>
    )
}

export default SearchBar