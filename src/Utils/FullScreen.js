import { useEffect, useState } from "react";

export const useFullScreen = () => {
	const [isFullScreen, setIsFullScreen] = useState(false);

	useEffect(() => {
		const updateFullScreenStatus = () => {
			setIsFullScreen(
				!!(
					document.fullscreenElement ||
					document.webkitFullscreenElement ||
					document.mozFullScreenElement ||
					document.msFullscreenElement
				)
			);
		};

		document.addEventListener("fullscreenchange", updateFullScreenStatus);
		document.addEventListener("webkitfullscreenchange", updateFullScreenStatus);
		document.addEventListener("mozfullscreenchange", updateFullScreenStatus);
		document.addEventListener("MSFullscreenChange", updateFullScreenStatus);

		return () => {
			document.removeEventListener("fullscreenchange", updateFullScreenStatus);
			document.removeEventListener("webkitfullscreenchange", updateFullScreenStatus);
			document.removeEventListener("mozfullscreenchange", updateFullScreenStatus);
			document.removeEventListener("MSFullscreenChange", updateFullScreenStatus);
		};
	}, []);

	const toggleFullScreen = () => {
		if (
			document.fullscreenElement ||
			document.webkitFullscreenElement ||
			document.mozFullScreenElement ||
			document.msFullscreenElement
		) {
			// Exit fullscreen mode
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			}
		} else {
			// Enter fullscreen mode
			const docElm = document.documentElement;
			if (docElm.requestFullscreen) {
				docElm.requestFullscreen();
			} else if (docElm.mozRequestFullScreen) {
				docElm.mozRequestFullScreen();
			} else if (docElm.webkitRequestFullScreen) {
				docElm.webkitRequestFullScreen();
			} else if (docElm.msRequestFullscreen) {
				docElm.msRequestFullscreen();
			}
		}
	};

	return {
		isFullScreen,
		toggleFullScreen,
	};
};
