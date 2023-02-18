import React from "react";

/**
 * position porps to be of them:
 * 'left-center' | 'left-top' | 'left-bottom' | 'center-top'
 * 'center-bottom' | 'right-center' | 'right-top' | 'right-botom'
 */

type HorizontalPosition = "left" | "center" | "right";
type VertialPosition = "top" | "center" | "bottom";

type ToastType = {
  position:
    | Exclude<`${HorizontalPosition}-${VertialPosition}`, "center-center">
    | "center";
};

function Toast({ position }: ToastType) {
  return <div>The style postion is: {position}</div>;
}

export default Toast;
