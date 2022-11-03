import React from "react";
import { capitalCase, currencyFormatter } from "../utils/helpers";
import { PaymentInfoType } from "../utils/types";

interface PaymentInfoProps {
  paymentInfo: PaymentInfoType;
}

const PaymentInfo = ({ paymentInfo }: PaymentInfoProps) => {
  const paymentInfoData = Object.entries(paymentInfo);

  return (
    <ul className="w-full space-y-2">
      {paymentInfoData.map(([key, value], index) => (
        <li className="flex w-full justify-between text-xs" key={index}>
          <p>{capitalCase(key)}</p>
          <p className="font-mono">
            {typeof value === "number"
              ? currencyFormatter.format(value)
              : value}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default PaymentInfo;
