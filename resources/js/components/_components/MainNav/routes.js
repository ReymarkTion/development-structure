import React from 'react';
import {
    Dashboard, ExpandMore, ExpandLess, People, PlaylistAddCheck
} from '@material-ui/icons';
import { HomePage } from '../../HomePage/HomePage';

const routes = [
    {
        name: "Home",
        icon: <Dashboard />,
        route: "/home",
        component: HomePage,
    },
    {
        name: "Employees",
        icon: <People />,
        route: "/employees",
        component: null,
    },
    {
        name: "Attendance Records",
        icon: <PlaylistAddCheck />,
        route: "/records",
        component: null,
    }
];

export default routes;