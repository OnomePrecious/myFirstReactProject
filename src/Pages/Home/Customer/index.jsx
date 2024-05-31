import tim from '../../../asset/tim.png'
import logo0 from "../../../asset/firstLogo.png";
import logo1 from "../../../asset/secondLogo.png";
import logo2 from "../../../asset/thirdLogo.png";
import logo3 from "../../../asset/fourthLogo.png";
import logo4 from "../../../asset/fifthLogo.png";
import logo5 from "../../../asset/sixthLogo.png";
import logo7 from "../../../asset/Logo (7).png"
import styles from "./index.module.css"
const Customer = () =>{
    return(
        <>
            <img src={tim}/>
            <div className={styles.mainContainer}>
                <p>
                    Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus
                    tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida
                    enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec
                    molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales.
                    Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
                    sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero
                    condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                </p>
                <h4>Tim Smith</h4>
                <p>British dragon boat racing association</p>
            </div>
            <div className={styles.imageContainer}>
            <img src={logo7} alt=""/>
            <img src={logo0} alt=""/>
            <img src={logo1} alt=""/>
            <img src={logo2} alt=""/>
            <img src={logo3} alt=""/>
            <img src={logo4} alt=""/>
            <img src={logo5} alt=""/>
                <p>Meet all customers -></p>

</div>
        </>
    )
}
export default Customer