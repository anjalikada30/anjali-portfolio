import React from "react"

function TitleComponent({title, span}){
    return(
        <div className="Title">
            <h3>
                {title}
                <span>{span}</span>
            </h3>
        </div>
    )
}

export default TitleComponent