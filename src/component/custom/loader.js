import React from "react";
import { ReactComponent as Loader } from "../../../assets/icons/spinner.svg";

const LoaderComp = () => {
  return (
    <div className="loader">
      <Loader />
    </div>
  );
};

export default LoaderComp;
