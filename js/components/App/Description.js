import React from 'react';
import Relay from 'react-relay';
import FeaturedCards from './FeaturedCards';
import ImgButton from './ImgButton';

class Description extends React.Component {
  render() {
    return (
      <div>
      <div style={styles.wrapper}>
        <FeaturedCards/>
      </div>
      </div>
    );
  }
}

export default Relay.createContainer(Description, {
  fragments: {
  }
});

const styles = {
  wrapper: {
    display: 'flex',
    flex:1,
    flexDirection: 'column',
    width: '100%',
    height: '500px',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontFamily: 'HelveticaNeue',
    fontSize: '3em',
    fontWeight: "600",
    color: '#cc0000',
    alignSelf: 'flex-start',
    marginLeft: 15,
    marginTop: 40,
    marginBottom: 15,
  },


};
