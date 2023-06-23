// function Card(props) {
// 알아볼 수 있게 비구조 할당으로 작성
function Card({ color = 'gray', width = '400px' }) {
	return (
		<article style={{ width: width }}>
			<div className='bg' style={{ backgroundColor: color }}></div>
			<div className='txt' style={{ color: color }}>
				{color}
			</div>
		</article>
	);
}

export default Card;
