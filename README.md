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
 
 Let us create a main component where we will define different routes to different pages.

 * First update App.js to render newly created Main Component in src/components
```sh
// src/App.js 

import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js'
export default class App extends Component {
  render() {
    return (
    <div>
      <Header/>
      <Main/>
    </div>);

  }

}
```

* Let us install react-router-dom package. This will be used to define different routes.
```sh
npm install react-router-dom --save
```
You can read more about react router <a href="https://reacttraining.com/react-router/web/example/basic">here</a>

* Let us define Main.js with different routes
```sh
//src/compoennts/Main.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home.js';
export default class Main extends Component{
    render(){
        return(
            <Router>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </div>
          </Router>
        );
    }
}
const About = () => (
    <div>
      <h2>About</h2>
    </div>
  );
```
Let us also define Home component

```sh
//src/components/Home.js
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HomeLogo from '../home-page.jpg';
const styles = {
    card: {
        width: '50%',
        marginLeft:'25%',
        marginTop:'5%'
    },
    media: {
      height: '275px'
    }
  };

export default withStyles(styles) (class Home extends Component{
    render(){
        const classes = this.props.classes;
        return(
            <div>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={HomeLogo}
                title="Home"
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  Home Page
                </Typography>
                <Typography component="p">
                A home page is generally the main page a visitor navigating to a website from a web search engine will see, and it may also serve as a landing page to attract visitors.
                The home page is used to facilitate navigation to other pages on the site by providing links to prioritized and recent articles and pages, and possibly a search box.
                For example, a news website may present headlines and first paragraphs of top stories, with links to full articles, in a dynamic web page that reflects the popularity and recentness of stories. Meanwhile, other websites use the homepage to attract users to create an account. Once they are logged in, the homepage may be redirected to their profile page. 
                This may in turn be referred to as the "personal home page".   </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </div>
        );
    }
})
```
Make sure to add home-page.jpg image in src folder and also update Index.cs
```sh
body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  background-color: #dddddd;
}
```
* The page will load home page card at http://localhost:3000/ and just about message when routing to http://localhost:3000/about

<p align='center'>
<img src='Documentation/Screen3.png' width='600' alt='Screen 3'>
</p>

## Inter Components Data 

Let us now divide up home component into left and right components 

* Make changes to HomeComponent to include LeftArea and RightArea Components

```sh

//src/components/Home.js
import React, { Component } from 'react';
import LeftArea from './LeftArea';
import RightArea from './RightArea';

export default class Home extends Component{
constructor(props){
  super(props)
  this.state={
    selectedRow : {}
 }
 this.getRowData=this.getRowData.bind(this);
}
  getRowData(obj){
  this.setState({
    'selectedRow':obj
  });
}  
render(){
  return(
    <div>
      <LeftArea sendRowData={ this.getRowData } />
      <RightArea selectedRow={this.state.selectedRow}/>
    </div>
  )
}
}

```

* LeftArea - Let us define a table component with sample data from materia-ui/tables

```sh

//src/components/LeftArea.js

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';

let counter = 0;
function createData(name, calories, fat, carbs, protein) {
  counter += 1;
  return { id: counter, name, calories, fat, carbs, protein };
}

const columnData = [
  { id: 'name', numeric: false, disablePadding: false, label: 'Dessert (100g serving)' },
  { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
  { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' }
];

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { order, orderBy } = this.props;

    return (
      <TableHead>
        <TableRow>
          {columnData.map(column => {
            return (
              <TableCell
                key={column.id}
                numeric={column.numeric}
                padding={column.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === column.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={order}
                    onClick={this.createSortHandler(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired
};

const styles = theme => ({
  root: {
    width: '45%',
    marginTop: theme.spacing.unit * 3,
    marginLeft:theme.spacing.unit*3,
    paddingLeft:theme.spacing.unit*3,
    paddingRight:theme.spacing.unit*3,
    display:'inline-block'
  },
  table: {
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class EnhancedTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      order: 'asc',
      orderBy: 'name',
      data: [
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Donut', 452, 25.0, 51, 4.9),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Honeycomb', 408, 3.2, 87, 6.5),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Jelly Bean', 375, 0.0, 94, 0.0),
        createData('KitKat', 518, 26.0, 65, 7.0),
        createData('Lollipop', 392, 0.2, 98, 0.0),
        createData('Marshmallow', 318, 0, 81, 2.0),
        createData('Nougat', 360, 19.0, 9, 37.0),
        createData('Oreo', 437, 18.0, 63, 4.0),
      ].sort((a, b) => (a.name < b.name ? -1 : 1)),
      page: 0,
      rowsPerPage: 5,
    };
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    const data =
      order === 'desc'
        ? this.state.data.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
        : this.state.data.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));

    this.setState({ data, order, orderBy });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { data, order, orderBy, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(n => {
                return (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={n.id}
                    onClick={()=> this.props.sendRowData(n) }
                  >
                    <TableCell component="th" scope="row" >
                      {n.name}
                    </TableCell>
                    <TableCell numeric>{n.calories}</TableCell>
                    <TableCell numeric>{n.fat}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);

```

* Let us define the right are component that will display additional details of table on row click 

```sh

//src/components/RightArea.js
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
    card: {
        width: '45%',
        marginLeft:'24px',
        marginTop:'24px',
        float:'right',
        marginRight:'24px'
    },
    floarRight:{
      textAlign: 'right'
    }
  };

export default withStyles(styles) (class RightArea extends Component{
  
render(){
    const classes = this.props.classes;
        return(
            <Card className={classes.card}>
             
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  Additional Details
                </Typography>
                <List component="nav">
        <ListItem >
          <ListItemText primary="Dessert (100g serving)" />
          <ListItemText className={classes.floarRight} primary={this.props.selectedRow.name} />
        </ListItem>
        <ListItem >
          <ListItemText primary="Calories" />
          <ListItemText className={classes.floarRight} primary={this.props.selectedRow.calories} />
        </ListItem>
           <ListItem >
          <ListItemText primary="Fat(g)" />
          <ListItemText className={classes.floarRight} primary={this.props.selectedRow.fat} />
        </ListItem>
        <ListItem >
          <ListItemText primary="Proteins(g)" />
          <ListItemText className={classes.floarRight} primary={this.props.selectedRow.protein} />
        </ListItem>
        <ListItem >
          <ListItemText primary="Carbs(g)" />
          <ListItemText className={classes.floarRight} primary={this.props.selectedRow.carbs} />
        </ListItem>
      </List>
              </CardContent>
         
            </Card>
        );
}
})


```

* Note we have defined the prop getRowdata event handler to get data from row click and set the state of selected Row and pass it to right area component as a property

* Finally we get the output as follows :

<p align='center'>
<img src='Documentation/Screen4.png' width='600' alt='Screen 3'>
</p>