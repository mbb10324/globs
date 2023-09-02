import { FaCheck } from "react-icons/fa";
import { useState } from "react";
import "./Notice.css";

export default function Notice() {
	const [seeNotice, setSeeNotice] = useState(true);

	function closeNotice() {
		setSeeNotice(false);
	}

	return (
		<>
			{seeNotice && (
				<div className="notice no-touch">
					<h1>Heads up!</h1>
					<p>
						You can click the buttons above, use the arrow keys on desktop, or tap the screen on mobile to
						change the color of the lava lamp. This site's lava lamp magic is resource-intensive and may not
						perform optimally on older hardware or low-powered devices. Please proceed with this in mind.
					</p>
					<FaCheck onClick={closeNotice} />
				</div>
			)}
		</>
	);
}
