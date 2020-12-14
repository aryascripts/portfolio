import "./../styles/global.css";
function Application({ Component, pageProps }) {
  return (
    <div className="bg-offwhite-light">
      <Component {...pageProps} />
    </div>
  );
}

export default Application;
