import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

function Navbar() {

    const [token, setToken] = useLocalStorage('token')
    let navigate = useNavigate()

    function goLogout(){
        setToken('')
        alert("Conta desconectada com sucesso!")
        navigate('/login')
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense" className='bgnav'>
                    <Box className='Cursor' >
                        <Typography variant="h5" color="inherit">
                            Tech Blog
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className='Cursor'>
                            <Typography variant="h6" color="inherit">
                                <Link to='/home' className='textobranco'>
                                    Home
                                </Link>
                            </Typography>
                        </Box>
                        <Box mx={1} className='Cursor'>
                            <Typography variant="h6" color="inherit">
                                <Link to='/posts' className='textobranco'>
                                Postagens
                                </Link>
                            </Typography>
                        </Box>
                        <Box mx={1} className='Cursor'>
                            <Typography variant="h6" color="inherit">
                                <Link to='/formularioPostagem' className='textobranco'>
                                Cadastrar Postagem
                                </Link>
                            </Typography>
                        </Box>
                        <Box mx={1} className='Cursor'>
                            <Typography variant="h6" color="inherit">
                                <Link to='/temas' className='textobranco'>
                                Temas
                                </Link>
                            </Typography>
                        </Box>
                        <Box mx={1} className='Cursor'>
                            <Typography variant="h6" color="inherit">
                                <Link to='/formularioTema' className='textobranco'>
                                Cadastrar Tema
                                </Link>
                            </Typography>
                        </Box>
                        <Box mx={1} className='Cursor' onClick={goLogout}>
                            <Typography variant="h6" color="inherit">
                                Sair
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;