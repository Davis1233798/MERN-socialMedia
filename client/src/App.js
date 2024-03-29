import React from 'react'
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

const App = () => {
  return (
   <Container maxidth="lg" color="inherit">
    <AppBar>
      <Typography variant="h2" align='center' > Memory</Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch' spacing={4}>
            <Grid item xs ={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs ={12} sm={7}>
              <Form />
            </Grid>
            <Grid item xs ={12} sm={7}>
            </Grid>

          </Grid>
        </Container>
      </Grow>
   </Container>
  )
}

export default App