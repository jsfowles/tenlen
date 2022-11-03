import React from "react";
import { currencyFormatter } from "../utils/helpers";
import { PaymentSliderInfoType } from "../utils/types";

interface ArcSliderProps {
  paymentSlider: PaymentSliderInfoType;
}

const PaymentSlider = ({ paymentSlider }: ArcSliderProps) => {
  return (
    <div className="flex h-60 w-60 flex-col items-center justify-center rounded-full border-8 slider-outer-shadow border-gray-200">
      <div className="flex h-48 w-48 flex-col items-center justify-center rounded-full border-8 slider-inner-shadow border-greenDark">
        <div className="flex flex-col items-center">
          <p className="font-mono text-xs text-gray-500">Payment Amount:</p>
          <div className="my-2 rounded-full border-2 border-black p-2 text-center font-mono text-3xl font-semibold">
            {currencyFormatter.format(paymentSlider.paymentAmount)}
          </div>
          <div className="flex">
            <p className="font-mono text-xs text-gray-500">Due Date:</p>
            <p className="font-mono text-xs text-gray-500">
              {paymentSlider.dueDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSlider;
