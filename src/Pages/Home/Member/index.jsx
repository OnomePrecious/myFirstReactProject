import boy from '../../../asset/boy.jpg'
import style from "./index.module.css"



const Member = () =>{
    return(
        <>
            <div className={style.container}>
                <img src={boy} alt=""/>
                <div >
                    <h2>The unseen of spending three years at Pixelgrade</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        <div className={style.buttonContainer}>
                        <button
                            style={{
                                color: "white",
                                background: "#4caf4f",
                                border: "none",
                                borderRadius: "5px",
                                padding: "15px 30px",
                                marginTop: "30px",
                            }}>
                            Learn More
                        </button>
                        </div>


                    </p>
                </div>
            </div>




        </>
    )

}
export default Member;

