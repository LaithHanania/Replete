import { darken, lighten } from "polished";

export const primary = "#3C3939";
export const secondary = "#FFEFD5";

export const PRIMARY = "#008FC5";
export const SECONDARY = "#ff5b55";
export const TERTIARY = "#f4ff55";

export const PRIMARY_DARK = darken(0.25, PRIMARY);
export const SECONDARY_DARK = darken(0.05, SECONDARY);
export const TERTIARY_DARK = darken(0.25, TERTIARY);

export const PRIMARY_LIGHT = lighten(0.57, PRIMARY);

export const LIGHT_GREY = lighten(0.05, "#D9D9D9");

export const PRIMARY_TEXT = "#000000";
