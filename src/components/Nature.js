import React from "react";

const Nature = ({ nature }) => {
  return (
    <div className="nature-container">
      <img width="100px" src="./nature.png" alt="nature" />
      Nature Information
      <div className="information">
        <p>
          Animals: <infotext>{nature.animals}</infotext>
        </p>
        <p>
          Jungle Area: <infotext>{nature.jungleArea}</infotext>
        </p>
        <p>
          Waterfalls: <infotext>{nature.waterfalls}</infotext>
        </p>
      </div>
    </div>
  );
};

export default Nature;
