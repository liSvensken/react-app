import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { UseTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/helpers/classNames";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

const App = () => {
	const { theme, toggleTheme } = UseTheme();

	return (
		<div className={ classNames('app', {}, [theme]) }>
			<button onClick={ toggleTheme }>Toggle theme</button>
			<br/>
			<Link to={ '/' }>Main</Link>
			<br/>
			<Link to={ '/about' }>About site</Link>
			<Suspense fallback={ <div>Loading...</div> }>
				<Routes>
					<Route path={ '/about' } element={ <AboutPage/> }/>
					<Route path={ '/' } element={ <MainPage/> }/>
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
