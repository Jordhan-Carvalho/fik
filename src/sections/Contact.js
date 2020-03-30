import React from 'react';


import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Triangle from '../components/Triangle';


import Section from '../components/Section';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);




const Contact = () => {
  const classes = useStyles();
    return (
      <Section.Container id="contato" Background={Background}>
        <Section.Header name="Contato" icon="✍️" label="Contato" />
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/sent">
                  <input type="hidden" name="form-name" value="contact" />
                  <TextField
                    id="standard-name"
                    label="Nome"
                    name="name"
                    margin="normal"
                  />
                  <p>
                    <TextField
                      id="standard-email"
                      label="Email"
                      name="email"
                      margin="normal"
                    />
                  </p>


                  <p>
                    <TextField
                      id="standard-full-width"
                      label="Mensagem"
                      name="message"
                      style={{ margin: 8 }}
                      placeholder="Mensagem"
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
          shrink: true,
        }}
                    />
                  </p>
                  
                  <div data-netlify-recaptcha="true" />
  
                  <p>
                    <Button variant="contained" color="primary" type="submit" className={classes.button}>
        Enviar
                    </Button>
          
                  </p>
                </form>

              </Paper>
            </Grid>
            
          </Grid>
        </div>
      </Section.Container>
    )
}

export default Contact

