import * as React from 'react';
import { axe, toHaveNoViolations } from 'jest-axe';
import {
  fireEvent,
  RenderResult,
  render as rtlRender,
  RenderOptions as RtlRenderOptions,
} from '@testing-library/react';
import { RunOptions } from 'axe-core';

expect.extend(toHaveNoViolations);

export interface RenderOptions extends Omit<RtlRenderOptions, 'wrapper'> {
  wrapper?: typeof Wrapper;
}

export type RenderA11yOptions = RenderOptions & { axeOptions?: RunOptions };

function Wrapper({ children }: { children: React.ReactElement }) {
  return children;
}

export const render = (
  ui: Parameters<typeof rtlRender>[0],
  { wrapper: RenderWrapper = Wrapper, ...options }: RenderOptions = {},
): RenderResult => rtlRender(<RenderWrapper>{ui}</RenderWrapper>, options);

export const testA11y = async (
  ui: Parameters<typeof rtlRender>[0] | Element,
  { axeOptions, ...options }: RenderA11yOptions = {},
) => {
  const container = React.isValidElement(ui) ? render(ui, options).container : ui;

  const results = await axe(container, axeOptions as RunOptions);

  expect(results).toHaveNoViolations();
};

export { rtlRender };
export { axe };
export * from '@testing-library/react';
export {
  act as invoke,
  renderHook,
  RenderHookOptions,
  RenderHookResult,
} from '@testing-library/react-hooks';
export { default as userEvent } from '@testing-library/user-event';

// Simulate press events
export function triggerPress(element: Element, opts = {}) {
  fireEvent.mouseDown(element, { detail: 1, ...opts });
  fireEvent.mouseUp(element, { detail: 1, ...opts });
  fireEvent.click(element, { detail: 1, ...opts });
}
