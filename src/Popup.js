import { useState, useEffect } from 'react';

// 팝업 생성 시 스크롤바 제거, 팝업 제거시 다시 스크롤바 생성

function Popup({ setOpen }) {
	let [Num, setNum] = useState(0);

	// 의존성 배열이 비어 있는 useEffect문 (컴포넌트 생성을 캐치)
	useEffect(() => {
		console.log('팝업 컴포넌트 생성');
		document.body.style.overflow = 'hidden';
	}, []);

	// 의존성 배열에 특정 state값이 등록되어 있는 useEffect문 (컴포넌트의 특정 state값 변경을 캐치)
	useEffect(() => {
		console.log('Num state값 변경');
	}, [Num]);

	// 의존성 배열이 비어 있는 상태에서 특정 함수가 리턴되는 useEffect문 (컴포넌트의 소멸을 캐치)
	useEffect(() => {
		return () => {
			document.body.style.overflow = 'auto';
			console.log('컴포넌트 소멸');
		};
	}, []);

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
