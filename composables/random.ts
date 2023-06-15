export const random = () => {
  const min = 1;
  const max = 151;
  return Math.floor(Math.random() * (max - min + 1) + min);
};
