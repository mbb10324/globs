import { circleIDs, intervals } from "../Utils/Vars";
import { useEffect } from "react";
import "./LavaLamp.css";

export default function LavaLamp({ theme }) {
	useEffect(() => {
		const intervalIds = [];

		circleIDs.forEach((id, index) => {
			const circle = document.getElementById(id);
			const intervalId = window.setInterval(() => {
				circle.style.left = `calc(${Math.random() * 100}%)`;
				circle.style.top = `calc(${Math.random() * 100}%)`;
			}, intervals[index]);

			intervalIds.push(intervalId);
		});

		return () => {
			intervalIds.forEach((id) => window.clearInterval(id));
		};
		//eslint-disable-next-line
	}, []);

	return (
		<>
			<div className="container">
				<div className={`${theme}1 extraSmallCircle1`} id="extraSmallCircle1"></div>
				<div className={`${theme}2 extraSmallCircle2`} id="extraSmallCircle2"></div>
				<div className={`${theme}1 extraSmallCircle3`} id="extraSmallCircle3"></div>
				<div className={`${theme}2 extraSmallCircle4`} id="extraSmallCircle4"></div>
				<div className={`${theme}1 smallCircle1`} id="smallCircle1"></div>
				<div className={`${theme}2 smallCircle2`} id="smallCircle2"></div>
				<div className={`${theme}1 mediumCircle1`}></div>
				<div className={`${theme}2 mediumCircle2`}></div>
				<div className={`${theme}1 bigCircle`}></div>
			</div>
		</>
	);
}
