import React, { useState, useEffect } from 'react';
import {
    Dashboard, ExpandMore, ExpandLess, People
} from '@material-ui/icons';
import {
    ListItemText, ListItem, List, Fade, Collapse
} from '@material-ui/core';
import { history } from '../../_helpers';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer - 1,
        color: '#1b334c',
        backgroundColor: 'rgba(251, 253, 255, 0.7)',
    },
}));

const MenuList = ({ children }) => (
    // <div className="flex flex-col">
    <ul className="list-reset">
        { children }
    </ul>
    // </div>
);

const MenuListItem = ({
    link, 
    selected, 
    onSelect,
    childOpenLink,
    selectOpenChild,
    keyValue
}) => (
    
    <li className="text-gray-600">
        <a type="button" className={`border-l-2 hover:bg-gray-200 flex bg-dark-gray py-2 md:py-3 pl-3 align-middle 
            ${(link.route === childOpenLink || link.route === selected) && `border-green-900 bg-gray-200`}`}
            onClick={ () =>
                !link.children 
                    ? onSelect(link, false)
                    : selectOpenChild()
            }
        >
            <span className={`mr-3 ${(link.route === childOpenLink || link.route === selected) && `text-green-900`}`} fontSize={`inherit`}>{link.icon}</span>
            <span className={`flex-auto mt-auto text-sm w-40 ${(link.route === childOpenLink || link.route === selected) && `text-green-900`}`}>{link.name}</span>
            <span className="mr-2">{
                (link.children && link.route === childOpenLink)
                    && <ExpandLess className={`text-green-900`} /> } {
                (link.children && link.route !== childOpenLink)
                    && <ExpandMore /> }</span>
        </a>
        <Collapse in={link.children && link.route === childOpenLink} timeout="auto" unmountOnExit>
            <div>
                {
                    link.children?.map((data, key2) => (
                        <MenuList>
                            <li className="text-gray-600" key={keyValue.toString()+key2.toString()}>
                                <a type="button" onClick={() => onSelect(data, true)} className="hover:bg-gray-200 flex bg-dark-gray py-2 md:py-3 pl-3 align-middle">
                                    <span className={`ml-12 flex-auto mt-auto text-sm w-40 ${(data.route === selected) && `text-green-900`}`}>{data.name}</span>
                                </a>
                            </li>
                        </MenuList>
                    ))
                }
            </div>
        </Collapse>
    </li>
);

const SideLinks = ({ links }) => {

    const classes = useStyles();

    const [route, setRoute] = useState(null);
    const [menuLinks, setMenuLinks] = useState(links);
    const [openChild, setOpenChild] = useState(null);

    useEffect(() => {

        console.log(window.location.pathname);
        // if (menuLinks.length >= 1)
        //     handleSelectRoute(menuLinks[0]);



    }, [menuLinks]);

    const handleSelectRoute = (link, isChild = false) => {

        if (!link.children && !isChild)
            setOpenChild(null);
        
        if (link.route === route)
            return;

        setRoute(link.route);

        console.log("-- push route --");

        history.push(link.route);
    }

    const handleCollapse = (link) => {
        setRoute(null);

        if (link.route === openChild) {
            setOpenChild(null);

            return;
        }

        setOpenChild(link.route);
    }

    return (
        <>
            <aside className="relative bg-white h-screen hidden sm:block shadow-xl">
                
                <div className="p-6">
                    <a href="index.html" className="text-gray-600 text-3xl font-semibold uppercase hover:text-gray-600">Admin</a>
                    {/* <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                        <i className="fas fa-plus mr-3"></i> New Report
                    </button> */}
                </div>

                <hr/>

                <nav className="text-white text-base font-semibold pt-3">


                    <MenuList>
                        {
                            menuLinks.map((link, key) =>
                                <MenuListItem 
                                    link={link} 
                                    selected={route} 
                                    onSelect={(rl, isChild) => handleSelectRoute(rl, isChild)}
                                    childOpenLink={openChild}
                                    selectOpenChild={() => handleCollapse(link)}
                                    keyValue={key}
                                />
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

