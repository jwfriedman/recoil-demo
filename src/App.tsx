import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import { RecoilRoot } from 'recoil';
import { ContentGrid } from './components/ContentGrid';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  const [isDark] = useState<boolean>(true);
  return (
    <RecoilRoot>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <CssBaseline />
        <Box display="flex" flexDirection="column" alignItems="center">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>[JWF] // [Recoil Demo]</Typography>
            </Toolbar>
          </AppBar>
          <ContentGrid />
        </Box>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
