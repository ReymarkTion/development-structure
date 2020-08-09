import React, { Component } from 'react';
import { connect } from 'react-redux';

class ScanRfidPage extends Component {
    render() {
        return (
            <div>
                <h1>Scan Rfid Page</h1>
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

const connectedScanRfidPage = connect(mapStateToProps, mapDispatchToProps)(ScanRfidPage);
export { connectedScanRfidPage as ScanRfidPage };