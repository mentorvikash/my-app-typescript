import React from "react";

// type RendomNumberType = {
//   number: number;
//   isPositive?: boolean;
//   isNegative?: boolean;
//   isZero?: boolean;
// };

type NumberType = {
  number: number;
};

type isPositiveType = NumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type isNegativeType = NumberType & {
  isPositive?: never;
  isNegative: boolean;
  isZero?: never;
};

type isZeroType = NumberType & {
  isPositive?: never;
  isNegative?: never;
  isZero: boolean;
};

type RendomNumberType = isPositiveType | isNegativeType | isZeroType


function RendomNumber({
  number,
  isPositive,
  isNegative,
  isZero,
}: RendomNumberType) {
  return (
    <div>
      {number} " " {isPositive && "Positive"} {isNegative && "Negative"}{" "}
      {isZero && "Zero"}
    </div>
  );
}

export default RendomNumber;
