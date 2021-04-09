/**
 * Created by edaniels on 4/8/2021.
 */
import React, {useEffect, useCallback, useRef, useState} from 'react';
import {CssBaseline, ThemeProvider, TextField, Typography,Divider, Grid, Paper, Button, Box} from '@material-ui/core';
import axios from 'axios';
const fetchPage =  (url) => {
    return axios.get('http://localhost:1234/proxy?url='+encodeURIComponent(url))
        .then((response) => response.data)

}
const Container = () => {
    const [pages, setPages] = useState([]);
    const stateRef = useRef('');
    const handleOnChange = useCallback((e) => {
        stateRef.current = e.target.value || '';
    },[]);
    const handleSearch = useCallback(   () => {
        setPages([]);
        const urls = stateRef.current.split("\n");
        urls.filter((url) => !!url.trim())
            .forEach(  (url) => {
                fetchPage(url)
                    .then((content) => {
                        setPages((curPages) => [...curPages, {content:`${content}`, title:`Page: ${url}`}])
                    });
            });

    },[]);

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Typography>Enter a url on each line to fetch the page contents.</Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="URLs"
                    multiline
                    rows={5}
                    fullWidth
                    onChange={handleOnChange}
                />
            </Grid>
            <Grid item xs={12}>
                <Button onClick={handleSearch} color="primary" variant="contained">Fetch</Button>
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
            {
                pages.map(({title, content}, i) => (
                    <Grid item xs={12} key={i}>
                        <Grid container>
                            <Grid item xs={12}>

                                <Paper>
                                    <Box p={2}>
                                        <Typography variant="h5">{title}</Typography>
                                        <iframe style={{border: '1px solid gray', width:'100%',height:'100%'}} srcDoc={content} />
                                    </Box>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default Container;
