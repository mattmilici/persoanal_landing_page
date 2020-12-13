import React from "react";
import AboutMe from "../images/aboutme.png";
import Title from "./Title";

function Body() {
	return (
		<div id="about" className="bg-black">
			<Title>About Me</Title>
			<div className="text-center md:text-left mt-8 my-3 md:flex md:flex-around md:flex-row-reverse">
				<div className="w-full md:w-5/12 flex content-center">
					<img
						className="h-64 w-auto md:height-auto m-auto"
						src={AboutMe}
						alt=""
					/>
				</div>
				<div
					id="text-header"
					className="w-full md:w-7/12 content-center self-center text-white"
				>
					<div className="text-left mr-3 text-lg leading-normal md:text-loose">
						<p className="mb-3">Hey, What's up!</p>
						<p className="mb-3">
							My name is Matt Milici and welcome to my personal site!
						</p>
						<p className="mb-3">
							As you might have already read, I'm a developer, designer and
							creator. This website was made to showcase all of what I can do.
						</p>
						<p className="mb-3">
							I enjoy going beyond the basic core curriculum and have already
							developed several websites. I am looking for a challenging,
							creative environment at which I can be an integral part of a
							forward thinking team.
						</p>
					</div>
					<div className="animate-bounce mt-10">
						<a
							className="animate-bounce bg-gradient-to-l from-blue-400 via-bleu-500 to-blue-500 rounded-full p-2"
							href="./images/Matthew_B_Milici_Resume.pdf"
							download
						>
							Download Resume
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Body;
