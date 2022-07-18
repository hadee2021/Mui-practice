import React from 'react'
import { ThemeProvider, Button } from '@mui/material'
import theme from '../theme'

const Ch04 = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained">Primary</Button>
      <Button variant="contained" color="neutral">Text</Button>
      <Button variant="text" sx={{backgroundColor:'red'}}>Text</Button>
    </ThemeProvider>
  )
}

export default Ch04