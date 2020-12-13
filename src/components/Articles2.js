import React from "react";
import Title from "./Title";
import Dennis1 from "../images/dennis1.jpeg";
import Dennis2 from "../images/dennis2.jpeg";
import Dennis3 from "../images/dennis3.jpeg";

function Articles2() {
	return (
		<div id="articles" classNameName="bg-black">
			<div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-6 lg:pb-6 lg:px-8">
				<div class="absolute inset-0">
					<div class="bg-white h-1/3 sm:h-2/3"></div>
				</div>
				<Title>Articles</Title>
				<div class="relative max-w-7xl mx-auto">
					<div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none ">
						<div className="flex flex-col rounded-lg shadow-lg overflow-hidden border-white border-1">
							<div className="flex-shrink-0">
								<img
									className="h-48 w-full object-cover"
									src={Dennis1}
									alt="article cover"
								/>
							</div>
							<div className="flex-1 bg-gradient-to-l from-gray-400 via-gray-350 to-gray-300 p-6 flex flex-col justify-between">
								<div className="flex-1">
									<p className="text-sm font-medium text-indigo-600">
										<a href="#" className="hover:underline">
											{" "}
											Article
										</a>
									</p>
									<a href="#" className="block mt-2">
										<p className="text-xl font-semibold text-gray-900">
											{" "}
											Get Up & Running with Tailwind and Node.JS{" "}
										</p>
										<p className="mt-3 text-base text-gray-500">
											{" "}
											Goodybe Bootstrap. Hello Tailwind! Learn how to get
											started with the Tailwind framework and create custome
											compoenents.
										</p>
									</a>
								</div>
								<div className="mt-6 flex items-center">
									<div className="flex-shrink-0"></div>
									<div className="ml-3">
										<p className="text-sm font-medium text-gray-900">
											<a href="#" className="hover:underline">
												{" "}
												Matt Milici
											</a>
										</p>
										<div className="flex space-x-1 text-sm text-gray-500">
											<time datetime="2020-03-16"> Aug 23, 2020</time>
											<span aria-hidden="true"> &middot; </span>
											<span>3 min read </span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="flex flex-col rounded-lg shadow-lg overflow-hidden border-white border-1">
							<div class="flex-shrink-0">
								<img class="h-48 w-full object-cover" src={Dennis2} alt="" />
							</div>
							<div className="flex-1 bg-gradient-to-l from-gray-400 via-gray-350 to-gray-300 p-6 flex flex-col justify-between">
								<div className="flex-1">
									<p className="text-sm font-medium text-indigo-600">
										<a
											href="https://medium.com/@mattmilici/deploying-a-localhost-server-with-node-js-and-express-js-58775f098407"
											className="hover:underline"
										>
											Article
										</a>
									</p>
									<a href="#" className="block mt-2">
										<p className="text-xl font-semibold text-gray-900">
											{" "}
											Deploying A Localhost Server With Node.js and Express.js{" "}
										</p>
										<p className="mt-3 text-base text-gray-500">
											{" "}
											Step-by-step instructions on how to set up a localhost
											server using Node and Express.
										</p>
									</a>
								</div>
								<div className="mt-6 flex items-center">
									<div className="flex-shrink-0"></div>
									<div className="ml-3">
										<p className="text-sm font-medium text-gray-900">
											<a href="#" className="hover:underline">
												Matt Milici
											</a>
										</p>
										<div className="flex space-x-1 text-sm text-gray-500">
											<time datetime="2020-03-16">Jun 9, 2020</time>
											<span aria-hidden="true"> &middot; </span>
											<span> 4 min read </span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="flex flex-col rounded-lg shadow-lg overflow-hidden border-white border-1">
							<div class="flex-shrink-0">
								<img class="h-48 w-full object-cover" src={Dennis3} alt="" />
							</div>
							<div className="flex-1  bg-gradient-to-l from-gray-400 via-gray-350 to-gray-300 p-6 flex flex-col justify-between">
								<div className="flex-1">
									<p className="text-sm font-medium text-indigo-600">
										<a
											href="https://mattmilici.medium.com/connect-a-custom-godaddy-domain-to-your-netlify-site-758eca252cc3"
											className="hover:underline"
										>
											Article
										</a>
									</p>
									<a href="#" className="block mt-2">
										<p className="text-xl font-semibold text-gray-900">
											{" "}
											Connect a Custom GoDaddy Domain to your Netlify Site{" "}
										</p>
										<p className="mt-3 text-base text-gray-500">
											{" "}
											Let's get that custom Domain set up with Netlify!
										</p>
									</a>
								</div>
								<div className="mt-6 flex items-center">
									<div className="flex-shrink-0"></div>
									<div className="ml-3">
										<p className="text-sm font-medium text-gray-900">
											<a href="#" className="hover:underline">
												Matt Milici
											</a>
										</p>
										<div className="flex space-x-1 text-sm text-gray-500">
											<time datetime="2020-03-16">Dec 13, 2020</time>
											<span aria-hidden="true"> &middot; </span>
											<span> 3 min read </span>
										</div>
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

export default Articles2;
