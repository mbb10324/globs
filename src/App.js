import useVariableHeight from "./Utils/VariableHeight.js";
import LavaLamp from "./Components/LavaLamp.js";
import useMobileClicks from "./Utils/MobileClick.js";
import Controls from "./Components/Controls.js";
import Notice from "./Components/Notice.js";
import { useState } from "react";
import "./App.css";

export default function App() {
	const [theme, setTheme] = useState("default");
	useVariableHeight();
	useMobileClicks();

	return (
		<div className="app">
			<LavaLamp theme={theme} />
			<Controls theme={theme} setTheme={setTheme} />
			<Notice />
		</div>
	);
}
