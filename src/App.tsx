import React from 'react'
import { AppRouter } from './routes/AppRouter'
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ThemeProvider } from '@emotion/react';
import theme from './themes/theme';

const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <AppRouter />
            </ThemeProvider>
        </Provider>
    )
}

export default App;