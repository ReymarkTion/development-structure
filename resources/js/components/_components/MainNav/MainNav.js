import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Header from './Header';

class MainNav extends Component {

    render() {
        return (
            <>
                <div className="relative w-full flex flex-col h-screen overflow-y-hidden">
                    <Header logout={this.props.logout} />
                    <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
                        <main className="w-full flex-grow p-6">
                            <Switch>
                                {
                                    this.props.routes.map((link, key) =>
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
            </>
        );
    }
}

export default MainNav;