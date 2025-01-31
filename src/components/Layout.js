import { Box, Container, ThemeProvider } from '@mui/material';
import { theme } from '../theme';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Box sx={{ minHeight: '100vh', py: 4 }}>
          {children}
        </Box>
      </Container>
    </ThemeProvider>
  );
}