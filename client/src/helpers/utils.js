import { PRIMARY, SECONDARY, TERTIARY_DARK } from "helpers/constants";

export const findValueColor = (value) => {
  return value > 0 ? PRIMARY : value < 0 ? SECONDARY : TERTIARY_DARK;
};
