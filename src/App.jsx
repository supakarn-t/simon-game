import { useState } from "react";
import MainGame from "./component/MainGame";

export default function App() {
	const [message, setMessage] = useState("Level 1");
	const [isStart, setIsStart] = useState(false);

	return (
		<div className="flex flex-col justify-center items-center gap-16 mt-16">
			<h1>{isStart ? message : "Welcome to Simon Game"}</h1>
			{isStart ? (
				<MainGame message={message} setMessage={setMessage} />
			) : (
				<button
					onClick={() => setIsStart(true)}
					className="p-4 rounded-lg bg-white w-1/6 mx-auto mt-4 shadow-[4px_4px_0_0_gray] hover:translate-x-1 hover:translate-y-1 hover:shadow-[0px_0px_0_0_gray]"
				>
					Start Game
				</button>
			)}
		</div>
	);
}
