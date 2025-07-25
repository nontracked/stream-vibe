import pxtorem from "postcss-pxtorem";

export const MatchMedia = {
  mobile : window.matchMedia(`(width <= ${pxtorem(767)}rem)`),
}