/* eslint-disable import/prefer-default-export */
const currency = (num: number) => num.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export { currency };
