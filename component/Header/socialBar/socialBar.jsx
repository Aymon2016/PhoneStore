import style from '../../../styles/header/socialBar.module.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


const SocailBar = () => {
    return (
        <div className={style.socialBarSection}>
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
            <div className={style.freeService}>
                <h3>
                    <span>free shipping </span>
                    this week order over - &#x24; 55
                </h3>
            </div>
            <div className={style.dolerSign}>
                <span>
                    <select name="doler" id="">
                        <option value="Eur">Eur  &#x20AC;</option>
                        <option value="USD">USD &#x24;</option>
                    </select>

                    <select name="En" id="">
                        <option value="English">English</option>
                        <option value="Bangla">Bangla</option>
                    </select>
                </span>

            </div>
        </div>
    )
}

export default SocailBar