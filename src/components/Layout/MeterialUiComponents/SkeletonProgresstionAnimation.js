import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';


export default function SkeletonAnimation() {




  return (
    <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ width:'100vw', height:'10vh'}} />
      {/* For other variants, adjust the size with `width` and `height` */}
      {/* <Skeleton variant="circular" width={60} height={60} /> */}
      <Skeleton variant="rectangular" width={'100vw'} height={'65vh'} />
      <Skeleton variant="rounded" width={'100vw'} height={'20vh'} />
    </Stack>
  );
}