export const OnlyAlpha = (entry = "") => {
  return /^[A-Za-z]*$/.test(entry);
};

export const OnlyNumbers = (entry = "") => {
  return /^[0-9/]*$/.test(entry);
};

export const transformValidate = (entry = "") => {};
