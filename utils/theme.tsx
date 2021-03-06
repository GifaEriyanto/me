import { extendTheme } from '@chakra-ui/core';
import { createContext } from 'react';

export const DarkThemeContext = createContext({
  darkMode: undefined,
  setDarkMode: undefined,
});

export const darkTheme = {
  primary: '#5f84cd',
  background: '#0f121c',
  highlight: '#e4b04e',
};

export const lightTheme = {
  primary: '#707070',
  background: '#fff',
  highlight: '#707070',
};

export const theme = (darkMode: boolean) =>
  extendTheme({
    config: {
      useSystemColorMode: true,
    },
    colors: darkMode ? darkTheme : lightTheme,
    fonts: {
      body: 'Fira Code, monospace',
      heading: 'Fira Code, monospace',
      mono: 'Fira Code, monospace',
    },
    fontSizes: {
      lg: '36px',
      xl: '56px',
    },
    radii: {
      sm: 0,
      md: 0,
      lg: 0,
    },
    components: {
      Button: {
        baseStyle: {
          fontWeight: 'normal',
          backgroundColor: 'inherit',
        },
        variants: {
          ghost: {
            color: 'primary',
            _hover: {
              backgroundColor: 'inherit',
            },
            _active: {
              backgroundColor: 'inherit',
            },
            _focus: {
              boxShadow: 'none',
              outline: 'none',
            },
          },
          function: {
            border: '1px solid',
            borderColor: 'primary',
            color: 'primary',
            _hover: {
              backgroundColor: 'inherit',
              _after: {
                content: '"()"',
              },
            },
            _active: {
              backgroundColor: 'inherit',
            },
            _focus: {
              boxShadow: `0 0 0 3px ${
                darkMode ? darkTheme.primary : lightTheme.primary
              }99`,
              _after: {
                content: '"()"',
              },
            },
          },
        },
        defaultProps: {
          size: 'md',
          variant: 'ghost',
        },
      },
      Drawer: {
        parts: ['content'],
        baseStyle: {
          content: {
            backgroundColor: 'background',
          },
        },
      },
      Link: {
        baseStyle: {
          _hover: {
            color: 'highlight',
          },
        },
      },
      Popover: {
        parts: ['content'],
        baseStyle: {
          content: {
            width: 'auto',
            maxWidth: 'initial',
            backgroundColor: 'background',
            borderColor: 'primary',
            _focus: {
              boxShadow: `0 0 0 3px ${
                darkMode ? darkTheme.primary : lightTheme.primary
              }99`,
            },
          },
        },
      },
    },
    styles: {
      global: () => ({
        _selection: {
          color: 'white',
          bgColor: 'highlight',
        },
        body: {
          backgroundColor: 'background',
          color: 'primary',
          transitionDuration: '0s',
          lineHeight: 1.6,
        },
      }),
    },
  });
