import { focusStyles, visuallyHiddenStyles } from '@manifest-ui/theme-utils';
import { styled } from '@manifest-ui/styled';

const themeKey = 'checkbox';

export const StyledCheckboxContainer = styled('div', {
  slot: 'container',
  themeKey,
})(
  {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'neutral.500',
    borderRadius: 'medium',
    borderStyle: 'solid',
    borderWidth: 'medium',
    boxSizing: 'border-box',
    color: 'white',
    cursor: 'pointer',
    display: 'inline-flex',
    h: 18,
    justifyContent: 'center',
    w: 18,

    '&[data-disabled]': {
      cursor: 'not-allowed',
      opacity: 0.38,
    },

    '&[data-checked], &[data-indeterminate]': {
      backgroundImage: 'gradient.default',
      borderColor: 'transparent',

      '&[data-hover]': {
        borderColor: 'transparent',
      },

      '& > .manifestui-checkbox-icon': {
        opacity: 1,
      },
    },

    '&[data-hover]': {
      borderColor: 'neutral.600',
    },
  },
  ({ theme }) => focusStyles({ borderWidth: 'medium', theme }),
);

export const StyledCheckboxIcon = styled('svg', {
  slot: 'icon',
  themeKey,
})({
  fontSize: 18,
  h: 18,
  opacity: 0,
  transitionDuration: 'base',
  transitionProperty: 'common',
  w: 18,
});

export const StyledCheckboxLabel = styled('label', {
  slot: 'root',
  themeKey,
})({
  alignItems: 'center',
  cursor: 'pointer',
  display: 'inline-flex',
  justifyContent: 'flex-start',
  position: 'relative',
  verticalAlign: 'top',
  width: 'initial',

  '&[data-disabled]': {
    cursor: 'not-allowed',
    opacity: 0.38,
  },
});

export const StyledCheckboxInput = styled('input', {
  slot: 'input',
  themeKey,
})(visuallyHiddenStyles);

export const StyledCheckboxText = styled('span', {
  slot: 'text',
  themeKey,
})({
  fontFamily: 'body',
  fontSize: 'small',
  letterSpacing: 'normal',
  lineHeight: 'medium',
  marginInlineStart: 3,
});
