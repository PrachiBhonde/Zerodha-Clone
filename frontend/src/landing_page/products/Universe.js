import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center p-5">
        <h2 className="mb-4">The Zerodha Universe</h2>
        <p className="mb-4 fs-5 text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div class="col-4 p-3 mt-5">
          <img
            src="media/images/zerodhaFundHouse.png"
            style={{ width: "50%" }}
          />
          <p className="text-small text-muted mt-4">
            Our asset management venture that <br/> is creating simple and transparent
            index  <br/>funds to help you save for your goals.
          </p>
        </div>
        <div class="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" style={{ width: "50%" }} />
          <p className="text-small text-muted mt-5">
            Options trading platform that <br/> lets you create strategies, anal-<br/>yze 
            positions, and examine data <br/>points like open interest, FII/<br/>DII, and
            more.
          </p>
        </div>
        <div class="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" style={{ width: "50%" }} />
          <p className="text-small text-muted mt-4">
            Investment research platform that <br/>offers detailed insights on
            stocks,<br/> sectors, supply chains, and more.
          </p>
        </div>

        <div class="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" style={{ width: "50%" }} />
          <p className="text-small text-muted mt-4">
            Systematic trading platform that <br/>allows you to create and backtest<br/>
            strategies without coding.
          </p>
        </div>
        <div class="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" style={{ width: "50%" }} />
          <p className="text-small text-muted mt-4">
            Thematic investing platform that <br/> helps you invest in diversified<br/>
            baskets of stocks on ETFs.
          </p>
        </div>
        <div class="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" style={{ width: "35%" }} />
          <p className="text-small text-muted mt-4">
            Personalized advice on life and<br/> health insurance. No spam and <br/> no
            mis-selling. Sign up for free
          </p>
        </div>

        <button
          className="p-2 btn btn-primary fs-5 mt-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
