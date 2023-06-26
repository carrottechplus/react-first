import './scss/style.scss';
import { useState } from 'react';

// 좌우버튼 클릭 시 45도씩 왼쪽, 오른쪽 회전되게 모션 처리
// document.querySelector 위치 오류
// 아래와 같이 코드작성을 하면 app컴포넌트가 호출 된 후에만 article 요소가 동적으로 생기는 구조이기 때문에
// const box = document.querySelector('article'); <- 이 구문은 현재 에러 발생 (아직 없는 요소를 탐색하기 때문!)
// 리액트 컴포넌트 안쪽에서는 document.querySelector문을 가급적 쓰면 안됨
// >> 이유는 현재 리액트에서 관리되고 있는 가상돔을 제어하는 것이 아닌 제어가 불가능한 리얼돔을 가져오기 떄문..!!1

function App() {
	const [Num, setNum] = useState('rotate(0deg)');
	const box = document.querySelector('article');

	const prev = () => {
		setNum(Num - 1);
		box.style.transform = `rotate(${45 * Num}deg)`;
	};
	const next = () => {
		setNum(Num + 1);
		box.style.transform = `rotate(${45 * Num}deg)`;
	};

	return (
		<div className='wrap'>
			<button onClick={prev}>왼쪽으로 회전</button>
			<button onClick={next}>오른쪽으로 회전</button>
			<article></article>
		</div>
	);
}

export default App;
