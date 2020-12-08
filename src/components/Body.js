import React from "react"
import AboutMe from "../images/aboutme.png"
import Title from "./Title"

function Body() {
    return (
        <div id="about" className="bg-black">
            <Title>About Me</Title>
            <div className="text-center md:text-left mt-8 my-3 md:flex md:flex-around md:flex-row-reverse">
                <div className="w-full md:w-5/12 flex content-center">
                    <img className="h-64 w-auto md:height-auto m-auto" src={AboutMe} alt="" />
                </div>
                <div id="text-header" className="w-full md:w-7/12 content-center self-center text-white">
                    <div className="text-left mr-3 text-lg leading-normal md:text-loose">
                        <p className="mb-2">Hey, What's up!</p>
                        <p className="mb-2">My name is Matt Milici and welcome to my personal site!</p>
                        <p className="mb-2">
                            Currently, I am a Financial Analyst for a telecommunications company based out of San Diego. I graduated from Penn State in 2018 with a degree in Finance and Minor in Information Science and Technology. I recently started a 6 month Web Development bootcamp
                            and will be using this site to showcase my work as well as sharpen my skills!
                </p>
                    </div>
                    <div className="mt-4">
                        <a className="bg-gradient-to-l from-orange-400 via-red-500 to-pink-500 rounded-full p-2" href="./images/Matthew_B_Milici_Resume.pdf" download>Download Resume</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Body