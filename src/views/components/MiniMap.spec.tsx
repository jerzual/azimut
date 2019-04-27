import { Component } from 'inferno';
import { renderIntoContainer } from 'inferno-test-utils';

import MiniMap from '../MiniMap';

describe('HeroActions', () => {
  let component;
  beforeEach(() => {
    component = renderIntoContainer(<MiniMap />);
  });

  it('should render correctly', () => {
    const result = component.toJSON();
    console.log(result);
  });

  it('should have correct prop values', () => {
    const result = component.toJSON();
    expect(result).toBe('MiniMap, Willson');
  });
});
