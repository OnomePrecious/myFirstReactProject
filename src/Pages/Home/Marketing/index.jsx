import style from './index.module.css'
import {market} from "./data";
const Marketing = () =>{
    return(
        <>
            <div className={style.mainContainer}>
                <h2 style={{textAlign: "center",}}>Caring is the new marketing</h2>
                <p style={{textAlign: "center"}}>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community,
                    read about how our community are increasing their membership income and lot's more.</p>
            </div>
            <div className={style.imageContainer}>
                {
                    market.map((value, index) => (

                        <div key={index} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <img src={value.image} alt=""/>

                            <p style={{width: "50%", textAlign: "center", fontSize: "25px", marginTop: "-30px", position: "relative", borderRadius: "5px", backgroundColor: "#fff"}}>
                                {value.text}


                            </p>
                        </div>
                    ))}


            </div>

            <div className={style.buttonContainer}>
                <button
                    style={{
                        color: "white",
                        background: "#4caf4f",
                        border: "none",
                        borderRadius: "5px",
                        padding: "15px 30px"
                    }}>
                    Get a demo ->
                </button>
            </div>
        </>
    )
}

export default Marketing;