import girl from '../../../asset/girl.png'



const Site = () =>{
    return(
        <>
            <img src={girl} alt=""/>
            <div className={"style.container"}>
                <h4>How to design your site footer like we did</h4>
            </div>
            <p>
                Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
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


        </>
    )

}
export default Site;

