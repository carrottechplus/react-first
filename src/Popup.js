import { useState } from 'react';

function Popup({ setOpen }) {
	const [Num, setNum] = useState(0);

	const popupStyle = {
		width: 600,
		height: 300,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#555',
		fontSize: '30px',
		color: '#fff',
		position: 'fixed',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
	};
	return (
		<aside style={popupStyle}>
			<button
				onClick={() => {
					setOpen(false);
				}}
			>
				close
			</button>
			<h1>{Num}</h1>
			<nav>
				<button
					onClick={() => {
						setNum(Num - 1);
					}}
				>
					감소
				</button>
				<button
					onClick={() => {
						setNum(Num + 1);
					}}
				>
					증가
				</button>
			</nav>
		</aside>
	);
}

export default Popup;
