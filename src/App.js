import { useState } from 'react';

function App() {
	// const [first, setfirst] = useState(second)
	const [Colors, setColors] = useState(['red', 'orange', 'green']);
	return (
		<>
			<ul>
				{Colors.map((color, idx) => {
					return (
						<li key={idx} style={{ color: color }}>
							{color}
						</li>
					);
				})}
			</ul>
			<button
				onClick={() => {
					//  기존 Colors에 들어 있는 참조형 자료인 배열값을 Deep Copy
					const newColors = [...Colors];
					// 원본은 유지한 채 복사가 된 배열값을 변경
					newColors[2] = 'aqua';
					// 변경된, 볷사되 배열값을 state변경함수로 변경 처리
					setColors(newColors);
				}}
			>
				세번째 목록의 색상을 aqua로 변경
			</button>
		</>
	);
}

export default App;
