import React, {Component} from 'react';

import List from './../../components/Catalog/List';

class Homepage extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div className="page-homepage">
                <h1>Homepage</h1>
                <List />
            </div>
        )

    }
}

export default Homepage;