import React from "react";
import Welcome from "./Welcome";

export const CustomComponent = (
  props: React.ComponentProps<typeof Welcome>
) => {
  return props.isKnown ? (
    <div>
      Welcome to {props.name}, we have {props.friends} friends
    </div>
  ) : (
    <div>welcome friends</div>
  );
};
