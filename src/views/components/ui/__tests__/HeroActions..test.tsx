import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as reactRenderer from 'react-test-renderer';
import HeroActions from '../HeroActions';

describe('HeroActions', () => {
  let component;
  let renderer;
  beforeEach(() => {
    renderer = reactRenderer();
    component = renderer.render(<HeroActions />);
  });

  it('should render correctly', () => {
    const result = component.toJSON();
    console.log(result);
  });

  it('should have correct prop values', () => {
    const result = component.toJSON();
    expect(result).toBe('HeroActions, Willson');
  });
});
