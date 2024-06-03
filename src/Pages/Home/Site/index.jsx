import girl from '../../../asset/girl.png'
import style from './index.module.css'



const Site = () =>{
    return(
        <>
            <div className={style.mainContainer}>
            <div className={style.imageContainer}>
            <img src={girl} alt=""/>
            </div>

                <div className={"style.container"}>
                    <h2>How to design your site footer like we did</h2>

                    <p>
                        Donec a eros justo. Fusce egestas tristique ultrices.
                        Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu,
                        at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis.
                        In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus.
                        In euismod augue vitae nisi ultricies, non aliquet urna tincidunt.
                        Integer in nisi eget nulla commodo faucibus efficitur quis massa.
                        Praesent felis est, finibus et nisi ac, hendrerit venenatis libero.
                        Donec consectetur faucibus ipsum id gravida.
                    </p>
                    <button
                        style={{
                            color: "white",
                            background: "#4caf4f",
                            border: "none",
                            borderRadius: "5px",
                            padding: "15px 30px"
                        }}>
                        Learn More
                    </button>
                </div>


            </div>
        </>
    )

}
export default Site;

