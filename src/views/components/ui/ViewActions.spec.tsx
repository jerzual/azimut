import { Component } from 'inferno';
import { renderIntoContainer } from 'inferno-test-utils';

import ViewActions from './ViewActions';

describe('ViewActions', () => {
  const abilities = {
    canMove: false,
    canAttack: false,
  };
  let component;
  beforeEach(() => {
    component = (<ViewActions abilities={abilities} />);
  });

  it('should render like snapshot', () => {
    const tree = renderIntoContainer(component);
    expect(tree).toMatchSnapshot();
  });

  it('should have correct prop values', () => {
    const tree = component.toJSON();
    expect(tree.props).toBe('Button, Willson');
  });
});
