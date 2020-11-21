import React from "react"
import Typical from "react-typical"
import ProfilePic from "../images/milici-profile-pic.png"

function Header() {
    return (
        <div className="bg-black">
            <div className="md:flex md:flex-around mt-8 ">
                <div id="image" className="w-full md:w-1/2">
                    <img className="w-11/12 md:w-3/4 m-auto border-white border-2 rounded-full" src={ProfilePic} alt="" />
                </div>
                <div className="text-center md:text-left w-full md:w-1/2 content-center self-center text-white">
                    <h1 id="Header-Name" className="mt-8 md:mt-0 text-4xl md:text-6xl font-bold">Matt Milici</h1>
                    <p id="animated Text" className="text-2xl font-bold">
                        I am a <Typical
                            className="text-yellow"
                            loop={Infinity}
                            wrapper="b"
                            steps={[' web developer', 4500,
                                ' designer', 4500,
                                ' creator', 4500]}

                        />
                    </p>
                    <div className="mt-4">
                        <a href="https://www.linkedin.com/in/matt-milici-87b74a111/"><i className="fab fa-linkedin fa-2x mr-4"></i></a>
                        <a href="https://github.com/mmilici-star"><i className="fab fa-github-square fa-2x"></i></a>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header