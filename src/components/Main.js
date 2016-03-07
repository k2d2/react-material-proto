require('normalize.css');
require('styles/App.css');

import injectTapEventPlugin from 'react-tap-event-plugin';

if (!window.__alreadyInjected) {
  injectTapEventPlugin();
  window.__alreadyInjected = true;
}

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import AppBar from 'material-ui/lib/app-bar';
import Checkbox from 'material-ui/lib/checkbox';
import Dialog from 'material-ui/lib/dialog';
import Divider from 'material-ui/lib/divider';
import FlatButton from 'material-ui/lib/flat-button';
import FontIcon from 'material-ui/lib/font-icon';
import IconButton from 'material-ui/lib/icon-button';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';
import SelectField from 'material-ui/lib/select-field';
import Toggle from 'material-ui/lib/toggle';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';

class AppComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeScreen: null
    }
  }

  handleRequestChangeScreen(screenName) {
    this.setState({activeScreen: screenName})
  }

  render() {
    let screen = []

    if (this.state.activeScreen === 'main') {
      screen = <MainScreen
        key="main"
        onRequestSplashScreen={(e) => this.handleRequestChangeScreen(null)}
      />
    }

    return <div className="index">
      <div class="splash">
        <FlatButton
          icon={
            <FontIcon className="material-icons">arrow_forward</FontIcon>
          }
          label="Continue"
          linkButton={true}
          onClick={(e) => this.handleRequestChangeScreen('main')}
          secondary={true}
        />
      </div>
      <ReactCSSTransitionGroup
        transitionName="main"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
        transitionAppear={true}
        transitionAppearTimeout={500}
      >
        {screen}
      </ReactCSSTransitionGroup>
    </div>
  }
}

class MainScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isRgmDialogOpen: false,
      rgmManufacturer: null
    }
  }

  handleChangeRgmManufacturer(e, index, value) {
    this.setState({ rgmManufacturer: value })
  }

  handleRequestRgmDialogClose() {
    this.setState({ isRgmDialogOpen: false })
  }

  handleRequestRgmDialogOpen() {
    this.setState({ isRgmDialogOpen: true })
  }

  render() {
    return <div className="main">
      <AppBar title="Install" style={{position: 'fixed', top: 0}} />
      <Toolbar style={{position: 'fixed', bottom: 0, zIndex: 1000}}>
        <ToolbarGroup firstChild={true}>
          <FontIcon
            className="material-icons"
            onClick={this.props.onRequestSplashScreen}
          >
            find_replace
          </FontIcon>
          <FontIcon className="material-icons">edit</FontIcon>
          <FontIcon className="material-icons">assessment</FontIcon>
          <FontIcon className="material-icons">settings</FontIcon>
        </ToolbarGroup>
      </Toolbar>

      <List subheader="Devices" style={{marginTop: 64, marginBottom: 64}}>
        <ListItem
          initiallyOpen={true}
          primaryText="Inverters"
          secondaryText="Configuration"
          nestedItems={[
            <ListItem primaryText="Option toggle" rightToggle={<Toggle />} />,
            <ListItem primaryText="Option 1 checkbox" leftCheckbox={<Checkbox />} />,
            <ListItem primaryText="Option 2 checkbox" leftCheckbox={<Checkbox />} />
          ]}
        />
        <ListItem
          key={2}
          primaryText="Inverter 1"
          secondaryText="sn: 0ff34ecad031"
        />
        <ListItem
          key={3}
          primaryText="Inverter 2"
          secondaryText="sn: fc3a0e44da96"
        />
        <Divider />
        <ListItem
          initiallyOpen={true}
          primaryText="RGM"
          secondaryText="sn: ef33a02d19ac"
          rightIconButton={
            <IconButton
              onClick={this.handleRequestRgmDialogOpen.bind(this)}
            >
              <FontIcon className="material-icons">settings</FontIcon>
            </IconButton>
          }
        />
        <Divider />
        <ListItem
          key={4}
          primaryText="Another Device"
          secondaryText="sn: 000000000000"
        />
        <ListItem
          key={5}
          primaryText="Another Device"
          secondaryText="sn: 000000000000"
        />
        <ListItem
          key={6}
          primaryText="Another Device"
          secondaryText="sn: 000000000000"
        />
        <ListItem
          key={7}
          primaryText="Another Device"
          secondaryText="sn: 000000000000"
        />
        <ListItem
          key={8}
          primaryText="Another Device"
          secondaryText="sn: 000000000000"
        />
        <ListItem
          key={9}
          primaryText="Another Device"
          secondaryText="sn: 000000000000"
        />
        <ListItem
          key={10}
          primaryText="Another Device"
          secondaryText="sn: 000000000000"
        />
      </List>

      <Dialog
        actions={[
          <FlatButton
            label="Cancel"
            onClick={this.handleRequestRgmDialogClose.bind(this)}
            secondary={true}
          />,
          <FlatButton
            keyboardFocused={true}
            label="Save"
            onClick={this.handleRequestRgmDialogClose.bind(this)}
            primary={true}
          />
        ]}
        onRequestClose={this.handleRequestRgmDialogClose.bind(this)}
        open={this.state.isRgmDialogOpen}
        title="Configure RGM"
      >
        <SelectField
          floatingLabelText="Manufacturer"
          value={this.state.rgmManufacturer}
          onChange={this.handleChangeRgmManufacturer.bind(this)}
        >
          <MenuItem key={1} value={1} primaryText="RGM Maker 1" />
          <MenuItem key={2} value={2} primaryText="RGM Dudes" />
          <MenuItem key={3} value={3} primaryText="RGM Maker 3" />
          <MenuItem key={4} value={4} primaryText="YARM" />
          <MenuItem key={5} value={5} primaryText="YARM 2" />
          <MenuItem key={6} value={6} primaryText="YARM 3" />
        </SelectField>
      </Dialog>
    </div>
  }
}

export default AppComponent;
