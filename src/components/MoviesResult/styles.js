import { makeStyles } from '@material-ui/styles';

export default makeStyles({
  cardContainer: {
    marginBottom: 8,
    padding: 5,
    width: '70%'
  },
  poster: {
    width: 120,
    minWidth: 120
  },
  gridContainer: {
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    maxWidth: 'calc(100% - 140px)'
  },
  btn: {
    width: 150
  }
})