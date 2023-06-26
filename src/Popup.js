function Popup({ setIsPop }) {
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
			<button>close</button>
		</aside>
	);
}

export default Popup;
