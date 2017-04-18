import React, { Component } from 'react';

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
class Button extends Component {
  render = () =>
    <MButton primary raised {...this.props}>
      Press me!
    </MButton>
}

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

const Home = () => (
  <CardWrapper>
    <ResponsiveCard>
      <CardContent>
        <Text type="headline" component="h2">State handling in React</Text>

        <MyButton />
      </CardContent>
    </ResponsiveCard>
  </CardWrapper>
);

export default Home;
