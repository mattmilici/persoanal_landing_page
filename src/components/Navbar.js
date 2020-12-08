import React from "react"


function Navbar() {
    return (
        <div className="bg-black text-white">
            <nav className="flex items-center justify-between flex-wrap  p-6">
                <div className="flex items-center flex-shrink-0  mr-6">
                    <span className="font-semibold text-xl tracking-tight">Matt Milici</span>
                </div>
                <div className="block lg:hidden">
                    <button id="dropDownIcon" className="flex items-center px-3 py-2 text-white">
                        <svg
                            className="fill-current h-3 w-3"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <title >Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div id="mobileDropDown" className="hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto inline">
                    <div className="text-sm lg:flex-grow">
                        <div className="lg:flex lg:justify-center lg:w-6/12 lg:m-auto text-lg font-normal">
                            <a href="#about" className="text-right block mt-4 lg:inline-block lg:mt-0 lg:mr-4 hover:text-opacity-50 ">
                                About Me
						</a>
                            <a href="#projects" className="text-right block mt-4 lg:inline-block lg:mt-0 lg:mr-4 hover:text-opacity-50">
                                Projects
						</a>
                            <a href="#articles" className="text-right block mt-4 lg:inline-block lg:mt-0 lg:mr-4 hover:text-opacity-50">
                                Articles
						</a>
                            <a href="#articles" className="text-right block mt-4 lg:inline-block lg:mt-0 lg:mr-4 hover:text-opacity-50">
                                Resume
						</a>
                        </div>
                    </div>
                    <div className="lg:flex lg:justify-end items-center flex-shrink-0 text-lg font-normal">
                        <a href="#contact" className="text-right block mt-4 lg:mr-4 lg:inline-block lg:mt-0 ">
                            Contact Me
                </a>

                    </div>
                </div>

            </nav>
        </div>
    );
}
export default Navbar