import { getAttrNameFromSelector } from "./getAttrNameFromSelector"

export const getParams = (element,dataAttrSelector) => {
  return JSON.parse(element.getAttribute(
    getAttrNameFromSelector(dataAttrSelector)
  ))
}