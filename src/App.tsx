import { AppBar, Box, Switch, Toolbar, Typography } from '@mui/material';
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
  const [isDark, setIsDark] = useState<boolean>(false);
  return (
    <RecoilRoot>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <CssBaseline />
        <Box display="flex" flexDirection="column" alignItems="center">
          <AppBar position="static">
            <Toolbar>
              <Box
                width="100%"
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
              >
                <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>[JWF] // [Recoil Demo]</Typography>
                <Switch
                  checked={isDark}
                  onChange={((e) => {
                    setIsDark(e.target.checked);
                  })}
                />
              </Box>
            </Toolbar>
          </AppBar>
          <ContentGrid />
        </Box>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
