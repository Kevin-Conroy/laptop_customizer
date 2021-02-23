import React from "react";
import FEATURES from "./Features";
import Feature from "./Feature";
import slugify from 'slugify';

const MainForm = (props) => {
  const features = Object.keys(FEATURES).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const options = FEATURES[feature].map((item) => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <Feature
          itemHash={itemHash}
          feature={feature}
          item={item}
          selected={props.selectedOption}
          updateFeature={props.updateFeature}
        />
      );
    });

    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  });
    return (
        <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    )
};

export default MainForm;
