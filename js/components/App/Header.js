import React from 'react';
import Relay from 'react-relay';
import {hashHistory} from 'react-router';
import {AppBar, Drawer, MenuItem, IconButton} from 'material-ui';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import {Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap';
import Login from './Login';
import Register from './Register';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggleDrawer() {
    this.setState({
      open: !this.state.open
    });
  }



  render() {
    return (
        <div>
        <Drawer
         docked={false}
         width={this.state.open ? '25%' : 0}
         open={this.state.open}
         onRequestChange={this.toggleDrawer.bind(this)}>
          <MenuItem>Comics</MenuItem>
          <MenuItem>Sci-Fi</MenuItem>
          <MenuItem>Anime</MenuItem>
          <MenuItem>nerdy[gear]</MenuItem>
        </Drawer>
        <AppBar
          title="nerdy[verse]"
          titleStyle={styles.title}
          onLeftIconButtonTouchTap={this.toggleDrawer.bind(this)}
          isInitiallyOpen={true}
          style={styles.navbar}
          zDepth={1}
        />


        </div>
    );
  }
}

export default Relay.createContainer(Header, {
  fragments: {
  }
});

const styles = {
  navbar: {
    marginBottom: 0,
    backgroundColor: '#cc0000',

  },
  title: {
    fontSize: '1.2em',
    fontWeight: "300",
    fontFamily: 'HelveticaNeue',
    color: '#fff'
  }
};
