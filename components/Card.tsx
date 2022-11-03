import React from "react";

import { AllDataTypes } from "../utils/types";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button";
import PaymentInfo from "./PaymentInfo";
import PaymentSlider from "./PaymentSlider";
import LoanInfo from "./LoanInfo";
import TermsAndConditions from "./TermsAndConditions";
import Overlay from "./Overlay";
import CloseButton from "./CloseButton";

interface CardProps {
  data: Array<AllDataTypes>;
  setToggleCard: any;
}

const Card = ({ data, setToggleCard }: CardProps) => {
  return (
    <motion.div
      className="relative h-[800px] w-[500px] bg-white/30 rounded-3xl backdrop-blur-md shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Overlay />
      <div className="absolute inset-10 z-50 flex flex-col items-center justify-between rounded-2xl border-2 border-black bg-white p-4 shadow-2xl">
        <CloseButton setToggleCard={setToggleCard} />
        {data.map(
          ({
            paymentInfo,
            paymentSlider,
            loanInfo,
            termsAndConditionsMarkdown,
            buttonLabel,
          }) => (
            <React.Fragment key={loanInfo.loanId}>
              <LoanInfo loanInfo={loanInfo} />
              <PaymentSlider paymentSlider={paymentSlider} />
              <PaymentInfo paymentInfo={paymentInfo} />
              <Button>{buttonLabel}</Button>
              <TermsAndConditions
                termsAndConditionsMarkdown={termsAndConditionsMarkdown}
              />
            </React.Fragment>
          )
        )}
      </div>
    </motion.div>
  );
};

export default Card;
