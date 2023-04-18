import './styles/index.scss';
import { UseTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/helpers/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from "widgets/Sidebar";

const App = () => {
	const { theme } = UseTheme();

	return (
		<div className={ classNames('app', {}, [theme]) }>
			<Navbar/>
			<div className="content-page">
				<Sidebar/>
				<AppRouter/>
			</div>
		</div>
	);
};

export default App;
