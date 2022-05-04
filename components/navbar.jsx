import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from 'next/link';


const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    navbarblue: {
        backgroundColor: '#0528f2',
    },
};

function ResponsiveAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.navbarblue} >

                    <Typography variant="button" color="inherit" className={classes.grow}>
                        <Link href="https://ferramentas.realvalorizado.com.br">
                            <a>
                                <svg version="1.1" width="12" height="12" viewBox="0 0 24 24">
                                    <path
                                        fill={'#fff'}
                                        d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
                                    />
                                </svg>
                                {' '}Voltar para Ferramentas
                            </a>
                        </Link>
                    </Typography>

                    <Button variant="contained">
                        <Link href="https://realvalorizado.com.br">
                            <a>
                                Site Principal
                            </a>
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </div >
    );
}

ResponsiveAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResponsiveAppBar);