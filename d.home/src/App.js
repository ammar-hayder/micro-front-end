import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
    StylesProvider,
    createGenerateClassName,
    ThemeProvider,
} from '@material-ui/core/styles';

import customTheme from './assets/scripts/styles/theme'

import Component1 from './components/Component1';
import Component2 from './components/Component2';

let theme = customTheme;

const generateClassName = createGenerateClassName({
    productionPrefix: 'home',
});

export default ({ history }) => {
    return (
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <div>
                    <StylesProvider generateClassName={generateClassName}>
                        <Router history={history}>
                            <Switch>
                                <Route exact path="/Component2" component={Component2} />
                                <Route path="/" component={Component1} />
                            </Switch>
                        </Router>
                    </StylesProvider>
                </div>
            </ThemeProvider>
        </React.StrictMode>
    );
};
