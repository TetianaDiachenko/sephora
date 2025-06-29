import './App.scss';
import Page from './components/Main/Page/Page';
import HeaderContainer from './components/header/HeaderContainer/HeaderContainer'
import { QuizProvider } from './context/QuizProvider';

const App = () => {
	return (
		<QuizProvider>
        <HeaderContainer />
        <Page />
    	</QuizProvider>
	);
 };


export default App;
