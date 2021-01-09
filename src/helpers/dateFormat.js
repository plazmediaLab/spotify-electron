import dayjs from 'dayjs';

export default function dateFormat(date, format = 'DD-MM-YYYY') {
  const newDate = date.toDate();
  const newFormat = dayjs(newDate).format(format);
  return newFormat;
}
