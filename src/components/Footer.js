import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
	return (
		<div id="" className="bg-black mt-48">
			<footer class="bg-black">
				<div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
					<nav
						class="-mx-5 -my-2 flex flex-wrap justify-center"
						aria-label="Footer"
					>
						<div class="px-5 py-2">
							<a
								href="#about"
								class="text-base text-gray-500 hover:text-gray-900"
							>
								About Me
							</a>
						</div>
						<div class="px-5 py-2">
							<a
								href="#projects"
								class="text-base text-gray-500 hover:text-gray-900"
							>
								Projects
							</a>
						</div>
						<div class="px-5 py-2">
							<a
								href="#articles"
								class="text-base text-gray-500 hover:text-gray-900"
							>
								Articles
							</a>
						</div>
						<div class="px-5 py-2">
							<a
								href="#about"
								class="text-base text-gray-500 hover:text-gray-900"
							>
								Resume
							</a>
						</div>
					</nav>
					<div class="mt-2 flex justify-center space-x-6">
						<div className="mt-2">
							<a
								target="_blank"
								className="m-2"
								href="https://www.linkedin.com/in/matt-milici-87b74a111/"
							>
								<FontAwesomeIcon icon={faLinkedinIn} size="1x" />
							</a>
							<a
								target="_blank"
								className="m-2"
								href="https://github.com/mattmilici"
							>
								<FontAwesomeIcon icon={faGithub} size="1x" />
							</a>
						</div>
					</div>
					<p class="mt-4 text-center text-base text-gray-400">
						&copy; 2020 Matt Milici, Inc. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}
export default Footer;
