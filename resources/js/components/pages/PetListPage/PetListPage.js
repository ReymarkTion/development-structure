import React, { Component } from 'react';
import { connect } from 'react-redux';

class PetListPage extends Component {
    render() {
        return (
            <div>
                <h1>Pet List Page</h1>
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

const connectedPetListPage = connect(mapStateToProps, mapDispatchToProps)(PetListPage);
export { connectedPetListPage as PetListPage };