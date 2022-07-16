import React from 'react'
import  {
  Container,
  Grid
} from '@mui/material'

const Ch03 = () => {
  return (
    <Container maxWidth='lg'>
      <Grid container sx={{border:'1px solid black', height: '800px'}}>
        <Grid item xs={3} className='display-none'>
          왼쪽 네비
        </Grid>
        <Grid item xs sx={{border:'1px solid blue'}}>
          내용
        </Grid>
        <Grid item xs={3} className='display-none'>
          오른쪽 네비
        </Grid>
      </Grid>
    </Container>
  )
}

export default Ch03