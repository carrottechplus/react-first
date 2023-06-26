import './scss/style.scss';
import { useState } from 'react';

// 좌우버튼 클릭 시 45도씩 왼쪽, 오른쪽 회전되게 모션 처리
function App() {
	const [Trans, setTrans] = useState('rotate(0deg)');
	return (
		<div className='wrap'>
			<button
				onClick={() => {
					setTrans('rotate(-45deg)');
				}}
			>
				왼쪽으로 회전
			</button>
			<button
				onClick={() => {
					setTrans('rotate(45deg)');
				}}
			>
				오른쪽으로 회전
			</button>
			<article style={{ transform: Trans }}></article>
		</div>
	);
}

export default App;
