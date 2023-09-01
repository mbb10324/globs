import { useEffect } from "react";

export default function useMobileClicks() {
	useEffect(() => {
		document.querySelectorAll(".fullscreen svg, .invert svg, .notice svg").forEach((svg) => {
			svg.addEventListener("click", function () {
				this.classList.add("bounce");
				setTimeout(() => {
					this.classList.remove("bounce");
				}, 500);
			});
		});
	}, []);
}
