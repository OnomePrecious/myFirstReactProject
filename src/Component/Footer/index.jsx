import insta from '../../asset/insta.png'
import twitter from '../../asset/twitter.png'
import youtube from '../../asset/youtube.png'
import web from '../../asset/web.png'
import send from '../../asset/send.png'
import style from './index.module.css'
import arrow from "../../asset/arrow.jpg"
const Footer = () => {
    return(
        <>
            <footer className={style.footer}>
                <div>
                    <img src={send} alt={""}/>
                    <p>Copyright © 2020 Nexcent ltd. <span style={{display: "block"}}>All rights reserved</span></p>
                    <div className={style.images}>
                        <img src={insta} alt={""}/>
                        <img src={web} alt={""}/>
                        <img src={twitter} alt={""}/>
                        <img src={youtube} alt={""}/>
                    </div>
                </div>
                <div className={style.footerSide}>
                <div>
                        <div><p>Company</p></div>
                        <p>About us</p>
                        <p>Blog</p>
                        <p>Contact us</p>
                        <p>Pricing</p>
                        <p>Testimonials</p>
                    </div>
                    <div>
                        <div><p>Support</p></div>
                        <p>Help center</p>
                        <p>Terms of service</p>
                        <p>Legal</p>
                        <p>Privacy policy</p>
                        <p>Status</p>
                    </div>
                    <div>
                        <p>Stay up to date</p>
                        <label>
                            <input placeholder="Your email address" className={style.input}/>
                            <img src={arrow} className={style.image} alt={""}/>
                        </label>
                    </div>
                </div>

            </footer>
        </>
    )
}
export default Footer;