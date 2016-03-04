require('normalize.css');
require('styles/App.css');

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import React from 'react';

import AppBar from 'material-ui/lib/app-bar';
import FontIcon from 'material-ui/lib/font-icon';
import RaisedButton from 'material-ui/lib/raised-button';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <AppBar title="SmartInstall" />
        <Toolbar style={{position: 'fixed', bottom: 0}}>
          <ToolbarGroup firstChild={true} float="left">
            <FontIcon className="material-icons">find_replace</FontIcon>
            <FontIcon className="material-icons">edit</FontIcon>
            <FontIcon className="material-icons">assessment</FontIcon>
            <FontIcon className="material-icons">settings</FontIcon>
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
