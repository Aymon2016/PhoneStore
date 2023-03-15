import style from '../../../styles/footer/NewsLetter.module.scss'

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const NewsLetter = () => {
    return (
        <div className={style.newsletterSection}>
            <div className={style.newsletterContent}>
                <span className={style.smallText}>Newsletter</span>
                <span className={style.bigText}>
                    Sign up for latest updates and offers
                </span>
                <div className={style.form}>
                    <input type="text" placeholder="Email address" />
                    <button>Subscribe</button>
                </div>
                <div className={style.text}>
                    Will be used in accordance with your privacy policy
                </div>
                <div className={style.socialIcons}>
                    <div className={style.icon}>
                        <a href="http://www.facebook.com" >
                            <FacebookIcon />
                        </a>
                    </div>
                    <div className={style.icon}>
                        <a href="http://www.twitter.com" >
                            <TwitterIcon />
                        </a>
                    </div>
                    <div className={style.icon}>
                        <a href="http://www.LinkdIn.com" >

                            <LinkedInIcon />
                        </a>
                    </div>
                    <div className={style.icon}>
                        <a href="http://www.Instagram.com" >

                            <InstagramIcon />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter