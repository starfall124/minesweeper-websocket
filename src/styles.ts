import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    minHeight: '100vh',
    paddingLeft: 20,
    paddingRight: 20
  },
  controls: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectWrapper: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  select: {
    width: 200
  },
  boardWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  }
});

export default useStyles;
