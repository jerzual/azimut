import * as React from 'react';
import * as ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import MiniMap from '../MiniMap';

describe('HeroActions', () => {
  let component;
  beforeEach(() => {
    component = renderer.render(<MiniMap />);
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
