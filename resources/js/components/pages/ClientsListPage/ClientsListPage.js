import React, { Component } from 'react';
import { connect } from 'react-redux';

class ClientsListPage extends Component {
    render() {
        return (
            <div>
                <h1>Clients List Page</h1>
            </div>
        );
    }
}

const mapDispatchToProps = {
    // actions
};

const mapStateToProps = (state) => {
    console.log("state ->", state);
    return {
        // states from store
    };
};

const connectedClientsListPage = connect(mapStateToProps, mapDispatchToProps)(ClientsListPage);
export { connectedClientsListPage as ClientsListPage };