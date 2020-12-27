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
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        rel="stylesheet"
        href={
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        }
      />
      <link
        href={
          'https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap'
        }
        rel="stylesheet"
      />
      <link rel="manifest" href="./manifest.json" />
      {
        // favicon設定
      }
      <meta name="theme-color" content="#2196f3" />
    </Head>
  );
};

export default Header;
