import * as React from 'react';
import Stack from '@mui/joy/Stack';
import LinearProgress from '@mui/joy/LinearProgress';

export default function LinearBar() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 50 ? 50 : prevProgress + 1));
    }, 20);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Stack spacing={2} sx={{ flex: 1 }}>
      <LinearProgress determinate value={progress} />
    </Stack>
  );
}
