import React, { useState, useEffect } from 'react';
import {
    Dashboard, ExpandMore, ExpandLess, People
} from '@material-ui/icons';
import {
    ListItemText, ListItem, List
} from '@material-ui/core';
import { history } from '../../_helpers';


const MenuList = ({ children }) => (
    <div className="flex flex-col">
        { children }
    </div>
);

const MenuListItem = ({ link, selected, onSelect }) => (
    <div className={`flex flex-row border-l-2 ${selected 
            ? `border-white bg-black`
            : `border-gray-800 hover:bg-gray-700 hover:border-gray-700`}`}
            onClick={onSelect}>
        <div className="self-center p-3 h-auto w-auto">
            <span className="text-base">{link.icon}</span>
        </div>
        <div className="flex-auto py-3">
            <span className="text-base">{link.name}</span>
        </div>
        <div className="self-center p-2">
            {
                link.children &&
                    <ExpandMore />
            }
        </div>
    </div>
);

const SideLinks = ({ links }) => {


    const [route, setRoute] = useState(null);
    const [menuLinks, setMenuLinks] = useState(links);

    useEffect(() => {

        console.log(window.location.pathname);
        // if (menuLinks.length >= 1)
        //     handleSelectRoute(menuLinks[0]);



    }, [menuLinks]);

    const handleSelectRoute = (link) => {
        if (link.route === route)
            return;

        setRoute(link.route);
        history.push(link.route);
    }

    return (
        <>
            <aside className="relative bg-gray-800 h-screen hidden sm:block shadow-xl" style={{ width: '400px' }}>
                <div className="p-6">
                    <a href="index.html" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</a>
                    <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                        <i className="fas fa-plus mr-3"></i> New Report
                            </button>
                </div>

                <nav className="text-white text-base font-semibold pt-3">


                    <MenuList>
                        {
                            menuLinks.map((link) =>
                                <MenuListItem link={link} selected={route === link.route} onSelect={() => handleSelectRoute(link)} />
                            )
                        }
                    </MenuList>




                    {/* <List disablePadding dense>
                        <ListItem button className={`hover:bg-gray-400`}>
                            <ListItemText>Home</ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemText>Billing</ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemText>Settings</ListItemText>
                        </ListItem>
                    </List> */}


                    {/* <a href="index.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                        <Dashboard />
                                Dashboard
                            </a> */}
                    {/* <a href="blank.html" className="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
                        <i className="fas fa-sticky-note mr-3"></i>
                                Blank Page
                            </a>
                    <a href="tables.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                        <i className="fas fa-table mr-3"></i>
                                Tables
                            </a>
                    <a href="forms.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                        <i className="fas fa-align-left mr-3"></i>
                                Forms
                            </a>
                    <a href="tabs.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                        <i className="fas fa-tablet-alt mr-3"></i>
                                Tabbed Content
                            </a>
                    <a href="calendar.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                        <i className="fas fa-calendar mr-3"></i>
                                Calendar
                            </a> */}
                </nav>


            </aside>

        </>
    );
};

export default SideLinks;

