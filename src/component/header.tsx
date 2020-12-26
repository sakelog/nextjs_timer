import Head from 'next/head';

const Header = () => {
  return (
    <Head>
      <title>SimpleCountDownTimer</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <meta
        name="description"
        content="Next.jsで作成したカウントダウンタイマー"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#2196f3" />
    </Head>
  );
};

export default Header;
