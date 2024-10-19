import "./styles/App.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
	useGSAP(() => {
		ScrollTrigger.create({
			trigger: ".App",
			start: "start start",
			end: "+=100%",
			pin: ".home",
			pinSpacing: false,
		});

		gsap.to(".works", {
			scale: 1,
			scrollTrigger: {
				trigger: ".works",
				start: "start center",
				end: "end start",
				scrub: true,
			},
		});
	});

	return (
		<div className="container">
			<div className="App">
				<div className="home">
					<div className="main">
						<div className="title">
							<h1 className="heading">Prgmaz</h1>
							<h1 className="heading">Studio</h1>
						</div>
						<div className="arrow">
							<svg id="eat6GYvfNiX1" viewBox="0 0 1000 1000">
								<path
									d="M200.872798,122.043256l259.429941.433216L628.50139,416.70822L357.237521,883.481109l-259.920489-.000001L369.345758,412.623077L200.872798,122.043256Z"
									transform="translate(.000001 0.000002)"
									stroke-width="2"
								/>
								<path
									d="M513.743263,122.476474l254.997321-.433216L936.699562,416.708222L768.740584,705.108719h-254.997321L682.833506,416.708222L513.743263,122.476474Z"
									transform="translate(.000004 0)"
									stroke-width="2"
								/>
							</svg>
						</div>
					</div>
					<div className="divider"></div>
					<div className="slogan">
						<div className="">
							Your digital presence, beautifully
						</div>
						<div className="">designed and expertly built.</div>
					</div>
				</div>
			</div>
			<div className="works">
				<div className="portfolio-header">
					<div className="header-part">
						<div className="header-text">Portfolio</div>
						<div className="header-text">
							See All Projects &rarr;
						</div>
					</div>
					<div className="divider"></div>
					<h1 className="our-works-heading">Selected works</h1>
					<div className="our-works">
						<div className="work">
							<span>1.</span>
							<span>First Project</span>
							<span>+</span>
						</div>
						<div className="work">
							<span>2.</span>
							<span>Second Project</span>
							<span>+</span>
						</div>
						<div className="work">
							<span>3.</span>
							<span>Third Project</span>
							<span>+</span>
						</div>
						<div className="work">
							<span>4.</span>
							<span>Fourth Project</span>
							<span>+</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
