import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#FFC901',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F7F7F7',
    },
    text: {
      primary: '#000000',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 25,
          padding: '8px 24px',
        },
        outlined: {
          borderColor: '#000',
          color: '#000',
          '&:hover': {
            borderColor: '#000',
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        root: {
          flexDirection: 'row',
          alignItems: 'center',
        },
        iconContainer: {
          background: '#FFC901',
          borderRadius: '50%',
          padding: 8,
          marginRight: 16,
        },
      },
    },
  },
});