const obtainTime = (n: number) => {
  const now: Date = new Date();
  const year: number = now.getFullYear();
  const month: number = now.getMonth() + 1;
  /* 返回今天是这个星期的星期几 */
  const day: number = now.getDay();
  n = day == 0 ? n + 6 : n + (day - 1);
  now.setDate(now.getDate() - n);
  const date = now.getDate();
  const s =
    year +
    "-" +
    (month < 10 ? "0" + month : month) +
    "-" +
    (date < 10 ? "0" + date : date);
  return s;
};

//上周的开始时间
// console.log(getTime(7));
//上周的结束时间
// console.log(getTime(1));
//本周的开始时间
// console.log(getTime(0));
//本周的结束时间
// console.log(getTime(-6));
//下周的开始时间
// console.log(getTime(-7));
//下周结束时间
// console.log(getTime(-13));

//["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"][new Date().getDay()];

export default obtainTime;
