export const toDate = (dateStr) => {
  const [year, month, day] = dateStr.split('-');
  return new Date(year, month - 1, day);
};
export const toBrazillianDate = (dateStr) => {
  const [year, month, day] = dateStr.split('-');
  return `${day}/${month}/${year}`;
};
