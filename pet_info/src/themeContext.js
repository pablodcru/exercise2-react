/* A context is created in order to have a global theme wrapped aroung the app when it gets re-rendered after pressing switch mode */

import { createContext } from 'react';

export const themes = {
    dark:"",
    light:"white-content",
};

export const ThemeContext = createContext({
    theme: themes.dark,
    changeTheme: () => {},
});