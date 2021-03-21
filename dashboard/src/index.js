import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './pages/Dashboard';
import theme from './components/theme/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Dashboard />
    </ThemeProvider>
    , document.querySelector('#root')
);

