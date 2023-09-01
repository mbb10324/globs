import { useEffect } from "react";

export default function useVariableHeight() {
	//use it with 'calc(80 * var(--vh));' replacing 'vh' in the css
	useEffect(() => {
		//adjust for mobile varibale height
		const setVh = () => {
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty("--vh", `${vh}px`);
		};
		setVh();
		window.addEventListener("resize", setVh);

		return () => {
			window.removeEventListener("resize", setVh);
		};
	}, []);
}
