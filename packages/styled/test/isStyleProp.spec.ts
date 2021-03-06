import { isStyleProp } from '../src';

describe('@@manifest-ui/styled - isStyleProp', () => {
  it('should return true for a styled prop', () => {
    const result = isStyleProp('backgroundColor');

    expect(result).toBeTruthy();
  });

  it('should return false for a non styled prop', () => {
    const result = isStyleProp('children');

    expect(result).toBeFalsy();
  });
});
