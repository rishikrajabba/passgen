import React from 'react'
import "./Landing.css"
function Landing(props) {
    function handleclick()
    {
        props.history.push("/generate")
    }
    return (
        <div className="Landing">
            <div className="container">
                <h1 className="landing_heading">
                    PASSGEN
                </h1>
                <p className="landingdes">
                    Lorem ipsum dolor sit amet, consectetur a
                    dipisicing elit. Officiis harum expedita vitae? 
                    Corrupti accusantium, ea nesciunt odio saepe a, 
                    asperiores
                     dicta officia ipsam. Quia quasi exercitationem 
                     aut obcaecati!
                </p>
                <button onClick={handleclick} className="landing_btn">Generate password</button>
            </div>

        </div>
    )
}

export default Landing;