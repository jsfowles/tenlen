import React from "react";
import { capitalCase } from "../utils/helpers";
import { LoanInfoType } from "../utils/types";

interface LoanInfoProps {
  loanInfo: LoanInfoType;
}

const LoanInfo = ({ loanInfo }: LoanInfoProps) => {
  const loanInfoData = Object.entries(loanInfo);

  return (
    <div className="flex flex-col self-end pb-4" key={loanInfo.loanId}>
      {loanInfoData.map(([key, value], index) => (
        <div className="grid grid-cols-3 gap-2 font-mono text-xs" key={index}>
          <p className="col-span-2 text-right">{capitalCase(key)}:</p>
          <p className="text-right cols-span-1">{value}</p>
        </div>
      ))}
    </div>
  );
};

export default LoanInfo;
