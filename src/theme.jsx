import { createTheme } from '@mui/material/styles'
import { blue } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f44336',
    },
    neutral: {
      main: '#dc3545',
      light: blue[500],
      dark: '#2196f3'
    }
  },
})

export default theme