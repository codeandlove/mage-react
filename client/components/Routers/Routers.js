import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { loadAllInitialData } from "../../actions/initial";

import App from '../../containers/App/App';
import Homepage from '../../containers/Homepage/Homepage';

class Routers extends Component {
  constructor(props) {
      super(props);
  }

  renderSwitch = () => {

      const { user } = this.props;

      let defaultComponent = Homepage;

      return (
          <Switch>
              <Route exact path="/" component={defaultComponent} />
          </Switch>
      )
  };

  render() {

    return (
      <Router history={browserHistory} >
        <App>
            { this.props.initialLoading ? <div className="initial-loading"><span className="initial-message">Stand by</span></div> : this.renderSwitch() }
        </App>
      </Router>
    );
  }
}

export default Routers;
