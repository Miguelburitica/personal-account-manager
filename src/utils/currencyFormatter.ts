type OptionsFormatter = {
  style: string;
  currency: string;
};

const FORMAT_LANGUAGE = "es-CO";

const useCurrencyFormatter = (amount: number) => {
  const formatter = new Intl.NumberFormat(FORMAT_LANGUAGE, {
    style: "currency",
    currency: "COP",
  });

  return formatter.format(amount);
};

export default useCurrencyFormatter;
