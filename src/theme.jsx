import { createTheme } from '@mui/material/styles'
import { blue, red } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    neutral: {
      main: blue['A700'],
      light: blue[100],
      dark: blue[200]
    },
  },
})

export default theme