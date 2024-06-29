import PropTypes from "prop-types";
import { useEffect, useState } from "react";

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
		<main className="grid grid-cols-2 gap-4 w-1/4">
			<button
				value={1}
				className={`p-4 rounded-lg hover:shadow-md ${
					message === "game over" ? "" : "active:bg-sky-500"
				} ${num === 1 && isBlink ? "bg-red-200" : "bg-sky-200"}`}
				disabled={message === "game over" ? true : false}
				onClick={handleClick}
			>
				1
			</button>
			<button
				value={2}
				className={`p-4 rounded-lg hover:shadow-md ${
					message === "game over" ? "" : "active:bg-sky-500"
				} ${num === 2 && isBlink ? "bg-red-200" : "bg-sky-200"}`}
				disabled={message === "game over" ? true : false}
				onClick={handleClick}
			>
				2
			</button>
			<button
				value={3}
				className={`p-4 rounded-lg hover:shadow-md ${
					message === "game over" ? "" : "active:bg-sky-500"
				} ${num === 3 && isBlink ? "bg-red-200" : "bg-sky-200"}`}
				disabled={message === "game over" ? true : false}
				onClick={handleClick}
			>
				3
			</button>
			<button
				value={4}
				className={`p-4 rounded-lg hover:shadow-md ${
					message === "game over" ? "" : "active:bg-sky-500"
				} ${num === 4 && isBlink ? "bg-red-200" : "bg-sky-200"}`}
				disabled={message === "game over" ? true : false}
				onClick={handleClick}
			>
				4
			</button>
			{message === "game over" ? (
				<button className="col-span-2 p-4 rounded-lg bg-red-200 w-1/2 mx-auto mt-4">
					Restart
				</button>
			) : (
				""
			)}
		</main>
	);
}

MainGame.propTypes = {
	message: PropTypes.string,
	setMessage: PropTypes.func,
	isBlink: PropTypes.bool,
	handleClick: PropTypes.func,
};
