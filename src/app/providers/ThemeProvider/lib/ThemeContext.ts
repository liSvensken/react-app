import { createContext } from 'react';

export enum Theme {
	Light = 'app-light-theme',
	Dark = 'app-dark-theme',
}

export interface ThemeContextProps {
	theme?: Theme,
	setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
