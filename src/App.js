import pic1 from './img/pic1.jpg';
import pic2 from './img/pic2.jpg';
import pic3 from './img/pic3.jpg';

import './scss/style.scss';

function App() {
	const path = process.env.PUBLIC_URL; // public 폴더까지의 절대 경로값
	return (
		<>
			<div>
				<h1>src 폴더 안쪽에서 이미지 import</h1>
				<img src={pic1} alt='pic1' />
				<img src={pic2} alt='pic2' />
				<img src={pic3} alt='pic3' />
			</div>
			<div>
				<h1>public 폴더 안쪽에서 이미지 경로 연결</h1>
				<img src={path + '/img/pic1.jpg'} alt='pic1' />
				<img src={path + '/img/pic2.jpg'} alt='pic2' />
				<img src={path + '/img/pic3.jpg'} alt='pic3' />
			</div>
		</>
	);
}

export default App;
