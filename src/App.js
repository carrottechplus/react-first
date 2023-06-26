import Popup from './Popup';
import './scss/style.scss';
const [Open, setOpen] = useState(false);

// 팝업열기 버튼 클릭 시 외부 컴포넌트인 popup 컴포넌트 보이게
// 팝업 컴포넌트 안쪽에 닫기 버튼을 만들어서 해당 닫기 버튼 클릭시 팝업제거
// 팝업 컴포넌트 안쪽에 숫자 출력하고 그 밑에 증가, 감소 버튼을 만들어서 해당 버튼 클릭시 숫자가 증가, 감소 출력되도록 처리

function App() {
	return (
		<>
			<main>
				<h1>test</h1>
				<button>팝업 열기</button>
				<Popup />
			</main>
		</>
	);
}

export default App;
