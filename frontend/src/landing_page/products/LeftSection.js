import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container" style={{marginBottom:"6em"}}>
      <div className="row">
        <div className="col-6">
          <img src={imageURL} />
        </div>

        <div className="col-2"></div>

        <div className="col-4 p-5 ">
          <h1>{productName}</h1>
          <p className="fs-5 text-muted mt-3">{productDescription}</p>
          <div className="mt-4">
            <a href={tryDemo}>
              Try Demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{ marginLeft: "50px" }}>
              <img src="media/images/appStoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
