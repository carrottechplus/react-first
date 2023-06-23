import Popup from './Popup';
import { useState } from 'react';

function App() {
	// useState는 배열값을 리턴 [인수로 전달한 값을 state 담아서 첫번째값, 해당 state를 변경할 수 있는 전용 함수]
	const [IsPop, setIsPop] = useState(false);
	const [Color, setColor] = useState('#333'); //default 값
	return (
		<>
			<main>
				<h1
					style={{ color: Color }}
					onClick={() => {
						setIsPop(true);
					}}
				>
					메인컨텐츠
				</h1>
				<button
					onClick={() => {
						setColor('red');
					}}
				>
					제목 글자색을 red로 변경
				</button>
				<button
					onClick={() => {
						setColor('blue');
					}}
				>
					제목 글자색을 blue로 변경
				</button>
				{/* {IsPop ? <Popup /> : null} */}

				{/* 자식 컴포넌트로 setIsPop 이라는 state 변경 함수를 prop으로 전달 */}
				{IsPop && <Popup setIsPop={setIsPop} />}
			</main>
		</>
	);
}

export default App;
