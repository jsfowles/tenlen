export const capitalCase = (str: string) =>
  str
    .split(/(?=[A-Z])/)
    .map((s) =>
      s === "Id" ? "ID" : s.charAt(0).toUpperCase() + s.substring(1)
    )
    .join(" ");

export const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});
