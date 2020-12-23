import { Container, CssBaseline } from '@material-ui/core';

import Header from '../component/header';

import Timer from '../component/timer';

const TopPage = () => {
  return (
    <Container maxWidth="sm">
      <Header />
      <CssBaseline />
      <h1>Simple CountDown Timer</h1>
      {Timer(180)}
    </Container>
  );
};

export default TopPage;
