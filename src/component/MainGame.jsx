import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import RestartBtn from "./RestartBtn";

export default function MainGame({ message, setMessage }) {
	const [level, setLevel] = useState(2);
	const [isBlink, setIsBlink] = useState(false);
	const [num, setNum] = useState(null);
	const [arr, setArr] = useState([]);
	const [userArr, setUserArr] = useState([]);

	function randomNum() {
		let newNum = Math.floor(Math.random() * 4) + 1;
		setNum(newNum);
		setArr((prev) => [...prev, newNum]);
		setUserArr([]);
	}

	function handleClick(e) {
		const { value } = e.target;
		setUserArr((prev) => [...prev, Number(value)]);

		console.log(arr);
		console.log(userArr);
	}

	useEffect(() => {
		randomNum();

		setIsBlink(true);
		setTimeout(() => {
			setIsBlink(false);
		}, 1000);
	}, []);

	useEffect(() => {
		for (let i = 0; i < userArr.length; i++) {
			if (arr[i] !== userArr[i]) {
				setMessage("game over");
				return;
			}
		}

		if (arr.length === userArr.length && userArr.length !== 0) {
			randomNum();

			setIsBlink(true);
			setTimeout(() => {
				setIsBlink(false);
			}, 500);

			setMessage("Level " + level);
			setLevel((prev) => prev + 1);
		}
	}, [userArr]);

	return (
		<main className="grid grid-cols-2 gap-8 w-1/4">
			<button
				value={1}
				className={`py-16 rounded-lg hover:shadow-md ${
					message === "game over" ? "" : "active:bg-green-500"
				} ${
					num === 1 && isBlink
						? "bg-green-100 shadow-[0_0_50px_5px_rgb(34,197,94)]"
						: "bg-green-200"
				}`}
				disabled={message === "game over" ? true : false}
				onClick={handleClick}
			></button>
			<button
				value={2}
				className={`py-16 rounded-lg hover:shadow-md ${
					message === "game over" ? "" : "active:bg-red-500"
				} ${
					num === 2 && isBlink
						? "bg-red-100 shadow-[0_0_50px_5px_rgb(239,68,68)]"
						: "bg-red-200"
				}`}
				disabled={message === "game over" ? true : false}
				onClick={handleClick}
			></button>
			<button
				value={3}
				className={`py-16 rounded-lg hover:shadow-md ${
					message === "game over" ? "" : "active:bg-yellow-500"
				} ${
					num === 3 && isBlink
						? "bg-yellow-100 shadow-[0_0_50px_5px_rgb(234,179,8)]"
						: "bg-yellow-200"
				}`}
				disabled={message === "game over" ? true : false}
				onClick={handleClick}
			></button>
			<button
				value={4}
				className={`py-16 rounded-lg ${
					message === "game over" ? "" : "active:bg-sky-500"
				} ${
					num === 4 && isBlink
						? "bg-sky-100 shadow-[0_0_50px_5px_rgb(14,165,233)]"
						: "bg-sky-200"
				}`}
				disabled={message === "game over" ? true : false}
				onClick={handleClick}
			></button>
			<RestartBtn message={message} />
		</main>
	);
}

MainGame.propTypes = {
	message: PropTypes.string,
	setMessage: PropTypes.func,
	isBlink: PropTypes.bool,
	handleClick: PropTypes.func,
};
