export const formatDate = (date: any) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const newDate = new Date(date);
  let _date = newDate.getDate();
  let month = months[newDate.getMonth()];
  return `${month}, ${_date}`;
};
