export const getIdFromTitle = (title) => {
  return title
  .toLocaleLowerCase()
  .replaceAll(' ','-')
}