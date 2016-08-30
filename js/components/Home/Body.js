import React from 'react';
import Relay from 'react-relay';
import {Row, Col} from 'react-bootstrap';
import Description from '../App/Description';

class Body extends React.Component {
  render() {
    return (
        <div>
            <Description />
        </div>
    );
  }
}

export default Relay.createContainer(Body, {
  fragments: {
  }
});

const styles = {
    heading: {
        padding: '100px 0 50px 0',
        fontSize: '25px',
        textAlign: 'center'
    },
    subheading: {
        padding: '0 0 50px 0',
        fontSize: '18px',
        textAlign: 'center',
        section: {
            padding: '25px'
        }
    }
};
