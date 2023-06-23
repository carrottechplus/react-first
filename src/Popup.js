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
			{/* 자기 자신을 닫아주는 state가 자기가 아닌 부모 컴포넌트에 있으므로 부모 컴포넌트로부터 state 변경함수를 prop으로 전달받아 호출 */}
			<button
				onClick={() => {
					setIsPop(false);
				}}
			>
				close
			</button>
		</aside>
	);
}

export default Popup;
