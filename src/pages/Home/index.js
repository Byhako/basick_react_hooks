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

const Home = () => {
  const [search, setSearch] = useState('');
  const clases = styles();

  const handleSearch = () => {

  };

  return (
    <Container className={clases.container}>
      <Card className={clases.cardContainer}>
        <Grid container className={clases.titleGridContainer}>
          <Grid>
            <Typography className={clases.title}>Bienvenido</Typography>
          </Grid>
          <Grid>
            <MovieIcon className={clases.movieIcon} />
          </Grid>
        </Grid>

        <TextField
          className={clases.textFieldSearch}
          value={search}
          placeholder='Buscar'
          onChange={(e) => setSearch(e.target.value)}
        />

        <Grid className={clases.buttonsContainer}>
          <Button
            variant='contained'
            onClick={() => setSearch('')}
          >
            Limpiar
          </Button>
          <Button
            className={clases.searchButton}
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
