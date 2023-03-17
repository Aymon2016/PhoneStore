
import style from '../../../styles/user/register.module.scss'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Navbar from '../../../component/Header/navbar/Navbar';
import Link from 'next/link'
import { useRouter } from 'next/router'

function Signup() {

    const url = process.env.NEXT_PUBLIC_STRAPI_URL
    const router = useRouter()

    const init = {
        username: '',
        email: '',
        mobile: '',
        password: '',
        cpassword: ''

    }

    const checkValidity = (values) => {
        const errors = {};

        const { username, email, mobile, password, cpassword } = values;

        if (!username) {
            errors.username = 'Invalid username';
        }
        if (!email) {
            errors.email = 'Invalid email';
        }
        if (!mobile) {
            errors.mobile = 'Invalid mobile';
        }
        if (!password) {
            errors.password = 'Invalid password';
        }
        if (password !== cpassword) {
            errors.cpassword = 'password did not match'
        }

        return {
            errors,
            isValid: Object.entries(errors).length === 0,
        };
    };
    const [logged, setData] = useState({ ...init })

    const [errors, setErrors] = useState({ ...init });

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


        const { username, email, mobile, password } = logged;

        const res = await fetch(`${url}/api/auth/local/register`, {

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username, email, mobile, password
            })

        });

        const data = await res.json()


        if (res.status !== 200 || !data) {
            toast.error("not signup 👎!", {
                position: "top-center"
            });

        } else {
            setData({
                ...logged, username: "", email: "",
                mobile: "", password: "", cpassword: ""
            });
            toast.success("Registration Successfully done 😃!", {
                position: "top-center"
            });
            router.push('/')
        }

    }

    return (
        <>
            <Navbar />
            <section className={style.signupSection}>
                <div className={style.signContainer}>

                    <div className={style.signForm}>
                        <form method='post'>
                            <h1>Create account</h1>
                            <div className={style.formData}>
                                <label htmlFor='username'>Your name</label>
                                <input type='text' placeholder='Your name' name='username' value={logged.username} onChange={addData} id='username' />
                                {errors.username && <p>{errors.username}</p>}
                            </div>
                            <div className={style.formData}>
                                <label htmlFor='email'>email</label>
                                <input type='text' placeholder='email' name='email' value={logged.email} onChange={addData} id='email' />
                                {errors.email && <p>{errors.email}</p>}
                            </div>
                            <div className={style.formData}>
                                <label htmlFor='mobile'>mobile</label>
                                <input type='text' placeholder='mobile' name='mobile' value={logged.mobile} onChange={addData} id='mobile' />
                                {errors.mobile && <p>{errors.mobile}</p>}
                            </div>
                            <div className={style.formData}>
                                <label htmlFor='password'>Password</label>
                                <input type='password' placeholder='at least 8 charackter' name='password' value={logged.password} onChange={addData} id='password' />
                                {errors.password && <p>{errors.password}</p>}
                            </div>
                            <div className={style.formData}>
                                <label htmlFor='cpassword'>Re-Enter Password</label>
                                <input type='password' placeholder='at least 8 charackter' name='cpassword' value={logged.cpassword} onChange={addData} id='cpassword' />
                                {errors.cpassword && <p>{errors.cpassword}</p>}
                            </div>

                            <button className={style.signinBtn} onClick={sendData}>Continue</button>
                        </form>

                    </div>
                    <div className={style.createAccountinfo}>
                        <p>Already have an account? <Link href="/user/login"><button>Sign In</button></Link></p>

                    </div>
                    <ToastContainer />
                </div>
            </section>
        </>
    )
}

export default Signup