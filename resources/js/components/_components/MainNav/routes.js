import React from 'react';
import {
    Dashboard, ExpandMore, ExpandLess, People, PlaylistAddCheck,
    AccountTree, PersonAdd, ViewList
} from '@material-ui/icons';


import { HomePage } from '../../pages/HomePage';
import { InventoryPage } from '../../pages/InventoryPage';
import { ClientsListPage } from '../../pages/ClientsListPage';
import { PetListPage } from '../../pages/PetListPage';
import { ScanRfidPage } from '../../pages/ScanRfidPage';
import { AppointmentsPage } from '../../pages/AppointmentsPage';


const routes = [
    {
        name: "Home",
        icon: <Dashboard />,
        route: "/home",
        component: HomePage,
    },
    {
        name: "Inventory",
        icon: <AccountTree />,
        route: "/inventory",
        component: InventoryPage,
    },
    {
        name: "Clients",
        icon: <People />,
        route: "/clients",
        component: ClientsListPage,
        children: [
            {
                name: "Client List",
                route: "/client-list",
                component: ClientsListPage,
            },
            {
                name: "Pet List",
                route: "/pet-list",
                component: PetListPage,
            },
            {
                name: "Scan ID",
                route: "/scan-rfid-card",
                component: ScanRfidPage,
            },
        ]
    },
    {
        name: "New Client",
        icon: <PersonAdd />,
        route: "/add-new-client",
        component: null,
    },
    {
        name: "Appointments",
        icon: <ViewList />,
        route: "/appointments-history",
        component: AppointmentsPage,
    }
];

export default routes;