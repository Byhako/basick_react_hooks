import { makeStyles } from '@material-ui/styles';

export default makeStyles({
  container: {
    backgroundColor: 'aliceblue',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100vw'
  },
  title: {
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center'
  },
  titleContainer: {
    display: 'flex'
  },
  btn: {
    position: 'absolute',
    left: 15
  }
})