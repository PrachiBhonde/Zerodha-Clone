import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
   <div className="container" style={{marginBottom:"6em"}}>
      <div className="row" style={{alignItems:"center"}}>
        <div className="col-4 p-5">
          <h1>{productName}</h1>
          <p className="fs-5 text-muted mt-3">{productDescription}</p>
          <div className="mt-4">
            <a href={learnMore}>
              Learn More{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className="col-2"></div>

        <div className="col-6">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
