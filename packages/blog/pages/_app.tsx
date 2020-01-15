import React from "react";
// import App from 'next/app'
import { createGlobalStyle } from "styled-components";
import { makeResponsive } from "@heather-turano-coaching/design-system/utils";

const GlobalStyle = createGlobalStyle`
  html{
    ${makeResponsive({
      beginAt: "desktop",
      style: `
        font-size: 18px;
      `
    })}
  }
`;

// @ts-ignore
const MyApp = ({ Component, pageProps }) => {
  // @ts-ignore
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
