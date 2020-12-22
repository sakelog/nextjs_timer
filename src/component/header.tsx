import Head from 'next/head';

const Header = () => {
  return (
    <Head>
      <title>CountDownTimer</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </Head>
  );
};

export default Header;