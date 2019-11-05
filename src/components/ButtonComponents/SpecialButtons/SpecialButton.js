import React from "react";

const SpecialButton = (props) => {
  return (
    <span className='specials'>
      {props.specialChar}
    </span>
  );
};

export default SpecialButton