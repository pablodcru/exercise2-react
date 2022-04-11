/* Here a toggle button is created that will trigger the theme change */

import { useState } from 'react';
import { Button, InputGroup } from 'reactstrap';
import { ThemeContext, themes } from './themeContext';
import React from 'react';

const ToggleMode = () => {
    const [darkMode, setDarkMode] = useState(true);
    return (
        <div>
            <InputGroup>
                <ThemeContext.Consumer>
                    {({ changeTheme }) => (
                    <Button
                        color="link"
                        onClick={() => {
                        setDarkMode(!darkMode);
                        changeTheme(darkMode ? themes.light : themes.dark);
                        }}

                    >
                        <span className="d-lg-none d-md-block">Switch Mode</span>
                    </Button>
                    )}
                </ThemeContext.Consumer>
            </InputGroup>

        </div>
    );
};

export default ToggleMode;