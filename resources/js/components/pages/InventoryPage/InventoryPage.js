import React, { Component } from 'react';
import { connect } from 'react-redux';

class InventoryPage extends Component {
    render() {
        return (
            <div>
                <h1>Inventory Page</h1>
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

const connectedInventoryPage = connect(mapStateToProps, mapDispatchToProps)(InventoryPage);
export { connectedInventoryPage as InventoryPage };