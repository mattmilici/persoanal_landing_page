import React from "react";
import Title from "./Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faNodeJs,
	faReact,
	faJsSquare,
	faCss3Alt,
	faPython,
} from "@fortawesome/free-brands-svg-icons";

import { faDatabase, faPaintRoller } from "@fortawesome/free-solid-svg-icons";

function Skills() {
	return (
		<div id="" className="bg-black m-auto mx-16">
			<div>
				<Title>Technical Skills</Title>
				<ul class="mt-3 flex justify-center flex-wrap ">
					<li class="mx-5 my-3 flex shadow-sm rounded-md text-center">
						<div class="flex-shrink-0 flex items-center text-center justify-center w-16 bg-blue-600 text-white text-sm font-medium rounded-l-md p-2">
							<FontAwesomeIcon icon={faReact} size="3x" />
						</div>
						<div class="border-gray-200 bg-white rounded-r-md w-32 px-10 flex justify-center items-center text-lg text-gray-900 font-medium hover:text-gray-600">
							React
						</div>
					</li>
					<li class="mx-5 my-3 flex shadow-sm rounded-md text-center">
						<div class="flex-shrink-0 flex items-center text-center justify-center w-16 bg-blue-600 text-white text-sm font-medium rounded-l-md p-2">
							<FontAwesomeIcon icon={faNodeJs} size="3x" />
						</div>
						<div class="border-gray-200 bg-white rounded-r-md text-center w-32 px-10 flex justify-center items-center text-lg text-gray-900 font-medium hover:text-gray-600">
							Node
						</div>
					</li>
					<li class="mx-5 my-3 flex shadow-sm rounded-md text-center">
						<div class="flex-shrink-0 flex items-center text-center justify-center w-16 bg-blue-600 text-white text-sm font-medium rounded-l-md p-2">
							<FontAwesomeIcon icon={faJsSquare} size="3x" />
						</div>
						<div class="border-gray-200 bg-white rounded-r-md w-32 px-10 flex justify-center items-center text-lg text-gray-900 font-medium hover:text-gray-600">
							Javascript
						</div>
					</li>
					<li class="mx-5 my-3 flex shadow-sm rounded-md text-center">
						<div class="flex-shrink-0 flex items-center text-center justify-center w-16 bg-blue-600 text-white text-sm font-medium rounded-l-md p-2">
							<FontAwesomeIcon icon={faCss3Alt} size="3x" />
						</div>
						<div class="border-gray-200 bg-white rounded-r-md text-center  w-32 px-10 flex justify-center items-center text-lg text-gray-900 font-medium hover:text-gray-600">
							CSS
						</div>
					</li>
					<li class="mx-5 my-3 flex shadow-sm rounded-md text-center">
						<div class="flex-shrink-0 flex items-center text-center justify-center w-16 bg-blue-600 text-white text-sm font-medium rounded-l-md p-2">
							<FontAwesomeIcon icon={faDatabase} size="3x" />
						</div>
						<div class="border-gray-200 bg-white rounded-r-md text-center  w-32 px-10 flex justify-center items-center text-lg text-gray-900 font-medium hover:text-gray-600">
							MySQL
						</div>
					</li>
					<li class="mx-5 my-3 flex shadow-sm rounded-md text-center">
						<div class="flex-shrink-0 flex items-center text-center justify-center w-16 bg-blue-600 text-white text-sm font-medium rounded-l-md p-2">
							<FontAwesomeIcon icon={faDatabase} size="3x" />
						</div>
						<div class="border-gray-200 bg-white rounded-r-md text-center  w-32 px-10 flex justify-center items-center text-lg text-gray-900 font-medium hover:text-gray-600">
							MongoDB
						</div>
					</li>
					<li class="mx-5 my-3 flex shadow-sm rounded-md text-center">
						<div class="flex-shrink-0 flex items-center text-center justify-center w-16 bg-blue-600 text-white text-sm font-medium rounded-l-md p-2">
							<FontAwesomeIcon icon={faPaintRoller} size="3x" />
						</div>
						<div class="border-gray-200 bg-white rounded-r-md text-center  w-32 px-10 flex justify-center items-center text-lg text-gray-900 font-medium hover:text-gray-600">
							Tailwind
						</div>
					</li>
					<li class="mx-5 my-3 flex shadow-sm rounded-md text-center">
						<div class="flex-shrink-0 flex items-center text-center justify-center w-16 bg-blue-600 text-white text-sm font-medium rounded-l-md p-2">
							<FontAwesomeIcon icon={faPython} size="3x" />
						</div>
						<div class="border-gray-200 bg-white rounded-r-md text-center  w-32 px-10 flex justify-center items-center text-lg text-gray-900 font-medium hover:text-gray-600">
							Python
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Skills;
