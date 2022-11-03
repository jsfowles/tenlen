import React from "react";
import ReactMarkdown from "react-markdown";
import { TermsConditionsType } from "../utils/types";

interface TermsAndConditionsProps {
  termsAndConditionsMarkdown: TermsConditionsType;
}

const TermsAndConditions = ({
  termsAndConditionsMarkdown,
}: TermsAndConditionsProps) => {
  return (
    <div className="text-[10px] px-8 flex-col flex items-center">
      <div className="text-center italic text-gray-500">
        <ReactMarkdown children={termsAndConditionsMarkdown} />
      </div>
    </div>
  );
};

export default TermsAndConditions;
