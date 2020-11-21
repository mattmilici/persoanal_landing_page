import React from "react"
import Dennis1 from "../images/dennis1.jpeg"
import Dennis2 from "../images/dennis2.jpeg"


function Articles() {
    return (
        <div className="bg-black">
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
        </div>
    );
}
export default Articles