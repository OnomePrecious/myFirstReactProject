import mem from "../../../asset/mem.png"
import image3 from "../../../asset/clubs.png"
import finger from "../../../asset/eve.png"
import payment from "../../../asset/payment.png"
import style from "./index.module.css"
const Business =() =>{
    return(
        <>
            <div className={style.businessSection}>

                <div>
                    <h1>Helping a local <span style={{color: "#4caf4f", display: "block"}}>business reinvent itself</span></h1>
                    <p>We reached here with our hardwork and dedication</p>
                </div>
<div className={"mainContainer"}>
                <img src={mem}/>
    <h3>2,245,441</h3>
    <p>Members</p>

                    <img src={image3}/>
    <h3> 46,328</h3>
    <p>Clubs</p>
                        <img src={finger}/>
    <h3>828,867</h3>
    <p>Event Bookinbgs</p>
                            <img src={payment}/>
            </div>
            </div>
        </>
    )
}
export default Business;