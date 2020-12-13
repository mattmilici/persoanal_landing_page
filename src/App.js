import React from "react";
import "./index.css";

import Divider from "./components/Divider";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Articles2 from "./components/Articles2";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="bg-black overflow-x overflow-y">
			<div className="bg-black text-white px-4 md:px-20 pb-16">
				<Navbar />
				<Header />
				<Divider />
				<Body />
				<Divider />
				<Skills />
				<Divider />
				<Projects />
				<Divider />
				<Articles2 />
				<Divider />
				<Contact />
				<Footer />
			</div>
		</div>
	);
}

export default App;
