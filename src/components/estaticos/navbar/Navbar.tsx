import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './Navbar.css'

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Box className='Cursor' >
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className='Cursor'>
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                        <Box mx={1} className='Cursor'>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                        <Box mx={1} className='Cursor'>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        <Box mx={1} className='Cursor'>
                            <Typography variant="h6" color="inherit">
                                Cadastrar Tema
                            </Typography>
                        </Box>
                        <Box mx={1} className='Cursor'>
                            <Typography variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;