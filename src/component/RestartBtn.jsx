import PropTypes from "prop-types";

export default function RestartBtn({ message }) {
	return (
		<>
			{message === "game over" ? (
				<button
					className="col-span-2 p-4 rounded-lg bg-white w-1/2 mx-auto mt-4 shadow-[4px_4px_0_0_gray] hover:translate-x-1 hover:translate-y-1 hover:shadow-[0px_0px_0_0_gray]"
					onClick={() => {
						location.reload();
					}}
				>
					Restart
				</button>
			) : (
				""
			)}
		</>
	);
}

RestartBtn.propTypes = {
	message: PropTypes.string,
};
