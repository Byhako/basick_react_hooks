import { makeStyles } from '@material-ui/styles';

const centeredObj = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export default makeStyles({
  container: {
    height: '100vh',
    ...centeredObj,
    flexDirection: 'column',
  },
  cardContainer: {
    ...centeredObj,
    flexDirection: 'column',
    width: 400,
    height: 200,
    padding: '2rem',
    paddingTop: '1rem'
  },
  title: {
    fontSize: '3rem',
    marginBottom: 6
  },
  titleGridContainer: {
    ...centeredObj,
    justifyContent: 'space-evenly',
    marginBottom: '1rem'
  },
  textFieldSearch: {
    width: '90%'
  },
  buttonsContainer: {
    marginTop: '2rem'
  },
  searchButton: {
    marginLeft: '0.5rem'
  },
  movieIcon: {
    fontSize: '3rem'
  }
});
