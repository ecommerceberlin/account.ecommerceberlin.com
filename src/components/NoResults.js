import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import Paper from 'material-ui/Paper';

import { Card, CardTitle, CardText } from 'material-ui/Card';

import { translate } from 'admin-on-rest';

const styles = {
  container: {
    //margin: 10,
    backgroundColor: 'yellow'
  }
};

const NoResults = props =>
  props.specialmessage ? (
    <Paper zDepth={2} style={styles.container}>
      <Card>
        <CardTitle
          title={props.translate(`${props.specialmessage}.noresults`)}
        />
        <CardText>
          {props.translate(`${props.specialmessage}.noresultsmore`)}
        </CardText>
      </Card>
    </Paper>
  ) : null;

const mapStateToProps = state => ({
  specialmessage: state.specialmessage
});

const enhance = compose(translate, connect(mapStateToProps, null));

export default enhance(NoResults);
