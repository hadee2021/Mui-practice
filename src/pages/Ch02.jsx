import React from 'react'
import { 
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Link,
  Grid,
  Typography,
  Avatar,
  Box,
  Container
} from '@mui/material'

import {LockClockOutlined} from '@mui/icons-material'


const Ch02 = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1 , bgcolor: 'secondary.main'}}>
          <LockClockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <TextField 
          margin='normal'
          label="Email Address" 
          name="email" 
          required 
          fullWidth
          autoComplete='email'
        />
        <TextField 
          margin='normal'
          label="password" 
          type="password" 
          name="password" 
          required 
          fullWidth
          autoComplete='current-password'
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        
        <Button 
          type="submit" 
          fullWidth 
          variant='contained' 
          sx={{mt:3, mb: 2}}
        >
          Sign in
        </Button>
        <Grid container>
          <Grid item xs>
            <Link>Forget Password?</Link>
          </Grid>
          <Grid item >
            <Link>Sign Up</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Ch02