import React from "react";

const Shades = ({ data }) => {
  let shades = data.all(10);
  // console.log("shades: ", shades);
  return (
    <div className="shadesCon">
      {shades.map((shade, ind) => {
        return (
          <div
            className={`fill ${ind > 9 ? "dark" : ""}`}
            style={{ backgroundColor: `#${shade.hex}` }}
            key={ind}
          >
            <div className="shadepc">{`${shade.weight}%`}</div>
            <div className="shadeHex">{`#${shade.hex}`}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Shades;
