import { DATA } from "../mocks/data";

export type AllDataTypes = typeof DATA[0];

export type LoanInfoType = AllDataTypes["loanInfo"];
export type PaymentSliderInfoType = AllDataTypes["paymentSlider"];
export type PaymentInfoType = AllDataTypes["paymentInfo"];
export type TermsConditionsType = AllDataTypes["termsAndConditionsMarkdown"];
export type ButtonLabelType = AllDataTypes["buttonLabel"];
