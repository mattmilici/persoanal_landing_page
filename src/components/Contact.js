import React, { useState } from "react";
import Title from "./Title";

function Contact() {
	const [State, setState] = useState({ name: "", email: "", message: "" });

	function encode(data) {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
			)
			.join("&");
	}

	function handleChange(e) {
		setState({ [e.target.name]: e.target.value });
		console.log(State);
	}

	function handleSubmit(e) {
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", ...State }),
		})
			.then(() => alert("Success!"))
			.catch((error) => alert(error));

		e.preventDefault();
	}

	return (
		<div id="contact" className="bg-blackm-auto">
			<Title>Contact Me</Title>
			<h1 className="text-center">milici.m915@gmail.com</h1>
			<form
				onSubmit={handleSubmit}
				name="myemailform"
				className="w-full max-w-4xl mt-3 text-center m-auto"
			>
				<div className="">
					<label
						for="name"
						className="block text-gray-500 font-bold text-left mb-1 mb-2 pr-4"
						for="inline-full-name"
					>
						Full Name
					</label>
				</div>
				<div className="md:flex md:items-center mb-6">
					<div className="md:w-full">
						<input
							className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
							id="inline-full-name"
							value={State.name}
							name="name"
							onChange={handleChange}
							type="text"
							placeholder="Jane Doe"
						/>
					</div>
				</div>
				<div className="md:w-1/3">
					<label
						for="email"
						className="block text-gray-500 font-bold text-left mb-1 mb-2 pr-4"
						for="inline-full-name"
					>
						Email
					</label>
				</div>
				<div className="md:flex md:items-center mb-6">
					<div className="md:w-full">
						<input
							name="email"
							className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
							id="inline-full-name"
							type="email"
							value={State.email}
							onChange={handleChange}
							placeholder="JDoe@gmail.com"
						/>
					</div>
				</div>
				<label
					for="message"
					className="block text-gray-500 font-bold text-left mb-1 pr-4 mb-2"
					for="inline-full-name"
				>
					Description
				</label>
				<div className="md:flex md:items-center mb-6">
					<div className="md:w-full">
						<textarea
							name="message"
							type="text"
							className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
							placeholder="Send me a note!"
							value={State.message}
							onChange={handleChange}
							rows="6"
						></textarea>
					</div>
				</div>
				<div className="flex justify-center items-center">
					<button
						className="shadow bg-blue-600 hover:bg-blue-200 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded text-center"
						name="submit"
						type="submit"
					>
						Send
					</button>
				</div>
			</form>
		</div>
	);
}
export default Contact;
