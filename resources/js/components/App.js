import React from 'react';

import { Router } from 'react-router-dom';

import MainNav from './_components/MainNav/MainNav';
import SideLinks from './_components/MainNav/SideLinks';
import { history } from './_helpers';
import routes from './_components/MainNav/routes';
import { authActions } from './_actions';
import { connect } from 'react-redux';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };

        //this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount = () => {
        console.log("this -> ", this);
    }

    handleLogout = () => {
        console.log("props -> ", this.props);
        this.props.logout();
    }

    render() {
        return (
            <>
                <Router history={history}>
                    <div className="bg-gray-100 font-family-karla flex">
                        <SideLinks links={routes} />
                        <MainNav
                            routes={routes}
                            logout={() => this.handleLogout()}
                        />
                    </div>
                </Router>
            </>
        );
    }
}

const mapDispatchToProps = {
    logout: authActions.logout,
};

const mapStateToProps = (state) => {
    console.log("state ->", state);
    return {
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
// const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
// export { connectedApp as App };