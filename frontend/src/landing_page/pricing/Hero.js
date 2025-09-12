import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center p-5 mb-5 mt-5">
        <h1>Charges</h1>
        <p className="text-muted p-3 fs-5">List of all charges and taxes</p>
      </div>

      <div class="row mt-5 p-5" style={{ textAlign: "center" }}>
        <div class="col-4">
          <img src="media/images/pricing0.svg" style={{ width: "80%" }} className="p-2"/>
          <h2 className="p-2 fs-2 mb-4">Free equity delivery</h2>
          <p className="text-muted fs-5">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>

        <div class="col-4">
          <img src="media/images/intradayTrades.svg" style={{ width: "80%" }} className="p-2"/>
          <h2 className="p-2 fs-2 mb-4">Intraday and F&O trades</h2>
          <p className="text-muted fs-5">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>

        <div class="col-4">
          <img src="media/images/pricingEquity.svg" style={{ width: "80%" }} className="p-2"/>
          <h2 className="p-2 fs-2 mb-4">Free direct MF</h2>
          <p className="text-muted fs-5">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
