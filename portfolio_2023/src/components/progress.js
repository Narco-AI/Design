import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { grey, green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import ArticleIcon from '@mui/icons-material/Article';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export default function Progress() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 1000);
    }
  };

  const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});

  return (
  <>
  <ThemeProvider theme = {theme}>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ m: 1, position: 'relative' }}>
        <Fab
          aria-label="save"
          color="primary"
          sx={{buttonSx}}
          onClick={handleButtonClick}
        >
          {success ? <CheckIcon /> : <ArticleIcon />}
        </Fab>
        {loading && (
          <CircularProgress
            size={68}
            sx={{
              color: green[700],
              position: 'absolute',
              top: -6,
              left: -6,
              zIndex: 1,
            }}
          />
        )}
      </Box>
      </Box>
      </ThemeProvider>
    </>
     
  );
}