import React from 'react';
import { AppBar, Toolbar, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useDispatch } from "react-redux";
import { addToken } from '../../../store/tokens/actions';
import {toast} from 'react-toastify';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    let navigate = useNavigate();
    const dispatch = useDispatch();
    
    function goLogout(){
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/login')
    }

    var navbarComponent;

    if(token != ""){
        navbarComponent = <AppBar position="static">
        <Toolbar variant="dense" className='bgnav'>
            <Box className='cursor'>
                <Typography variant="h5" color="inherit">
                    Tech Blog
                </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
                <Link to="/home" className="text-decorator-none">
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Home
                        </Typography>
                    </Box>
                </Link>
                <Link to="/posts" className="text-decorator-none">
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Posts
                        </Typography>
                    </Box>
                </Link>
                <Link to="/temas" className="text-decorator-none">
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        Temas
                    </Typography>
                </Box>
                </Link>
                <Link to="/formularioTema" className="text-decorator-none">
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        Criar Tema
                    </Typography>
                </Box>
                </Link>
              
                    <Box mx={1} className='cursor' onClick={goLogout}>
                        <Typography variant="h6" color="inherit">
                            Sair
                        </Typography>
                    </Box>
                
            </Box>

        </Toolbar>
    </AppBar>
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;