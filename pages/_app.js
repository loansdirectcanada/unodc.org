import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Script from "next/script";
import { ChakraProvider } from "@chakra-ui/react";

import "../public/css/main.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossOrigin="anonymous"
          ></link>
          <div>
            <link
              href="//www.unodc.org/cdn/favicon/standard/apple-touch-icon.png"
              sizes="180x180"
              rel="apple-touch-icon"
            />
            <link
              href="//www.unodc.org/cdn/favicon/standard/favicon-32x32.png"
              sizes="32x32"
              type="image/png"
              rel="icon shortcut"
            />
            <link
              href="//www.unodc.org/cdn/favicon/standard/favicon-16x16.png"
              sizes="16x16"
              type="image/png"
              rel="icon shortcut"
            />
            <link
              href="//www.unodc.org/cdn/favicon/standard/site.webmanifest"
              rel="manifest"
            />
            <link
              color="#5bbad5"
              href="//www.unodc.org/cdn/favicon/standard/safari-pinned-tab.svg"
              rel="mask-icon"
            />
            <meta content="#2b5797" name="msapplication-TileColor" />
            <meta content="#ffffff" name="theme-color" />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700|Roboto:400,500,700"
              type="text/css"
            />
            <link
              rel="stylesheet"
              href="//www.unodc.org/cdn/misc/fontawesome-free-5.7.1-web/css/all.min.css"
              type="text/css"
            />
            <link
              rel="stylesheet"
              href="//www.unodc.org/cdn/misc/bootstrap/latest/css/bootstrap.min.css"
              type="text/css"
            />
            <link
              rel="stylesheet"
              href="//www.unodc.org/cdn/misc/smartmenus-1.1.0/addons/bootstrap-4/jquery.smartmenus.bootstrap-4.css"
              type="text/css"
            />
            <link
              rel="stylesheet"
              href="//www.unodc.org/cdn/misc/tiny-slider/tiny-slider.css"
              type="text/css"
            />
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
              integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
              crossOrigin="anonymous"
              referrerpolicy="no-referrer"
            />
            <link
              rel="stylesheet"
              href="//www.unodc.org/cdn/shared/standard/css/site.css"
              type="text/css"
            />
            <link
              rel="stylesheet"
              href="//www.unodc.org/unodc/misc/css/site-local.css"
              type="text/css"
            />
            <link
              rel="stylesheet"
              href="//www.unodc.org/unodc/misc/css/site-static.css"
              type="text/css"
            />
            <title>Overview</title>
            <meta charSet="utf-8" />
            <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
            <meta
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
              name="viewport"
            />
            <meta content="Overview" property="og:title" />
            <meta
              content="//www.unodc.org/unodc/en/money-laundering/overview.html"
              property="og:url"
            />
            <meta
              content="United Nations : Office on Drugs and Crime"
              property="og:site_name"
            />
            <meta content="Overview" property="og:description" />
            <meta content="Overview" property="keywords" />
          </div>
        </Head>
        {/* <Navbar /> */}
        <Component {...pageProps} />
        {/* <Footer /> */}
        <Script
          type="text/javascript"
          src="//www.unodc.org/cdn/js/jquery/jquery-3.3.1.min.js"
          strategy="lazyOnload"
        ></Script>
        <Script
          type="text/javascript"
          src="//www.unodc.org/cdn/misc/jquery-ui-1.12.1.custom/jquery-ui.min.js"
          strategy="lazyOnload"
        ></Script>
        <Script
          type="text/javascript"
          src="//www.unodc.org/cdn/misc/bootstrap/latest/js/bootstrap.bundle.min.js"
          strategy="lazyOnload"
        ></Script>
        <Script
          type="text/javascript"
          src="//www.unodc.org/cdn/misc/smartmenus-1.1.0/jquery.smartmenus.min.js"
          strategy="lazyOnload"
        ></Script>
        <Script
          type="text/javascript"
          src="//www.unodc.org/unodc/misc/js/site-local.js"
          strategy="lazyOnload"
        ></Script>
        <Script
          type="text/javascript"
          src="//www.unodc.org/cdn/misc/smartmenus-1.1.0/addons/bootstrap-4/jquery.smartmenus.bootstrap-4.min.js"
          strategy="lazyOnload"
        ></Script>
        <Script
          type="text/javascript"
          src="//www.unodc.org/cdn/misc/lettering/jquery.lettering.js"
          strategy="lazyOnload"
        ></Script>
        <Script
          type="text/javascript"
          src="//www.unodc.org/cdn/js/moment/moment-with-locales.min.js"
          strategy="lazyOnload"
        ></Script>
        <Script
          type="text/javascript"
          src="//www.unodc.org/cdn/js/moment/moment-duration-format.js"
          strategy="lazyOnload"
        ></Script>
        <Script
          type="text/javascript"
          src="//www.unodc.org/cdn/shared/standard/js/site.min.js"
          strategy="lazyOnload"
        ></Script>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
