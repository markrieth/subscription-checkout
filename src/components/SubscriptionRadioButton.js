import React from 'react';
import SubscriptionCard from "./SubscriptionCard";

const SubscriptionRadioButton = (props) => {
  const { classes, input } = props;
  return (
    <>
      <label>
        <SubscriptionCard {...props} checked={input.checked} />
        <input style={{display: 'none'}}
               type="radio"
               value={input.value}
               checked={input.checked}
               name={input.name}
               onChange={input.onChange} />
      </label>
    </>
  );
};

export default SubscriptionRadioButton