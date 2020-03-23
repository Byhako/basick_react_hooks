import React, { useState } from 'react';
import {
  Container,
  Card,
  Grid,
  Typography,
  TextField,
  Button
} from '@material-ui/core';

import { MovieIcon } from '../../icons';
import styles from './styles';

const Home = ({ history }) => {
  const [search, setSearch] = useState('');
  const classes = styles();

  const handleSearch = () => {
    history.push(`/results?movieName=${search}`);
  };

  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid container className={classes.titleGridContainer}>
          <Grid>
            <Typography className={classes.title}>Bienvenido</Typography>
          </Grid>
          <Grid>
            <MovieIcon className={classes.movieIcon} />
          </Grid>
        </Grid>

        <TextField
          className={classes.textFieldSearch}
          value={search}
          placeholder='Buscar'
          onChange={(e) => setSearch(e.target.value)}
        />

        <Grid className={classes.buttonsContainer}>
          <Button
            variant='contained'
            onClick={() => setSearch('')}
          >
            Limpiar
          </Button>
          <Button
            className={classes.searchButton}
            variant='contained'
            color='primary'
            onClick={handleSearch}
          >
            Buscar
          </Button>
        </Grid>
      </Card>
    </Container>
  )
}

export default Home;
