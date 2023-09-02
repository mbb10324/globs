import { FaLongArrowAltLeft, FaLongArrowAltRight, FaExpandArrowsAlt, FaPaintBrush } from "react-icons/fa";
import { useFullScreen } from "../Utils/FullScreen";
import { colors } from "../Utils/Vars";
import { useEffect } from "react";
import "./Controls.css";
import { useIsMobile } from "../Utils/MobileView";

export default function Controls({ theme, setTheme }) {
	const fs = useFullScreen();
	const isMobile = useIsMobile();

	const setNextTheme = () => {
		const currentThemeIndex = colors.indexOf(theme);
		if (currentThemeIndex >= 0) {
			const nextIndex = (currentThemeIndex + 1) % colors.length;
			setTheme(colors[nextIndex]);
		}
	};

	const setPrevTheme = () => {
		const currentThemeIndex = colors.indexOf(theme);
		if (currentThemeIndex >= 0) {
			const prevIndex = (currentThemeIndex - 1 + colors.length) % colors.length;
			setTheme(colors[prevIndex]);
		}
	};

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "ArrowLeft") {
				setPrevTheme();
			}
			if (event.key === "ArrowRight") {
				setNextTheme();
			}
		};

		const handleTouchStart = (e) => {
			if (isMobile) {
				console.log("touch detected"); // Debug step 1
				console.log(e.target.classList); // Debug step 2
				// Get the element that was touched
				const touchedElement = e.target;
				if (touchedElement && !touchedElement.closest(".no-touch")) {
					setNextTheme();
				} else {
					e.stopPropagation();
				}
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		if (isMobile) {
			window.addEventListener("touchstart", handleTouchStart);
		}

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			if (isMobile) {
				window.removeEventListener("touchstart", handleTouchStart);
			}
		};
		//eslint-disable-next-line
	}, [theme, isMobile]);

	return (
		<>
			{!fs.isFullScreen && (
				<>
					<div className="fullscreen no-touch">
						<h1>Globs</h1>
						<FaExpandArrowsAlt onClick={fs.toggleFullScreen} />
					</div>
					<div className="invert no-touch">
						<FaLongArrowAltLeft onClick={setPrevTheme} />
						<div className="dontHover">
							<FaPaintBrush />
						</div>
						<FaLongArrowAltRight onClick={setNextTheme} />
					</div>
				</>
			)}
		</>
	);
}
