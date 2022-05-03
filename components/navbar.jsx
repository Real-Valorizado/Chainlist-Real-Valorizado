import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';
import Image from 'next/image'

import indigo from '@material-ui/core/colors/indigo';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import deepOrange from '@material-ui/core/colors/deepOrange';


const accent = red[700]; // #304ffe

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
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
                    <IconButton className={classes.menuButton} color="accent" aria-label="Menu">
                        <div className={classes.logo}>
                            <Link href="https://realvalorizado.com.br">
                                <a>
                                    <Image
                                        src="/real-valorizado-logo.png"
                                        alt="Logo Real Valorizado"
                                        width="156"
                                        height="50"
                                    />
                                </a>
                            </Link>
                        </div>
                    </IconButton>
                    <Typography variant="button" color="inherit" className={classes.grow}>
                        <Link href="https://realvalorizado.com.br">
                            <a>
                                Ferramentas
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