import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Routers from './Routers/Routers';

class Root extends Component {

    render() {
        return (
            <Provider store={this.props.store}  >
                <Routers />
            </Provider>
        )
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;