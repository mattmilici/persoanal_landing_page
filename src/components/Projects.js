import React from "react"
import Car from "../images/car.png"
import Popcorn from "../images/popcorn.png"
import Seeds from "../images/seeds.png"
import Weather from "../images/weather.png"

import Title from "./Title"


function Projects() {
    return (
        <div className="bg-black">
            <div>
                <div className="text-center md:text-left mt-8 mt-8 my-3">
                    <Title>Projects</Title>
                    <a className="text-lg font-normal" href="https://github.com/mmilici-star">Github Repo</a>
                </div>

                <div className="flex flex-wrap justify-around">

                    <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto m-2 bg-gradient-to-l from-gray-400 via-gray-350 to-gray-300">
                        <div className="text-black flex space-x-4">
                            <img className="rounded-full border-2 border-white bg-gray-400 h-12 w-12" src={Popcorn} />
                            <div className="flex-1 py-1">
                                <div className="rounded text-2xl font-bold w-3/4 top-0">Buff</div>
                                <div className="">
                                    <div className="rounded">Test your movie knowledge with Buff by playing a computer in the classNameic movie game everyone loves!</div>
                                    <div className="mt-4 rounded flex justify-between">
                                        <a className="text-blue-400 w-1/2 font-bold" href="https://github.com/mmilici-star/movieQuiz">Github Repo</a>
                                        <a className="text-blue-400 w-1/2 text-right font-bold" href="https://mmilici-star.github.io/movieQuiz/dist/index.html">Live App</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto m-2 bg-gradient-to-l from-gray-400 via-gray-350 to-gray-300">
                        <div className="flex space-x-4">
                            <img className="rounded-full border-2 border-white bg-gray-400 h-12 w-12" src={Seeds} />
                            <div className="text-black flex-1 py-1">
                                <div className="rounded text-2xl font-bold w-3/4 top-0">Seeds</div>
                                <div className="">
                                    <div className="rounded">Happiness tracker that helps identifty key drivers that impact your day so you can focus on what matters most in your life!</div>
                                    <div className="mt-4 rounded flex justify-between">
                                        <a className="text-blue-400 w-1/2 font-bold" href="https://github.com/Iansachs1/Seeds">Github Repo</a>
                                        <a className="text-blue-400 w-1/2 text-right font-bold" href="https://hidden-caverns-84141.herokuapp.com/">Live App</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto m-2 bg-gradient-to-l from-gray-400 via-gray-350 to-gray-300">
                        <div className="text-black flex space-x-4">
                            <img className="rounded-full border-2 border-white bg-gray-400 h-12 w-12" src={Car} />
                            <div className="text-black flex-1 py-1">
                                <div className="rounded text-2xl font-bold w-3/4 top-0">Car Inventory Page</div>
                                <div className="">
                                    <div className="rounded">Sample landing page for a car dealership. Modern and dynamic page built with Tailwind</div>
                                    <div className="mt-4 rounded flex justify-between">
                                        <a className="text-blue-400 w-1/2 font-bold" href="https://github.com/mmilici-star/idealMotors">Github Repo</a>
                                        <a className="text-blue-400 w-1/2 text-right font-bold" href="https://mmilici-star.github.io/idealMotors/public/">Live App</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto m-2 bg-gradient-to-l from-gray-400 via-gray-350 to-gray-300">
                        <div className="flex space-x-4">
                            <img className="rounded-full border-2 border-white bg-gray-400 h-12 w-12" src={Weather} />
                            <div className="text-black flex-1 py-1">
                                <div className="rounded text-2xl font-bold w-3/4 top-0">Travel Agent Page</div>
                                <div className="">
                                    <div className="rounded">Custom Vacations by Veronica is a website I built and deployed for a local travel agent kicking off her own business.</div>
                                    <div className="mt-4 rounded flex justify-between">
                                        <a className="text-blue-400 w-1/2 font-bold" href="https://github.com/mmilici-star/weather-app">Github Repo</a>
                                        <a className="text-blue-400 w-1/2 text-right font-bold" href="https://mmilici-star.github.io/weather-app/">Live App</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}
export default Projects