
import '../style/styles.css'


import React from 'react';
import App from "next/app";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
    const Layout = Component.layout || (({ children }) => <>{children}</>);

  return (
    <React.Fragment>
    <Head>
      
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <title>Tested - ECU Solution</title>
      <link href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" rel="stylesheet" />
    </Head>
    <body className="body">
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </body>
  </React.Fragment>)
}

export default MyApp