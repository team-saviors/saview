const convertIdxToTimeKey = (idx: number) => {
  switch (idx) {
    case 0:
      return '년';
    case 1:
      return '달';
    case 2:
      return '일';
    case 3:
      return '시간';
    case 4:
      return '분';
    default:
      return '방금';
  }
};

export const ISOHandler = (ISO: string) => {
  return ISO.split('T').join(' ').substr(0, 19);
};

export const timeConverter = (dateTime: {
  split: (arg0: string) => [any, any];
}) => {
  const timePicker = (timeArray: string | any[]) => {
    for (let i = 0; i < timeArray.length - 1; i++) {
      if (timeArray[i] > 0) {
        return { value: timeArray[i], key: convertIdxToTimeKey(i) };
      }
    }

    return { key: convertIdxToTimeKey(timeArray.length - 1) };
  };
  const [date, time] = dateTime.split('T');

  const [year, month, day] = date.split('-').map((e: any) => Number(e));
  const [hour, minute, second] = time.split(':').map((e: any) => Number(e));

  const createdAt = new Date(year, month - 1, day, hour, minute, second || 0);

  const timeGap = (Date.now() - createdAt.getTime()) / 1000;
  const yearGap = Math.floor(timeGap / (3600 * 24 * 30 * 12));
  const monthGap = Math.floor((timeGap / (3600 * 24 * 30)) % 12);
  const dayGap = Math.floor((timeGap / (3600 * 24)) % 30);
  const hourGap = Math.floor((timeGap / 3600) % 24);
  const minuteGap = Math.floor((timeGap / 60) % 60);
  const secondGap = Math.floor(timeGap % 60);

  const selectedTime = timePicker([
    yearGap,
    monthGap,
    dayGap,
    hourGap,
    minuteGap,
    secondGap,
  ]);

  return `${selectedTime.value ? selectedTime.value : ''}${selectedTime.key}전`;
};
