import { useState } from "react";
import MainGame from "./component/MainGame";

export default function App() {
	const [message, setMessage] = useState("Level 1");

	return (
		<div className="flex flex-col justify-center items-center gap-16 mt-16">
			<h1>{message}</h1>
			<MainGame message={message} setMessage={setMessage} />
		</div>
	);
}
