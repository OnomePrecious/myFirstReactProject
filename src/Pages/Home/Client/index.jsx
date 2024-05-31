import style from "./index.module.css"
import logo0 from "../../../asset/firstLogo.png"
import logo1 from "../../../asset/secondLogo.png"
import logo2 from "../../../asset/thirdLogo.png"
import logo3 from "../../../asset/fourthLogo.png"
import logo4 from "../../../asset/fifthLogo.png"
import logo5 from "../../../asset/sixthLogo.png"
import {members} from "./data";



const Client = () => {
    return (
        <>
            <div className={style.client}>
                <h4>Our Clients</h4>
                <p>We have been working with some Fortune 500+ clients</p>
                <div style={{display:"flex", justifyContent: "space-evenly", width: "100%"}}>
                    <img src={logo0} alt=""/>
                    <img src={logo1} alt=""/>
                    <img src={logo2} alt=""/>
                    <img src={logo3} alt=""/>
                    <img src={logo4} alt=""/>
                    <img src={logo5} alt=""/>
                </div>
            </div>
            <div className={style.member}>
                <p>Manage your entire community in a single system</p>
                <h6>Who is Nextcent suitable for?</h6>
            </div>


            <div className={style.member2}>
                {
                    members.map((value,  index) => (

                        <div key={index}  style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <img src={value.image} alt=""/>
                            <h2>{value.title}</h2>
                                {value.text}
                            <p style={{width:"50%", textAlign: "center"}}>
                            </p>
                        </div>
                    ))}


                </div>
        </>

    )
}
export default Client;

