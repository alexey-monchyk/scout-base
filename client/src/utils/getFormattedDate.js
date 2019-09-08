export default (stringDate) => {
  const date = new Date(stringDate).toDateString();

  return date;
}