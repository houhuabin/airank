import Script from "next/script";

import React from "react";

const LayoutScript = () => {
  return (
    // <><GoogleAnalyticsScript /></>
    <></>
  );
};

export default LayoutScript;
/*
const GoogleAnalyticsScript = () => {
    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-RFNX3HTB3Y" />
            <Script>
                {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', 'G-RFNX3HTB3Y');`}
            </Script>
        </>
    )

}
*/
