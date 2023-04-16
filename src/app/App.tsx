import './styles/index.scss';
import { UseTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/helpers/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';

const App = () => {
	const { theme, toggleTheme } = UseTheme();

	return (
		<div className={ classNames('app', {}, [theme]) }>
			<Navbar />

			<AppRouter/>

			<button onClick={ toggleTheme }>Toggle theme</button>
		</div>
	);
};

export default App;
