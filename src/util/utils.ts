export const formatNumber = (num: number) => {
  let numero = (Math.round(num * 100) / 100).toFixed(2);
  return numero.replace(".", ",");
};
