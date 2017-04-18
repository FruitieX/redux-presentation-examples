import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  CardContent,
  CardActions,
  CardMedia,
} from 'material-ui/Card';

import MButton from 'material-ui/Button';
import Text from 'material-ui/Text';

import CardWrapper from '../components/CardWrapper';
import ResponsiveCard from '../components/ResponsiveCard';

/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prop-types */
class Button extends Component {
  render = () =>
    <MButton primary raised {...this.props}>
      Press me!
    </MButton>
}

/* React example */
class MyButton extends Component {
  state = { toggled: false }; // Initial state

  render = () =>
    <div>
      <Button
        onClick={() => this.setState({
          toggled: !this.state.toggled })}
      />

      <div>{ `Toggled: ${this.state.toggled}` }</div>
    </div>
}

/* Redux example */
// Action type, action creator
export const PRESS_BUTTON = 'PRESS_BUTTON';
export const pressButton = () => ({ type: PRESS_BUTTON });

const mapStateToProps = state => ({
  toggled: state.button.toggled,
});

const mapDispatchToProps = dispatch => ({
  doToggle: () => dispatch(pressButton()),
});

@connect(mapStateToProps, mapDispatchToProps)
class MyButtonRedux extends Component {
  render = () =>
    <div>
      <Button
        onClick={this.props.doToggle}
      />

      <div>{ `Toggled: ${this.props.toggled}` }</div>
    </div>
}

const Home = () => (
  <CardWrapper>
    <ResponsiveCard>
      <CardContent>
        <Text type="headline" component="h2">State handling in React</Text>

        <MyButton />
      </CardContent>
    </ResponsiveCard>
    <ResponsiveCard>
      <CardContent>
        <Text type="headline" component="h2">State handling in Redux</Text>

        <MyButtonRedux />
      </CardContent>
    </ResponsiveCard>
  </CardWrapper>
);

export default Home;
