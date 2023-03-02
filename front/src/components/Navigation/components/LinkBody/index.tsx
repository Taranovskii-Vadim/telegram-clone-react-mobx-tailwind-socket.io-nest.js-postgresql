import { Chip, Grid, Typography } from '@mui/material';

import { LastMessage } from 'src/store/types';

import Flexbox from 'src/components/Flexbox';

interface Props {
  title: string;
  isEqual: boolean;
  unReadCount: number;
  currentUserId: U<number>;
  lastMessage: U<LastMessage>;
}

const COMMON = {
  width: '80%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
};

const LinkBody = ({ title, unReadCount, isEqual, currentUserId, lastMessage }: Props): JSX.Element => {
  const colorSx = { color: isEqual ? 'common.white' : 'inherit' };
  const sx = { ...COMMON, ...colorSx };

  return (
    <Grid item xs={9}>
      <Flexbox sx={{ flexWrap: 'wrap' }}>
        <Typography variant="h6" sx={sx}>
          {title}
        </Typography>
        {lastMessage ? (
          <>
            <Typography variant="subtitle1" sx={colorSx}>
              {lastMessage.createdAt}
            </Typography>
            <Typography variant="subtitle1" sx={sx}>
              {`${lastMessage.senderId === currentUserId ? 'You:' : ''} ${lastMessage.text}`}
            </Typography>
          </>
        ) : null}
        {unReadCount ? <Chip color="primary" size="small" label={unReadCount} /> : null}
      </Flexbox>
    </Grid>
  );
};

export default LinkBody;
