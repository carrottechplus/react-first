import './scss/style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

function App() {
	return (
		<>
			<FontAwesomeIcon icon={faHouse} />
			<FontAwesomeIcon icon={faEnvelope} />
			<FontAwesomeIcon icon={faThumbsUp} />
		</>
	);
}

export default App;
