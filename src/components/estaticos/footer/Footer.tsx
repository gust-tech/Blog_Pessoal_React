import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/Github';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './Footer.css'
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';

function Footer() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
      var footerComponent;
      if(token != ""){
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='textos'>Siga-me no LinkedIn e GitHub! </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.linkedin.com/in/gustavo-rocha-860706250/" target="_blank">
                                <LinkedInIcon className='redes' />
                            </a>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/gust-tech" target="_blank">
                                <GithubIcon className='redes' />
                            </a>
                        </Box>
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textos' >© 2022 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://github.com/gust-tech/Blog_Pessoal_React/tree/v4-final">
                                <Typography variant="subtitle2" gutterBottom className='textos' align="center">Repositório do Projeto</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
          }

          return (
              <>
              {footerComponent}
              </>
          );
      }
      
      export default Footer;
