import React from 'react'
import { 
  Button,
  ButtonGroup,
  Container,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material'
import { useState } from 'react'

function Header() {
  return(
    <header>
      <h1>welcome</h1>
    </header>
  )
}
function Nav() {
  return (
    <nav style={{ border: '1px solid gray'}}>
      <ol>
        <li>html</li>
        <li>css</li>
      </ol>
    </nav>
  )
}
function Article() {
  const [open, setOpen] = useState(false)
  return (
    <article style={{ border: '1px solid gray'}}>
      <h2>Welcome</h2>
      Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! 
      Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web!Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! 
      Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web!Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! 
      Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web!Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! 
      Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web!Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! 
      Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! 
      Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web!
      Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! 
      Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web! Heelo web!
      Heelo web! <br/>
      <ButtonGroup>
        <Button variant='outlined' onClick={() => setOpen(true)}>Create</Button>
        <Button variant='outlined'>Update</Button>
      </ButtonGroup>
      <Button variant='outlined'>Delete</Button>

      <Dialog open={open}>
        <DialogTitle>Create</DialogTitle>
        <DialogContent>
          <DialogContentText>Hello Create!!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined">Create</Button>
          <Button variant="outlined" onClick={() => setOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </article>
  )
}

const Ch01 = () => {
  return (
    <Container fixed>
      <Header></Header>
      <Grid container>
        <Grid item xs={2}>
          <Nav></Nav>
        </Grid>
        <Grid item xs={10}>
          <Article></Article>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Ch01