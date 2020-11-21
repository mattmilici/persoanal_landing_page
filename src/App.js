import React from "react";
import './index.css';
import ProfilePic from "./images/milici-profile-pic.png"
import AboutMe from "./images/aboutme.png"
import AskD from "./images/askD.png"
import Car from "./images/car.png"
import Dennis1 from "./images/dennis1.jpeg"
import Dennis2 from "./images/dennis2.jpeg"
import Popcorn from "./images/popcorn.png"
import Seeds from "./images/seeds.png"
import Weather from "./images/weather.png"
import Typical from "react-typical"


function App() {
  return (
    <div className="bg-black">
      <div className="bg-black text-white px-4 md:px-20 pb-16">
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
                <a href="about-me" className="text-right block mt-4 lg:inline-block lg:mt-0 lg:mr-4 hover:text-opacity-50 ">
                  About Me
						</a>
                <a href="projects" className="text-right block mt-4 lg:inline-block lg:mt-0 lg:mr-4 hover:text-opacity-50">
                  Projects
						</a>
                <a href="#articles" className="text-right block mt-4 lg:inline-block lg:mt-0 lg:mr-4 hover:text-opacity-50">
                  Articles
						</a>
                <a href="#Resume" className="text-right block mt-4 lg:inline-block lg:mt-0 lg:mr-4 hover:text-opacity-50">
                  Resume
						</a>
              </div>
            </div>
            <div className="lg:flex lg:justify-end items-center flex-shrink-0 text-lg font-normal">
              <a href="#contact-me" className="text-right block mt-4 lg:mr-4 lg:inline-block lg:mt-0 ">
                Contact Me
                </a>

            </div>
          </div>

        </nav>
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
        <p className="text-center m-auto text-4xl font-bold tracking-widest mt-8">. . .</p>
        <div className="text-center md:text-left mt-8 my-3 md:flex md:flex-around md:flex-row-reverse">
          <div className="w-full md:w-5/12 flex content-center">
            <img className="h-64 w-auto md:height-auto m-auto" src={AboutMe} alt="" />
          </div>
          <div id="text-header" className="w-full md:w-7/12 content-center self-center text-white">
            <h1 id="about-me" className="text-4xl font-bold my-3"><i className="fas fa-address-card"></i> About Me</h1>
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




        <p className="text-center m-auto text-4xl font-bold tracking-widest">. . .</p>
        <div>


          <div className="text-center md:text-left mt-8 mt-8 my-3">
            <h1 id="projects" className="text-4xl font-bold"><i className="fab fa-github"></i> Projects</h1>
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
                    <div className="rounded">Happiness tracker that helps identifty key drivers that impact your day!</div>
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
                  <div className="rounded text-2xl font-bold w-3/4 top-0">Weather App</div>
                  <div className="">
                    <div className="rounded">Get your 5 day forecast for any city in the world through the Open Weather API.</div>
                    <div className="mt-4 rounded flex justify-between">
                      <a className="text-blue-400 w-1/2 font-bold" href="https://github.com/mmilici-star/weather-app">Github Repo</a>
                      <a className="text-blue-400 w-1/2 text-right font-bold" href="https://mmilici-star.github.io/weather-app/">Live App</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
          <p className="text-center m-auto text-4xl font-bold tracking-widest mt-8">. . .</p>
          <h1 id="articles" className="text-4xl font-bold mt-12 my-3 text-center md:text-left"><i className="far fa-newspaper"></i> Articles</h1>
          <div className="flex flex-wrap justify-center">
            <a href="https://medium.com/@mattmilici/deploying-a-localhost-server-with-node-js-and-express-js-58775f098407">
              <div className="max-w-xs rounded overflow-hidden shadow-lg border-2 border-white bg-gradient-to-l from-gray-400 via-gray-350 to-gray-300 m-4">
                <img className="w-full border-1 border-white" src={Dennis2} alt="article cover" />
                <div className="px-3 py-2">
                  <div className="text-gray-700 font-bold text-xl mb-2">Deploying A Localhost Server With Node.js and Express.js</div>
                  <p className="text-gray-700 text-base">Step-by-step instructions on how to set up a localhost server using Node and Express.
                        </p>
                </div>
                <div className="px-6 pt-2 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#NodeJS</span>
                  <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#JS</span>
                  <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Web Dev</span>
                </div>
              </div>
            </a>
            <a href="https://medium.com/@mattmilici/get-tailwind-up-running-c454199f72ec">
              <div className="max-w-xs rounded overflow-hidden shadow-lg border-2 border-white bg-gradient-to-l from-gray-400 via-gray-350 to-gray-300 m-4">
                <img className="w-full" src={Dennis1} alt="article cover" />
                <div className="px-3 py-2">
                  <div className="text-gray-700 font-bold text-xl mb-2">Get Tailwind Up & Running</div>
                  <p className="text-gray-700 text-base">
                    Goodybe Bootstrap. Hello Tailwind! Learn how to get started with the Tailwind framework and create custome compoenents.
                        </p>
                </div>
                <div className="px-6 pt-2 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Tailwind</span>
                  <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#CSS</span>
                  <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Web Dev</span>
                </div>
              </div>
            </a>
          </div>
          <p className="text-center m-auto text-4xl font-bold tracking-widest mt-8">. . .</p>
          <h1 id="contact-me" className="text-4xl mt-8 font-bold mt-10 text-center md:text-left mb-3"><i className="fas fa-id-card-alt"></i> Contact Me</h1>
          <form method="post" name="myemailform" action="" className="w-full max-w-4xl mt-3 text m-auto">
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label for="name" className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                  Full Name
        </label>
              </div>
              <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" name="name" type="text" placeholder="Jane Doe" />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label for="email" className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                  Email
        </label>
              </div>
              <div className="md:w-2/3">
                <input name="email" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="email" placeholder="JDoe@gmail.com" />
              </div>
            </div>



            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label for="message" className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                  Description
        </label>
              </div>
              <div className="md:w-2/3">
                <textarea name="message" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Send me a note!" rows="6"></textarea>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" name="submit" type="submit">
                  Send
        </button>
              </div>
            </div>
          </form>


        </div>
      </div>
    </div>
  );
}

export default App;
