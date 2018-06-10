# Learning and Setting up React

Create React apps with no build configuration
Make sure Nodejs with version greater than 6 is installed.

## Quick Overview

```sh
npx create-react-app my-app
```
This  creates a folder my-app inside current folder and sets up the inital project structure 

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── registerServiceWorker.js
```

```sh
cd my-app
npm start
```

This starts up the app and can be viewed on http://localhost:3000/ 

Initial Screen:

<p align='center'>
<img src='Documentation/initialScreen.png' width='600' alt='npm start'>
</p>


## Setting up Material UI

Material UI is one of the most popular open source framework for developing responsive, mobile-first websites. You don’t have to use Material UI together with React but it is a popular library with inbuilt components for integrating with React apps. 

```sh
npm install --save @material-ui/icons @material-ui/core typeface-roboto
```

Import Roboto Font in the beginning of your src/index.js file:

```sh
import 'typeface-roboto';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
```

Import required React Material components within src/App.js file or your custom component files:

```sh
import AppBar from '@material-ui/core/AppBar';
```

Now you are ready to use the imported React Material components within your component hierarchy defined in the render method. Here is the <a href="https://material-ui.com/getting-started/installation/">link</a> to read more on the react material components.

Let us build a simple Header component with react material components and render it.

* Add components folder inside src and create a new file Header.js

```sh
// src/components/Header.js

import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

export default withStyles(styles)( class Header extends Component {
  state = {
    auth: true,
    anchorEl: null,
  };


  handleMenu = event => {
    //Open Left
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render(){
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

        return (
          <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              React Learning
            </Typography>
           
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit">
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
          </Toolbar>
        </AppBar>
          );
    }

})

}
```

* Update App.js to refer to Header component we just built

```sh
// src/App.js 

import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
export default class App extends Component {
  render() {
    return (
    <div>
      <Header/>
      <h1>Main Content Area</h1>
    </div>);

  }

}
```

* Run the app with 
```sh 
npm start 
```
The app should start and the page should now look like this:

<p align='center'>
<img src='Documentation/Screen2.png' width='600' alt='Screen 2'>
</p>

## Setting up routes
 