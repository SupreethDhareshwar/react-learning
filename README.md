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


## Setting up Bootstrap

Bootstrap is the most popular open source framework for developing responsive, mobile-first websites. You don’t have to use React Bootstrap together with React but it is a popular library for integrating Bootstrap with React apps. 

```sh
npm install --save react-bootstrap bootstrap@3
```

Import Bootstrap CSS in the beginning of your src/index.js file:

```sh
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
```

Import required React Bootstrap components within src/App.js file or your custom component files:

```sh
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
```

Now you are ready to use the imported React Bootstrap components within your component hierarchy defined in the render method. Here is the <a href="https://react-bootstrap.github.io/getting-started/introduction/">link</a> to read more on the react bootstrap components.

Let us build a simple Header component with react bootstrap and render it.

* Add components folder inside src and create a new file Header.js

```sh
// src/components/Header.js

import React, { Component } from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';

export default class Header extends Component {
    render(){
        return (
            <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">React-Learning</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav pullRight>
      <NavItem eventKey={1}>
        Home
      </NavItem>
      <NavItem eventKey={2} >
        About Us
      </NavItem>
      <NavItem eventKey={2} >
        Logout
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
          );
    }

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
 