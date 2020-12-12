import React from "react";
import Typical from "react-typical";
import ProfilePic from "../images/milici-profile-pic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

function Header() {
	return (
		<div className="bg-black">
			<div className="md:flex md:flex-around mt-8 ">
				<div id="image" className="w-full md:w-1/2">
					<img
						className="w-11/12 md:w-3/4 m-auto border-white border-2 rounded-full"
						src={ProfilePic}
						alt=""
					/>
				</div>
				<div className="text-center md:text-left w-full md:w-1/2 content-center self-center text-white">
					<h1
						id="Header-Name"
						className="mt-8 md:mt-0 text-4xl md:text-6xl font-bold"
					>
						Matt Milici
					</h1>
					<p id="animated Text" className="text-2xl font-bold">
						I am a{" "}
						<Typical
							className="text-yellow"
							loop={Infinity}
							wrapper="b"
							steps={[
								" web developer",
								4500,
								" designer",
								4500,
								" creator",
								4500,
							]}
						/>
					</p>
					<div className="mt-4">
						<a
							className="m-3"
							href="https://www.linkedin.com/in/matt-milici-87b74a111/"
						>
							<FontAwesomeIcon icon={faLinkedinIn} size="3x" />
						</a>
						<a className="m-3" href="https://github.com/mattmilici">
							<FontAwesomeIcon icon={faGithub} size="3x" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Header;
