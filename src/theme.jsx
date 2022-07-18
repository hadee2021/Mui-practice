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
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'dashed' },
          style: {
            border: `2px dashed ${blue[500]}`,
            color: red[600]
          },
        },
      ],
    },
  },
})

export default theme