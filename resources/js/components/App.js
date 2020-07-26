import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, Switch } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './_reducers';
import MainNav from './_components/MainNav/MainNav';


const initialState = {};
const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

class App extends React.Component {

    render() {
        return (
            <>
                {/**
                
                    Transfer router here
                
                
                 */}
                {/* <div className="flex flex-col">
                    <div>
                        
                    </div>
                    <div className="mt-20"> */}
                        {/* <MaterialDrawer /> */}
                        <MainNav />
                    {/* </div>
                </div> */}
                
            </>
        );
    }
}

export default App;

// if (document.getElementById('root')) {
ReactDOM.render(<App />, document.getElementById('root'));
// }