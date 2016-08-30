import React from 'react';
import Relay from 'react-relay';
import { Slider, Slides, PrevArrow, NextArrow, Dots } from 'react-flex-slick';
import FontIcon from 'material-ui/FontIcon';
import ProductCard from './ProductCard';



class FeaturedCards extends React.Component {
  render(){
    return(
      <Slider infinite swipe draggable >
      <div/>
      <Slides {...this.props}>
        <div style={styles.marketing}><ProductCard title="Batman Beyond Tee" price="$25.00" imgUrl={"https://d3p4rqdprelrd9.cloudfront.net/JPG%20500/BMB103-AT.jpg"}/></div>
        <div style={styles.marketing}><ProductCard title="Batman Beyond Tee" price="$25.00" imgUrl={"https://d3p4rqdprelrd9.cloudfront.net/JPG%20500/BMB103-AT.jpg"}/></div>
        <div style={styles.marketing}><ProductCard title="Batman Beyond Tee" price="$25.00" imgUrl={"https://d3p4rqdprelrd9.cloudfront.net/JPG%20500/BMB103-AT.jpg"}/></div>
        <div style={styles.marketing}><ProductCard title="Batman Beyond Tee" price="$25.00" imgUrl={"https://d3p4rqdprelrd9.cloudfront.net/JPG%20500/BMB103-AT.jpg"}/></div>
        <div style={styles.marketing}><ProductCard title="Batman Beyond Tee" price="$25.00" imgUrl={"https://d3p4rqdprelrd9.cloudfront.net/JPG%20500/BMB103-AT.jpg"}/></div>
        <div style={styles.marketing}><ProductCard title="Batman Beyond Tee" price="$25.00" imgUrl={"https://d3p4rqdprelrd9.cloudfront.net/JPG%20500/BMB103-AT.jpg"}/></div>
      </Slides>
      <div/>
    </Slider>
    );
  }

}
export default Relay.createContainer(FeaturedCards, {
  fragments: {
  }
});

const styles = {
  marketing: {
    display: 'flex',
    flex:1,
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },



};
