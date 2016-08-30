import React from 'react';
import Relay from 'react-relay';
import {Paper, } from 'material-ui';
import { Slider, Slides, PrevArrow, NextArrow, Dots } from 'react-flex-slick';
import FontAwesome from 'react-fontawesome';

var slide1 = 'http://i.imgur.com/Qu2DVYt.png';
var slide2 = 'http://i.imgur.com/HF5T6DS.png';
var slide3 = 'http://i.imgur.com/Zcirc4S.png';

class Hero extends React.Component {
  render() {
    return (
      <Slider infinite swipe draggable >
        <div/>
        <Slides {...this.props}>
          <div>
            <Paper style={styles.paper} zDepth={1}>
              <img src={slide1} style={styles.image}/>
            </Paper>
          </div>
          <div>
            <Paper style={styles.paper} zDepth={1}>
              <img src={slide2} style={styles.image}/>
            </Paper>
          </div>
          <div>
            <Paper style={styles.paper} zDepth={1}>
              <img src={slide3} style={styles.image}/>
            </Paper>
          </div>
        </Slides>
        <div/>
      </Slider>
    );
  }
}

export default Relay.createContainer(Hero, {
  fragments: {
  }
});

const styles = {
  paper: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    width: '100vw',
    padding: 0,

  },
  image: {
    width: '100%',
    resizeMode: 'cover',
    bottom: 0,
  }
};
