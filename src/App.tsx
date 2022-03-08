import { useEffect, useMemo, useState } from 'react';
import { Typography, Select, Box, MenuItem, SelectChangeEvent } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import useStyles from './styles';
import { levels } from './utils/constants';
import * as types from './store/types';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { isLoadingSelector, statusSelector, mapSelector } from './board/boardSlice';
import Board from './board/Board';

function App() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(isLoadingSelector);
  const status = useAppSelector(statusSelector);
  const map = useAppSelector(mapSelector);

  const [level, setLevel] = useState<string>('new 1');

  useEffect(() => {
    dispatch({ type: types.INITIALIZE_GAME });
  }, []);

  const message = useMemo(() => {
    switch (status) {
      case 'OK':
        return 'Playing';
      case 'You lose':
        return (
          <>
            You lose.
            <br /> Click START button to restart new game!
          </>
        );
      default:
        return 'Click START button to start new game!';
    }
  }, [status]);

  const handleLevelChange = (e: SelectChangeEvent) => {
    setLevel(e.target.value);
  };

  const handleStart = () => {
    dispatch({ type: types.START_GAME, payload: level });
  };

  return (
    <Box className={classes.container}>
      <Box className={classes.controls}>
        <Typography variant="h3" mt={3} mb={1}>
          Minesweeper
        </Typography>

        <Box className={classes.selectWrapper}>
          <Select
            className={classes.select}
            variant="standard"
            value={level}
            label="Level"
            onChange={handleLevelChange}>
            {levels.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
          <LoadingButton
            variant="contained"
            data-testid="btn-start"
            onClick={handleStart}
            disabled={isLoading}
            loading={isLoading}>
            Start
          </LoadingButton>
        </Box>

        <Typography variant="subtitle1" align="center" mt={2} mb={1}>
          {message}
        </Typography>
      </Box>

      <Box className={classes.boardWrapper}>
        <Board map={map} />
      </Box>
    </Box>
  );
}

export default App;
