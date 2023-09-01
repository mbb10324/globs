import { FaLongArrowAltLeft, FaLongArrowAltRight, FaExpandArrowsAlt, FaPaintBrush } from "react-icons/fa";
import { useFullScreen } from "../Utils/FullScreen";
import { colors } from "../Utils/Vars";
import { useEffect } from "react";
import "./Controls.css";

export default function Controls({ theme, setTheme }) {
	const fs = useFullScreen();

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
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
		//eslint-disable-next-line
	}, [theme]);

	return (
		<>
			{!fs.isFullScreen && (
				<>
					<div className="fullscreen">
						<h1>Globs</h1>
						<FaExpandArrowsAlt onClick={fs.toggleFullScreen} />
					</div>
					<div className="invert">
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
