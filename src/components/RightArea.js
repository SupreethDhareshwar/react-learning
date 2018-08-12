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
