import mem from "../../../asset/mem.png"
import image3 from "../../../asset/image3.png"
import finger from "../../../asset/finger.png"
import payment from "../../../asset/payment.png"
import style from "./index.module.css"
const Business =() =>{
    return(
        <>
            <div className={style.businessSection}>

                <div className={style.textDiv}>
                    <h1>Helping a local <span style={{color: "#4caf4f", display: "block"}}>business reinvent itself</span></h1>
                    <p>We reached here with our hardwork and dedication</p>
                </div>
                <div className={style.baseContainer}>
                <div className={style.mainContainer}>
                <img src={mem} alt={""}/>
                <h3>2,245,441 <p>Members</p>
                </h3>
            <img src={image3} alt={""}/>
            <h3> 46,328<p>Clubs</p>
            </h3></div>


                <div className={style.halfContainer}>
                        <img src={finger} alt={""}/>
            <h3>828,867<p>Event Bookings</p></h3>

                            <img src={payment} alt={""}/>
                <h3>1,926,436<p>Payments</p></h3>
            </div>
    </div>

            </div>
        </>
    )
}
export default Business;