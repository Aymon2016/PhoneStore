import SearchBar from '../../../component/Header/serchBar/SearchBar'
import Cookies from 'js-cookie'
import style from '../../../styles/user/login.module.scss'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Navbar from "../../../component/Header/navbar/Navbar";
import axios from 'axios';
import { useContext } from 'react';
import { Context } from '../../../hooks/context'
import { useRouter } from 'next/router'
import Link from 'next/link'

function Signin() {

    const url = process.env.NEXT_PUBLIC_STRAPI_URL

    const router = useRouter()
    const { setUser } = useContext(Context)



    const [logged, setData] = useState({
        username: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        username: '',
        password: ''
    });

    const checkValidity = (values) => {
        const errors = {};

        const { username, password } = values;

        if (!username) {
            errors.username = 'Invalid username';
        }

        if (!password) {
            errors.password = 'Invalid password';
        }

        return {
            errors,
            isValid: Object.entries(errors).length === 0,
        };
    };

    const addData = (e) => {
        const { name, value } = e.target;
        setData(() => {
            return {
                ...logged,
                [name]: value

            }

        })
    }



    const sendData = async (e) => {
        e.preventDefault();


        const { isValid, errors } = checkValidity(logged);

        if (isValid) {
            setErrors({ ...errors })
        } else {
            setErrors({ ...errors });
        }

        const { username, password } = logged;


        axios
            .post(`${url}/api/auth/local`, {
                identifier: username,
                password: password
            })
            .then(res => {
                let user = res.data.user
                user = JSON.stringify(user)
                Cookies.set('jwt', res.data.jwt, { expires: 1 })
                Cookies.set('user', user)
                setUser(res.data.user)

                toast.success("Login Successfully done 😃!", {
                    position: "top-center"
                });
                router.push('/')
                setData({
                    username: '',
                    password: ''
                })

            })
            .catch(error => {
                // Handle error.
                toast.error("Invalid Details 👎!", {
                    position: "top-center"
                });
                console.log(error)
            })
    }


    return (
        <>
            <SearchBar />
            <Navbar />
            <section className={style.section}>
                <div className={style.signContainer}>

                    <div className={style.signForm}>
                        <form method='post'>
                            <h1> Sign-in</h1>
                            <div className={style.formData}>
                                <label htmlFor='username'>Email</label>
                                <input type='text' placeholder='your username' name='username' id='username' value={logged.username} onChange={addData} />
                                {errors.username && <p>{errors.username}</p>}
                            </div>
                            <div className={style.formData}>
                                <label htmlFor='password'>Password</label>
                                <input type='password' placeholder='at least 8 charackter' name='password' value={logged.password} id='password' onChange={addData} />
                                {errors.password && <p>{errors.password}</p>}
                            </div>
                            <button className={style.signinBtn} onClick={sendData}>Continue</button>

                        </form>
                        <ToastContainer />
                    </div>
                    <div className={style.createAccountinfo}>
                        <p>New to Phone Store?</p>
                        <Link href="/user/register"><button>Create your new Account</button></Link>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Signin