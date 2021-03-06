import 'jest-axe/extend-expect';

// eslint-disable-next-line no-undef
global.DOMRect = {
  fromRect: () => ({ bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0 }),
};

// eslint-disable-next-line no-undef
global.ResizeObserver = class ResizeObserver {
  constructor(cb) {
    this.cb = cb;
  }
  observe() {
    this.cb([{ borderBoxSize: { blockSize: 0, inlineSize: 0 } }]);
  }
  unobserve() {}
};
