import { Theme } from './types';

const breakpoints = ['600px', '1024px', '1280px', '1920px'];

export const defaultTheme: Theme = {
  breakpoints,
  borderWidths: {
    'x-small': 1,
    small: 2,
    medium: 3,
    large: 4,
    'x-large': 6,
  },
  colors: {
    active: '#005CBE',
    background: '#FFFFF',
    black: '#000000',
    disabled: '#D5D7D9',
    divider: '#B8BBBF',
    error: {
      900: '#6f0929',
      800: '#8a0e2a',
      700: '#a51529',
      600: '#c11d25',
      500: '#d9544e',
      400: '#ec8373',
      300: '#f8b6a4',
      200: '#fbded1',
      100: '#fdf2ed',
    },
    focus: '#C9E1FB',
    hover: '#00458E',
    info: {
      900: '#0a2c8a',
      800: '#1040ac',
      700: '#1856cd',
      600: '#2170ef',
      500: '#5699f5',
      400: '#78b4fa',
      300: '#a1cdfe',
      200: '#d2eafe',
      100: '#eef7ff',
    },
    neutral: {
      900: '#0A1521',
      800: '#2A343F',
      700: '#49515A',
      600: '#646B72',
      500: '#80858C',
      400: '#9DA1A6',
      300: '#B8BBBF',
      200: '#D5D7D9',
      100: '#F4F4F5',
    },
    primary: '#0072EC',
    success: {
      900: '#0d681a',
      800: '#14821b',
      700: '#209b1d',
      600: '#37b529',
      500: '#6ed258',
      400: '#99e87c',
      300: '#c5f7aa',
      200: '#e4fbd4',
      100: '#f5fdef',
    },
    selected: '#005CBE',
    text: '#0A1521',
    warning: {
      900: '#904400',
      800: '#b35c00',
      700: '#d67700',
      600: '#f99500',
      500: '#fbb73e',
      400: '#fdcc65',
      300: '#fee198',
      200: '#fef2cb',
      100: '#fffaeb',
    },
    white: '#FFFFFF',
  },
  direction: 'ltr',
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Georgia, serif',
    mono: 'Menlo, monospace',
  },
  fontSizes: {
    1: '96px',
    2: '72px',
    3: '64px',
    4: '48px',
    5: '40px',
    6: '24px',
    7: '20px',
    8: '16px',
    9: '14px',
    10: '12px',
    11: '10px',
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  letterSpacings: {
    tighter: '-0.03em',
    tight: '-0.02em',
    normal: '-0.01em',
    wide: '0.08em',
  },
  lineHeights: {
    1: '80px',
    2: '72px',
    3: '56px',
    4: '48px',
    5: '40px',
    6: '32px',
    7: '28px',
    8: '24px',
    9: '20px',
    10: '16px',
    11: '14px',
  },
  mediaQueries: {
    small: `@media screen and (min-width: ${breakpoints[1]})`,
    medium: `@media screen and (min-width: ${breakpoints[2]})`,
    large: `@media screen and (min-width: ${breakpoints[3]})`,
    'x-large': `@media screen and (min-width: ${breakpoints[4]})`,
  },
  mode: 'light',
  radii: {
    none: 0,
    small: 2,
    medium: 4,
    large: 8,
    full: 9999,
  },
  shadow: {
    none: 'none',
    small: '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3',
    medium: '0px 2px 10px 4px rgba(0, 0, 0, 0.1), 5px 10px 10px rgba(0, 0, 0, 0.1)',
    large: '',
    'x-large': '',
  },
  sizes: {
    'xxx-small': '',
    'xx-small': '',
    'x-small': '',
    small: '',
    'xxx-medium': '',
    'xx-medium': '',
    'x-medium': '',
    medium: '',
    'xxx-large': '',
    'xx-large': '',
    'x-large': '',
    large: '',
  },
  space: {
    'xxx-small': '',
    'xx-small': '',
    'x-small': '',
    small: '',
    'xxx-medium': '',
    'xx-medium': '',
    'x-medium': '',
    medium: '',
    'xxx-large': '',
    'xx-large': '',
    'x-large': '',
    large: '',
  },
  zIndices: {
    dropdown: 1000,
    sticky: 1100,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    toast: 1700,
    tooltip: 1800,
  },
};