import style from './index.module.css'
import woman from "../../../asset/woman.png"
import laptop from "../../../asset/laptop.png"
import cofpic from "../../../asset/cofpic.png"
const Marketing = () =>{
    return(
        <>
            <div className={style.mainContainer}>
                <h2>Caring is the new marketing</h2>

            <div className={style.textContainer}>
                <p>The Nexcent blog is the best place to read about the latest membership insights,
                    <br/>trends and more. See who's joining the community, read about how our community
                    <br/> are increasing their membership income and lot's more.</p>
            </div>
            <div className={style.firstContainer}>
                <img src={woman}/>
                <p> Creating Streamlined <br/> Safeguarding Processes with <br/>OneRen </p>
                <button className={style.buttonText}>
                    <p>Readmore -> </p>
                </button>
            </div>
<div className={style.secondContainer}>
                <img src={laptop}/>
                <p> What are your Safeguarding <br/> responsibilities and how can <br/>you manage them?</p>
                <button className={style.buttonText}>
                    <p>Readmore -> </p>
                </button>
</div>
            <div className={style.thirdContainer}>
                    <img src={cofpic}/>
                    <p>Revamping the Membership Model with Triathlon Australia</p>
                    <button>
                        <p>Readmore -> </p>
                    </button>
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
            </div>
        </>
    )
}

export default Marketing;