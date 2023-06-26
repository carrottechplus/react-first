import './scss/style.scss';
import { useState, useRef } from 'react';

function App() {
	let [Num, setNum] = useState(0);
	// 가상돔 요소가 담길 빈 참조객체를 미리 초기화
	const article = useRef(null);
	console.log(article);

	const prev = () => {
		// setNum(Num - 1); 한박자 늦음 ? Num이 처음에 0이고 state값이 바뀌면 다음번 사이클때 적용이 되기때문에,,
		setNum(--Num);
		article.current.style.transform = `rotate(${45 * Num}deg)`;
	};

	const next = () => {
		// setNum(Num + 1);
		setNum(++Num);
		article.current.style.transform = `rotate(${45 * Num}deg)`;
	};

	return (
		<div className='wrap'>
			<button
				onClick={() => {
					console.log(article);
				}}
			>
				참조객체 확인
			</button>
			<button onClick={prev}>왼쪽으로 회전</button>
			<button onClick={next}>오른쪽으로 회전</button>
			{/* 참조하고 있는 가상돔요소를 useRef로 만든 참조객체와 연결 */}
			<article ref={article}></article>
		</div>
	);
}

export default App;
