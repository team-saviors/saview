export const ISOHandler = (ISO) => {
  return ISO.split('T').join(' ').substr(0, 19);
};
