import './App.css';

import FirstComponent from './components/FirstComponent';
import AnotherComponent from './components/AnotherComponent';
import Images from './components/Images';
import Names from './components/Names';
import Hooks from './components/Hooks';
import RenderCond from './components/RenderCond';
import Fragment from './components/Fragment';
import Container from './components/Container';



function App() {
	return (
		<div className="App">
			<h1> Hello World</h1>
			<FirstComponent />
			<AnotherComponent />
			<Images />
			<Names />
			<Hooks />
			<RenderCond x={5} y={10} />
			<Fragment />
			<Container>
				<h1>Container child</h1>
			</Container>
		</div>
	);
}

export default App;
