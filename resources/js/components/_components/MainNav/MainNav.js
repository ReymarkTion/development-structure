import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Header from './Header';
import SideLinks from './SideLinks';
import { history } from '../../_helpers';
import routes from './routes';

class MainNav extends Component {

    render() {
        return (
            <>
                <Router history={history}>
                    <div className="bg-gray-100 font-family-karla flex">
                        <SideLinks links={routes} />
                        <div className="relative w-full flex flex-col h-screen overflow-y-hidden">
                            <Header />
                            <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
                                <main className="w-full flex-grow p-6">
                                    <Switch>
                                        {
                                            routes.map((link, key) =>
                                                <Route
                                                    path={link.route}
                                                    exact
                                                    component={link.component}
                                                    key={key}
                                                />
                                            )
                                        }
                                    </Switch>
                                </main>
                            </div>
                        </div>
                    </div>
                </Router>
            </>
        );
    }
}

export default MainNav;