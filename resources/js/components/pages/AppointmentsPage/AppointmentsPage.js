import React, { Component } from 'react';
import { connect } from 'react-redux';

class AppointmentsPage extends Component {
    render() {
        return (
            <div>
                <h1>Appointments Page</h1>
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

const connectedAppointmentsPage = connect(mapStateToProps, mapDispatchToProps)(AppointmentsPage);
export { connectedAppointmentsPage as AppointmentsPage };