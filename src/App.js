import React from 'react';
import {CssBaseline, ThemeProvider, Container, TextField, Grid, Paper, Button, Box} from '@material-ui/core';
import MainApp from './Container'
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: green[500],
        },
    },
});


export default class App extends React.Component {

    render() {
        return (
            <>
                <CssBaseline />
                <ThemeProvider theme={theme}>
                    <Container maxWidth="lg">
                        <Paper>
                            <Box p={4} m={4}>
                                <MainApp />
                            </Box>
                        </Paper>
                    </Container>
                </ThemeProvider>
            </>
        );
    }
}
