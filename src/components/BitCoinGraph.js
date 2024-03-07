import React, { useEffect, useRef, memo } from 'react';
import './BitCoinGraph.css'
const BitCoinGraph = () => {

    const container = useRef();

    useEffect(
        () => {
          const script = document.createElement("script");
          script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
          script.type = "text/javascript";
          script.async = true;
          script.innerHTML = `
            {
              "autosize": false,
              "symbol": "BITSTAMP:BTCUSD",
              "interval": "D",
              "timezone": "Etc/UTC",
              "theme": "light",
              "style": "2",
              "locale": "en",
              "enable_publishing": false,
              "hide_top_toolbar": true,
              "withdateranges": true,
              "save_image": false,
              "calendar": false,
              "support_host": "https://www.tradingview.com"
            }`;
    
          container.current.appendChild(script);
        },
        []
      );
  return (
    <div className="graph">

    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" ,maxWidth: "700px" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", maxWidth: "700px",width: "100%" , }}></div>
      <div className="tradingview-widget-copyright"></div>
    </div>
    </div>
  )
}

export default memo(BitCoinGraph);
