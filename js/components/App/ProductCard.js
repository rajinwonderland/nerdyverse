import React from 'react';
import Relay from 'react-relay';
import {Card, CardActions, CardMedia, CardTitle, CardText, IconButton} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';



class ProductCard extends React.Component {
  render(){
    return(
      <Card style={styles.paper} zDepth={1}>
        <CardMedia>
        <img src={this.props.imgUrl} style={styles.image}/>
        </CardMedia>
        <CardTitle style={styles.cardTitle} title={this.props.title} titleStyle={styles.title} subtitle={this.props.price} subtitleColor={'#cc0000'} subtitleStyle={styles.subtitle} />
      </Card>
    );
  }

}
export default Relay.createContainer(ProductCard, {
  fragments: {
  }
});

const styles = {
  paper: {
    display: 'flex',
    flex: 2,
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    maxWidth: '300px',
    width: '300px',
    padding: 0,
    textAlign: 'left',

  },
  fab: {
    backgroundColor: '#008650',
    borderColor: 'transparent',
    borderHeight: 1,
    borderRadius: '25px',
    height: '50px',
    width: '50px',
  },
  cardTitle: {
    lineHeight: 1,
  },
  title: {
    color: '#000',
    fontFamily: 'HelveticaNeue',
    fontWeight: "600",
    fontSize: '1.25em',
  },
  subtitle: {
    color: '#cc0000',
    fontFamily: 'HelveticaNeue',
    fontWeight: "500",
    fontSize: '1em',
  },
  image: {
    width: '100%',
    height: '300px',
    resizeMode: 'cover',
  }
};
