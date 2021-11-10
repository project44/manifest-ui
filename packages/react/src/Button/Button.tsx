import * as Primitives from '@manifest-ui/primitive-button';
import { styled } from '../stitches.config';
import type { ComponentProps, VariantProps } from '../stitches.config';

export type ButtonProps = ComponentProps<typeof Button>;
export type ButtonVariants = VariantProps<typeof Button>;

export const Button = styled(Primitives.Button, {
  // Reset
  appearance: 'none',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

  // Custom
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$1',
  backgroundColor: 'transparent',
  border: '1px solid',
  borderColor: 'transparent',
  borderRadius: '$sm',
  fontFamily: '$body',
  fontWeight: '$medium',
  lineHeight: '1',
  py: '$2',
  outline: 'none',
  transition: '$fast',
  transitionProperty: 'background-color, border-color, box-shadow, color',
  '&:focus': {
    boxShadow: '0 0 0 4px $$outline',
  },
  '&:focus:not(:focus-visible)': {
    boxShadow: 'none',
  },
  '&:focus-visible': {
    boxShadow: '0 0 0 4px $$outline',
  },
  '&:disabled': {
    boxShadow: 'none',
    cursor: 'not-allowed',
  },
  variants: {
    full: {
      true: {
        width: '100%',
      },
    },
    size: {
      small: {
        fontSize: '$3',
        height: '30px',
        px: '$3',
        gap: '2px',
      },
      medium: {
        fontSize: '$4',
        height: '38px',
        px: '$4',
      },
      large: {
        fontSize: '$5',
        height: '48px',
        px: '$4',
      },
    },
    variant: {
      primary: getSolidStyles('blue'),
      secondary: {
        $$outline: '$colors$neutral200',
        borderColor: '$neutral300',
        color: '$neutral500',
        '&:hover': {
          borderColor: '$neutral400',
        },
        '&:active': {
          borderColor: '$neutral500',
          color: '$neutral600',
        },
        '&:disabled': {
          borderColor: '$neutral300',
          color: '$neutral300',
        },
      },
      tertiary: {
        $$outline: '$colors$blue200',
        color: '$blue600',
        '&:hover': {
          bg: '$blue100',
          color: '$blue500',
        },
        '&:active': {
          bg: '$blue200',
          color: '$blue600',
        },
        '&:disabled': {
          bg: 'transparent',
          color: '$neutral400',
        },
      },
      success: getSolidStyles('green'),
      danger: getSolidStyles('red'),
    },
  },
  defaultVariants: {
    size: 'medium',
    variant: 'primary',
  },
});

function getSolidStyles(color: string) {
  return {
    $$outline: `$colors$${color}200`,
    backgroundColor: `$${color}500`,
    color: 'white',
    '&:hover': {
      backgroundColor: `$${color}600`,
    },
    '&:active': {
      backgroundColor: `$${color}700`,
    },
    '&:disabled': {
      backgroundColor: '$neutral100',
      color: '$neutral400',
    },
  };
}
