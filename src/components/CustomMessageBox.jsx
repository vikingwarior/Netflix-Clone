import React from "react";

const CustomMessageBox = ({message="", colorScheme="green", hide=false}) => {
  // let componentStyleClasses = "mx-12 my-3 p-2 font-thin text-left rounded-md bg-green-950 text-green-300"

  return (
    <div
      className={"mx-12 my-3 p-2 font-thin text-left rounded-md bg-green-950 text-green-300"}
      hidden={hide}
      dangerouslySetInnerHTML={{ __html: message }}
    />
  );
};

export default CustomMessageBox;
