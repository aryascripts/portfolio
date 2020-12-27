import "./../styles/global.css";
import Head from "next/head";
function Application({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Aman Bhimani: Software Developer</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default Application;
