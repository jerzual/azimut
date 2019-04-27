import { Component } from 'inferno';

import Scores from './Scores';
import { renderIntoContainer } from 'inferno-test-utils';

describe('Button', () => {
  const payload = {
    data: 'yo',
  };
  let component;
  beforeEach(() => {
    component = (<Scores>Label</Scores>);
  });

  it('should render like snapshot', () => {
    const renderedTree = renderIntoContainer(component);
    expect(renderedTree).toMatchSnapshot();
  });
});
