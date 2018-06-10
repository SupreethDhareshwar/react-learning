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