import React from 'react';
import Relay from 'react-relay';
import {Paper, } from 'material-ui';
import { Slider, Slides, PrevArrow, NextArrow, Dots } from 'react-flex-slick';
import FontAwesome from 'react-fontawesome';

var slide1 = 'http://i.imgur.com/Qu2DVYt.png';

class ImgButton extends React.Component {
  render() {
    return (
          <a href="#">
            <Paper style={this.props.style} zDepth={1}>
              <img src={slide1} style={styles.image}/>
              <h1 style={styles.title}>{this.props.header}</h1>
            </Paper>
          </a>

    );
  }
}

export default Relay.createContainer(ImgButton, {
  fragments: {
  }
});

const styles = {
  paper: {
    flex: 2,
    width: '300px',
    padding: 0,

  },
  image: {
    width: '100%',
    resizeMode: 'cover',
  },

  title: {
    fontFamily: 'HelveticaNeue',
    fontSize: '1em',
    fontWeight: "600",
    color: '#fff',
    alignSelf: 'flex-start',
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 10,
  },
};
