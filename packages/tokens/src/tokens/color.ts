import {
  BackgroundColors,
  BorderColors,
  BrandColors,
  Colors,
  ContrastColors,
  DataVizColors,
  PaletteColors,
  TextColors,
} from '../types';

const palette: PaletteColors = {
  blue: {
    50: { value: '#ECF4FE' },
    100: { value: '#C9E1FB' },
    200: { value: '#95C5F8' },
    300: { value: '#62A9F4' },
    400: { value: '#308DF1' },
    500: { value: '#0072EC' },
    600: { value: '#005CBE' },
    700: { value: '#00458E' },
    800: { value: '#003772' },
    900: { value: '#002956' },
  },
  brown: {
    50: { value: '#FAF0E7' },
    100: { value: '#EAD9CE' },
    200: { value: '#D8C1B2' },
    300: { value: '#C4A794' },
    400: { value: '#B3917B' },
    500: { value: '#A27C62' },
    600: { value: '#95715A' },
    700: { value: '#84634F' },
    800: { value: '#755646' },
    900: { value: '#64473A' },
  },
  cerulean: {
    50: { value: '#E8EAF6' },
    100: { value: '#C4CBE8' },
    200: { value: '#9DAAD9' },
    300: { value: '#7688C9' },
    400: { value: '#586EBE' },
    500: { value: '#3855B3' },
    600: { value: '#324DA9' },
    700: { value: '#28439D' },
    800: { value: '#203991' },
    900: { value: '#10277C' },
  },
  cyan: {
    50: { value: '#E0F7F8' },
    100: { value: '#B1ECED' },
    200: { value: '#7FDFE2' },
    300: { value: '#4AD1D7' },
    400: { value: '#1CC7D0' },
    500: { value: '#00BDCB' },
    600: { value: '#00ADB8' },
    700: { value: '#00989F' },
    800: { value: '#008488' },
    900: { value: '#00605E' },
  },
  grey: {
    50: { value: '#FAFAFB' },
    100: { value: '#F4F4F5' },
    200: { value: '#E4E6E7' },
    300: { value: '#D1D3D6' },
    400: { value: '#A9ADB1' },
    500: { value: '#898E94' },
    600: { value: '#697078' },
    700: { value: '#49515A' },
    800: { value: '#2A343F' },
    900: { value: '#091521' },
  },
  green: {
    50: { value: '#DDEFE6' },
    100: { value: '#C3E1D2' },
    200: { value: '#93C9AE' },
    300: { value: '#62B08B' },
    400: { value: '#329867' },
    500: { value: '#0E864C' },
    600: { value: '#0B6B3D' },
    700: { value: '#095731' },
    800: { value: '#074326' },
    900: { value: '#06361E' },
  },
  indigo: {
    50: { value: '#EAEAFD' },
    100: { value: '#CACCF7' },
    200: { value: '#A7ACF2' },
    300: { value: '#828AED' },
    400: { value: '#666EE8' },
    500: { value: '#4A4DE6' },
    600: { value: '#4544DA' },
    700: { value: '#3C38CE' },
    800: { value: '#342BC2' },
    900: { value: '#250DB0' },
  },
  mint: {
    50: { value: '#E0F6F2' },
    100: { value: '#B2E9DE' },
    200: { value: '#7DDCC9' },
    300: { value: '#3DCDB3' },
    400: { value: '#00C0A1' },
    500: { value: '#00B391' },
    600: { value: '#00A483' },
    700: { value: '#009372' },
    800: { value: '#008364' },
    900: { value: '#006547' },
  },
  orange: {
    50: { value: '#FBEDE7' },
    100: { value: '#FFD0BC' },
    200: { value: '#FFB291' },
    300: { value: '#FF9365' },
    400: { value: '#FF7B43' },
    500: { value: '#FF6422' },
    600: { value: '#F45E1E' },
    700: { value: '#E65719' },
    800: { value: '#D85015' },
    900: { value: '#BF420C' },
  },
  pink: {
    50: { value: '#FBE5EE' },
    100: { value: '#F6BED6' },
    200: { value: '#F194BA' },
    300: { value: '#ED6A9F' },
    400: { value: '#EA4C89' },
    500: { value: '#E83274' },
    600: { value: '#D72F70' },
    700: { value: '#C02C69' },
    800: { value: '#AA2964' },
    900: { value: '#852259' },
  },
  purple: {
    50: { value: '#F2E7FC' },
    100: { value: '#DDD0F3' },
    200: { value: '#C79BF2' },
    300: { value: '#B16FED' },
    400: { value: '#9E4AE8' },
    500: { value: '#8C18E2' },
    600: { value: '#8110DC' },
    700: { value: '#7300D3' },
    800: { value: '#6500CE' },
    900: { value: '#4E00C6' },
  },
  red: {
    50: { value: '#F5E9E8' },
    100: { value: '#F4CFCD' },
    200: { value: '#ECA9A5' },
    300: { value: '#E3837D' },
    400: { value: '#DA5D55' },
    500: { value: '#D44037' },
    600: { value: '#B4362F' },
    700: { value: '#942D27' },
    800: { value: '#75231E' },
    900: { value: '#551A16' },
  },
  yellow: {
    50: { value: '#FEFAE7' },
    100: { value: '#FBF1C4' },
    200: { value: '#F8E99F' },
    300: { value: '#F4E07B' },
    400: { value: '#F0D961' },
    500: { value: '#ECD348' },
    600: { value: '#DCC243' },
    700: { value: '#C8AC3D' },
    800: { value: '#B39638' },
    900: { value: '#90722F' },
  },
  black: { value: '#091521' },
  white: { value: '#FFFFFF' },
};

const background: BackgroundColors = {
  danger: { value: '#FBE5EA' },
  primary: palette.white,
  secondary: palette.grey[100],
  sideNav: { value: '#021C6B' },
  success: { value: '#E8F5E9' },
  surface: palette.white,
  tertiary: palette.grey[200],
  topNav: { value: '#1F3987' },
  warning: { value: '#FFF8E1' },
};

const border: BorderColors = {
  danger: { value: '#CD3D57' },
  disabled: palette.grey[100],
  primary: palette.grey[200],
  success: { value: '#43A047' },
  warning: { value: '#FFB300' },
};

const brand: BrandColors = {
  primary: palette.blue[500],
  gradient: { value: 'linear-gradient(90deg, #0072EC 0%, #4E00C6 163.65%, #8C18E2 191.59%)' },
};

const contrast: ContrastColors = {
  brand: palette.white,
  danger: palette.grey[900],
  success: palette.grey[900],
  warning: palette.grey[900],
};

const dataViz: DataVizColors = {
  danger: {
    fill: palette.red[300],
    hover: palette.red[600],
    line: palette.red[500],
  },
  neutral: {
    fill: palette.grey[300],
    hover: palette.grey[500],
  },
  primary: {
    fill: palette.indigo[300],
    'fill-alt': palette.indigo[100],
    hover: palette.indigo[600],
    line: palette.indigo[500],
  },
  secondary: {
    fill: palette.cyan[300],
    'fill-alt': palette.cyan[100],
    hover: palette.cyan[600],
    line: palette.cyan[500],
  },
  tertiary: {
    fill: palette.purple[300],
    'fill-alt': palette.purple[100],
    hover: palette.purple[600],
    line: palette.purple[500],
  },
  warning: {
    fill: palette.orange[300],
    hover: palette.orange[600],
    line: palette.orange[500],
  },
};

const text: TextColors = {
  danger: { value: '#CD3D57' },
  disabled: palette.grey[400],
  primary: palette.grey[900],
  secondary: palette.grey[700],
  success: { value: '#43A047' },
  tertiary: palette.grey[500],
  warning: { value: '#FFB300' },
};

export const color: Colors = {
  background,
  border,
  brand,
  'data-viz': dataViz,
  contrast,
  palette,
  text,
};
