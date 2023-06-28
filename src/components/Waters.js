import React from "react";

const Waters = ({ waters }) => {
  return (
    <div className="waters-container">
      <img width="100px" src="./waters.png" alt="waters" />
      Waters{" "}
      <div className="information">
        {waters.river && (
          <p>
            River: <infotext>{waters.river}</infotext>
          </p>
        )}
        {waters.sea && (
          <p>
            Sea: <infotext>{waters.sea}</infotext>
          </p>
        )}
      </div>
    </div>
  );
};

export default Waters;
