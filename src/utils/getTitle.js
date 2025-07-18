import { getIdFromTitle } from "./getIdFromTitle"

export const GetTitle = (title) => {
  const titleFormatted = getIdFromTitle(title)
  return {
    buttonId: `${titleFormatted}--tab`,
    contentId: `${titleFormatted}--tabpanel`
  }
}