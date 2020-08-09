import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
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

const connectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);
export { connectedHomePage as HomePage };