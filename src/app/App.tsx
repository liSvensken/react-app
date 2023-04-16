import React from 'react';
import { Link } from 'react-router-dom';
import './styles/index.scss';
import { UseTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/helpers/classNames";
import { AppRouter } from "app/providers/router";

const App = () => {
	const { theme, toggleTheme } = UseTheme();

	return (
		<div className={ classNames('app', {}, [theme]) }>
			<button onClick={ toggleTheme }>Toggle theme</button>
			<br/>
			<Link to={ '/' }>Main</Link>
			<br/>
			<Link to={ '/about' }>About site</Link>

			<AppRouter/>
		</div>
	);
};

export default App;
