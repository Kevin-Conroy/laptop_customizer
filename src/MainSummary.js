import React from "react";
import Total from "./Total";
import Option from "./Option";

/*const summary = Object.keys(this.state.selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = this.state.selected[feature];

*/

function MainSummary(props) {
  const summary = Object.keys(props.selection).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const selectedOption = props.selection[feature];

    return (
      <div>
        <Option
          featureHash={featureHash}
          feature={feature}
          selectedOption={selectedOption}
        />
      </div>
    );
  });

  return (
    <div>
      <h2>Your cart</h2>
      {summary}
      <Total total={props.total} />
    </div>
  );
}

export default MainSummary;
