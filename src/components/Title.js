import React from "react"


function Title(props) {
    return (
        <div className="bg-black">
            <h1 id="contact-me" className="text-4xl mt-8 font-bold mt-10 text-center md:text-left mb-3"><i className="fas fa-id-card-alt"></i> {props.children}</h1>
        </div>
    );
}
export default Title