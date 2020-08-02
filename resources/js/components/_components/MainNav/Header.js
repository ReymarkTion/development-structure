import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Popover, Box
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
}));

const Header = ({ logout }) => {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <header className="w-full flex items-center bg-white py-2 px-6 sm:flex">
                <div className="w-1/2"></div>
                <div className="relative w-1/2 flex justify-end">
                    <button
                        aria-describedby={id}
                        onClick={handlePopoverClick}
                        className="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
                        <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400" />
                    </button>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handlePopoverClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <Box >
                            <div className="bg-white rounded-lg shadow-lg py-2 w-32">
                                <div className="flex flex-col">
                                    <button type="button" className="px-4 py-2 hover:bg-gray-700 hover:text-white">Account</button>
                                    <button type="button" className="px-4 py-2 hover:bg-gray-700 hover:text-white" onClick={logout}>Sign Out</button>
                                </div>
                            </div>
                        </Box>
                    </Popover>
                
                </div>
            </header>

            {/*<header x-data="{ isOpen: false }" className="w-full bg-sidebar py-5 px-6 sm:hidden">
                <div className="flex items-center justify-between">
                    <a href="index.html" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</a>
                    <button className="text-white text-3xl focus:outline-none">
                        <i x-show="!isOpen" className="fas fa-bars"></i>
                        <i x-show="isOpen" className="fas fa-times"></i>
                    </button>
                </div>

                <nav className="flex flex-col pt-4">
                    <a href="index.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                        <i className="fas fa-tachometer-alt mr-3"></i>
                                    Dashboard
                                </a>
                    <a href="blank.html" className="flex items-center active-nav-link text-white py-2 pl-4 nav-item">
                        <i className="fas fa-sticky-note mr-3"></i>
                                    Blank Page
                                </a>
                    <a href="tables.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                        <i className="fas fa-table mr-3"></i>
                                    Tables
                                </a>
                    <a href="forms.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                        <i className="fas fa-align-left mr-3"></i>
                                    Forms
                                </a>
                    <a href="tabs.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                        <i className="fas fa-tablet-alt mr-3"></i>
                                    Tabbed Content
                                </a>
                    <a href="calendar.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                        <i className="fas fa-calendar mr-3"></i>
                                    Calendar
                                </a>
                    <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                        <i className="fas fa-cogs mr-3"></i>
                                    Support
                                </a>
                    <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                        <i className="fas fa-user mr-3"></i>
                                    My Account
                                </a>
                    <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                        <i className="fas fa-sign-out-alt mr-3"></i>
                                    Sign Out
                        </a>
                    <button className="w-full bg-white cta-btn font-semibold py-2 mt-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                        <i className="fas fa-arrow-circle-up mr-3"></i> Upgrade to Pro!
                        </button>
                </nav>
            </header>*/}
                        
        </>
    );
};

export default Header;